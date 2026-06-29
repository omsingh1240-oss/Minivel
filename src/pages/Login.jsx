import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { login } from "../utils/auth"

export default function Login(){

const navigate = useNavigate()
const [loading,setLoading] = useState(false)

async function handleLogin(){

try{

setLoading(true)

await Promise.resolve(login())

navigate("/dashboard", { replace:true })

}

finally{
setLoading(false)
}

}

return(

<div className="
min-h-screen
flex items-center justify-center
bg-gradient-to-br from-slate-100 to-white
dark:from-zinc-950 dark:to-zinc-900
px-6
">

{/* CARD */}
<div className="
bg-white dark:bg-zinc-900
w-full max-w-[450px]
rounded-3xl
shadow-sm
border border-slate-100 dark:border-zinc-800
p-10
transition
">

{/* HEADER */}
<div className="
flex justify-between items-center
mb-8
">

<h1 className="
text-4xl font-bold
text-slate-900 dark:text-white
">

Login

</h1>

<Link
to="/"
className="
text-blue-700
font-medium
hover:text-blue-800
transition
"
>

← Home

</Link>

</div>

{/* INPUTS */}
<input

placeholder="Email"

className="
w-full
border border-slate-200 dark:border-zinc-700
bg-white dark:bg-zinc-800
text-slate-900 dark:text-white
p-4
rounded-xl
mb-5
outline-none
focus:ring-2 focus:ring-blue-500
transition
"
/>

<input

type="password"

placeholder="Password"

className="
w-full
border border-slate-200 dark:border-zinc-700
bg-white dark:bg-zinc-800
text-slate-900 dark:text-white
p-4
rounded-xl
outline-none
focus:ring-2 focus:ring-blue-500
transition
"
/>

{/* BUTTON */}
<button

onClick={handleLogin}

disabled={loading}

className="
w-full
mt-8
bg-blue-700
text-white
p-4
rounded-xl
font-medium
transition
hover:bg-blue-800
active:scale-[0.98]
disabled:opacity-60
disabled:cursor-not-allowed
"

>

{loading ? "Opening Dashboard..." : "Login"}

</button>

{/* FOOTNOTE */}
<p className="
mt-6
text-center
text-gray-500
text-sm
">

Demo mode enabled

</p>

</div>

</div>

)

}