import { useEffect, useState } from "react"

export default function UploadCenter(){

const [files,setFiles]=useState([])
const [dragging,setDragging]=useState(false)

useEffect(()=>{

const saved=
localStorage.getItem("minivel_uploads")

if(saved){

try{
setFiles(JSON.parse(saved))
}catch{
setFiles([])
}

}

},[])

useEffect(()=>{

localStorage.setItem(
"minivel_uploads",
JSON.stringify(files)
)

},[files])

function createItems(selected){

return Array.from(selected).map(file=>({

id: Date.now()+Math.random(),

name: file.name,

size: file.size,

type: file.type,

preview: file.type.startsWith("image/")
? URL.createObjectURL(file)
: null,

progress: 0

}))

}

function handleFiles(selected){

if(!selected?.length) return

setFiles(prev=>[
...prev,
...createItems(selected)
])

}

function handleDrop(e){

e.preventDefault()
setDragging(false)

handleFiles(e.dataTransfer.files)

}

function removeFile(id){

setFiles(prev=>prev.filter(f=>f.id!==id))

}

function simulateUpload(id){

const interval=setInterval(()=>{

setFiles(prev=>
prev.map(file=>{

if(file.id!==id) return file

const next=Math.min(file.progress+10,100)

return{
...file,
progress:next
}

})
)

},200)

setTimeout(()=>clearInterval(interval),2200)

}

return(

<div className="
bg-white dark:bg-zinc-900
rounded-3xl
shadow-sm
border border-slate-100 dark:border-zinc-800
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

☁️ Upload Center

</h2>

<p className="text-gray-500 text-sm mt-1">

Drop files or click to upload documents

</p>
</div>

{/* DROP AREA */}
<label
onDragOver={(e)=>{
e.preventDefault()
setDragging(true)
}}
onDragLeave={()=>setDragging(false)}
onDrop={handleDrop}
className={`
block
border-2 border-dashed
rounded-2xl
p-8 md:p-12
text-center
cursor-pointer
transition

${dragging
? "border-blue-500 bg-blue-50 dark:bg-zinc-800"
: "hover:bg-slate-50 dark:hover:bg-zinc-800"
}
`}
>

<div className="text-4xl mb-3">📁</div>

<p className="text-sm md:text-base text-gray-600 dark:text-gray-300">

Drag files or click to browse

</p>

<input
type="file"
multiple
onChange={(e)=>handleFiles(e.target.files)}
className="hidden"
/>

</label>

{/* EMPTY STATE */}
{files.length===0 && (
<div className="text-center text-gray-400 text-sm">
No uploads yet
</div>
)}

{/* FILE LIST */}
{files.length>0 && (
<div className="space-y-4">

{files.map(file=>(
<div
key={file.id}
className="
rounded-2xl
border border-slate-200 dark:border-zinc-800
p-4
space-y-3
hover:shadow-md
transition
bg-white dark:bg-zinc-900
"
>

{/* PREVIEW */}
{file.preview && (
<img
src={file.preview}
className="
w-full
h-auto
max-h-[220px]
object-contain
rounded-xl
"
/>
)}

{/* INFO ROW (FIXED) */}
<div className="
flex flex-col md:flex-row
md:justify-between
md:items-center
gap-4
">

{/* LEFT */}
<div className="min-w-0">
<p className="font-medium truncate max-w-[240px] md:max-w-[320px]">
{file.name}
</p>

<p className="text-sm text-gray-500">
{file.progress === 100
? "Ready ✓"
: `Uploading... ${file.progress}%`}
</p>
</div>

{/* RIGHT */}
<div className="
flex flex-wrap md:flex-nowrap
items-center gap-3
justify-start md:justify-end
">

<span className="text-gray-400 text-sm whitespace-nowrap">

{Math.round(file.size/1024)} KB

</span>

<button
onClick={()=>simulateUpload(file.id)}
className="
px-4 py-2
rounded-xl
bg-blue-700
text-white
text-sm
font-medium
hover:bg-blue-800
transition
active:scale-[0.98]
whitespace-nowrap
"
>

Upload

</button>

<button
onClick={()=>removeFile(file.id)}
className="
text-sm
text-red-500
hover:text-red-600
transition
whitespace-nowrap
"
>

Remove

</button>

</div>

</div>

{/* PROGRESS BAR */}
<div className="
h-2
bg-slate-100 dark:bg-zinc-800
rounded-full
overflow-hidden
">

<div
style={{width:`${file.progress}%`}}
className="h-full bg-blue-600 transition-all"
/>

</div>

</div>
))}

</div>
)}

</div>

)

}