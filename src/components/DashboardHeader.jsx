import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function DashboardHeader(){

const [company,setCompany]=useState("Minivel")

useEffect(()=>{

const settings=

JSON.parse(
localStorage.getItem("minivel_settings")
)

if(settings?.company){
setCompany(settings.company)
}

},[])

return(

<div className="
flex
flex-col
md:flex-row
justify-between
gap-6
mb-10
pb-6
border-b border-slate-200/50 dark:border-zinc-800
">

{/* LEFT */}
<div className="space-y-1">

<h1 className="
text-3xl md:text-5xl
font-bold
text-slate-900 dark:text-white
">

Dashboard

</h1>

<p className="
text-gray-500
">

Welcome back

</p>

<p className="
text-lg
font-semibold
text-blue-700
mt-1
">

{company}

</p>

</div>

{/* RIGHT */}
<div className="
flex
flex-wrap
gap-3
items-center
">

<Link
to="/"
className="
bg-blue-700
text-white
px-5 py-3
rounded-xl
font-medium
transition
hover:bg-blue-800
active:scale-[0.98]
"
>

Home

</Link>

<input

placeholder="Search"

className="
border
border-slate-200 dark:border-zinc-700
bg-white dark:bg-zinc-900
text-slate-900 dark:text-white
px-5 py-3
rounded-xl
w-full md:w-[240px]
outline-none
focus:ring-2 focus:ring-blue-500
transition
"
/>

</div>

</div>

)

}