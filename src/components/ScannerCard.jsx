import { useRef, useState, useEffect } from "react"

export default function ScannerCard() {

const videoRef = useRef(null)
const canvasRef = useRef(null)

const [photo, setPhoto] = useState(null)
const [camera, setCamera] = useState(false)
const [loading, setLoading] = useState(false)
const [error, setError] = useState("")

function stopCamera() {

if (videoRef.current?.srcObject) {

videoRef.current.srcObject
.getTracks()
.forEach(track => track.stop())

videoRef.current.srcObject = null

}

setCamera(false)

}

async function openCamera() {

try {

setLoading(true)
setError("")

if (photo) setPhoto(null)

const stream =
await navigator.mediaDevices.getUserMedia({
video: true,
audio: false
})

setCamera(true)

requestAnimationFrame(() => {

if (!videoRef.current) {
setError("Video failed to load")
return
}

videoRef.current.srcObject = stream

videoRef.current.onloadedmetadata = async () => {
try {
await videoRef.current.play()
} catch {
setError("Unable to start camera")
}
}

})

}

catch (err) {

setError(
err.name === "NotAllowedError"
? "Camera permission denied"
: err.name === "NotFoundError"
? "No camera detected"
: "Unable to open camera"
)

}

finally {
setLoading(false)
}

}

function capture() {

const canvas = canvasRef.current
const video = videoRef.current

if (!video || !video.videoWidth) {
setError("Camera not ready")
return
}

canvas.width = video.videoWidth
canvas.height = video.videoHeight

const ctx = canvas.getContext("2d")

ctx.filter = "contrast(1.25) brightness(1.1) grayscale(1)"
ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

setPhoto(canvas.toDataURL("image/png"))

stopCamera()

}

useEffect(() => {
return () => stopCamera()
}, [])

return (

<div className="
bg-white dark:bg-zinc-900
rounded-3xl
shadow
p-5 md:p-7
space-y-5
transition
">

{/* HEADER */}
<div>
<h2 className="
text-xl md:text-2xl
font-bold
">

📷 Scanner

</h2>

<p className="text-gray-500 text-sm mt-1">

Open webcam and scan documents

</p>
</div>

{/* ERROR */}
{error && (
<div className="text-red-500 text-sm">
{error}
</div>
)}

{/* BUTTON */}
{!camera && (
<button
onClick={openCamera}
disabled={loading}
className="
w-full
px-4 py-3 md:py-4
rounded-xl
bg-blue-700
text-white
font-medium
transition
hover:bg-blue-800
disabled:opacity-60
"
>

{loading
? "Opening..."
: photo
? "Scan Again"
: "Scan Document"}

</button>
)}

{/* CAMERA */}
{camera && (
<div className="space-y-4">

<video
ref={videoRef}
autoPlay
playsInline
muted
className="
w-full
rounded-2xl
bg-black
shadow
"
/>

<button
onClick={capture}
className="
w-full
px-4 py-3
rounded-xl
bg-green-600
text-white
font-medium
hover:bg-green-700
transition
"
>

Capture

</button>

</div>
)}

{/* RESULT */}
{photo && (
<div className="space-y-3">

<img
src={photo}
alt="scan"
className="
w-full
rounded-2xl
shadow
contrast-125
brightness-110
grayscale
"
/>

<div className="
text-green-600
font-semibold
text-sm md:text-base
">

Document Ready ✓

</div>

</div>
)}

<canvas ref={canvasRef} className="hidden" />

</div>

)
}