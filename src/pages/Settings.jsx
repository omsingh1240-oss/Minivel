import { useEffect, useState } from "react"

export default function Settings(){

const [company,setCompany]=
useState("Minivel")

const [notifications,setNotifications]=
useState(true)

const [enhance,setEnhance]=
useState(true)

const [multiUpload,setMultiUpload]=
useState(true)

const [saved,setSaved]=
useState(false)

useEffect(()=>{

const settings=

JSON.parse(

localStorage.getItem(
"minivel_settings"
)

)

if(!settings)return

setCompany(
settings.company
)

setNotifications(
settings.notifications
)

setEnhance(
settings.enhance
)

setMultiUpload(
settings.multiUpload
)

},[])

function save(){

localStorage.setItem(

"minivel_settings",

JSON.stringify({

company,

notifications,

enhance,

multiUpload

})

)

setSaved(true)

setTimeout(

()=>{

setSaved(false)

},

1500

)

}

return(

<div
className="
min-h-screen

p-5
md:p-10

bg-slate-100
dark:bg-slate-950

dark:text-white
"

>

<h1
className="
text-5xl
font-bold
"
>

Settings

</h1>

<div
className="
mt-10

bg-white
dark:bg-slate-900

rounded-3xl

shadow

p-8

space-y-8
"

>

<div>

<label
className="
font-medium
"

>

Company Name

</label>

<input

value={
company
}

onChange={(e)=>

setCompany(
e.target.value
)

}

className="
w-full
mt-4
p-4

rounded-xl

border

text-black

dark:text-white
dark:bg-zinc-800
"
/>

</div>

<div
className="
flex
justify-between
items-center
"
>

<div>

<h3
className="
font-semibold
"
>

Notifications

</h3>

<p
className="
text-sm
text-gray-500
"
>

Dashboard alerts

</p>

</div>

<input

type="checkbox"

checked={
notifications
}

onChange={()=>

setNotifications(

!notifications

)

}
/>

</div>

<div
className="
flex
justify-between
items-center
"
>

<div>

<h3
className="
font-semibold
"
>

Scanner Auto Enhance

</h3>

<p
className="
text-sm
text-gray-500
"
>

Improve scanned image

</p>

</div>

<input

type="checkbox"

checked={
enhance
}

onChange={()=>

setEnhance(
!enhance
)

}
/>

</div>

<div
className="
flex
justify-between
items-center
"
>

<div>

<h3
className="
font-semibold
"
>

Multiple Uploads

</h3>

<p
className="
text-sm
text-gray-500
"
>

Allow many files

</p>

</div>

<input

type="checkbox"

checked={
multiUpload
}

onChange={()=>

setMultiUpload(
!multiUpload
)

}
/>

</div>

<button

onClick={
save
}

className="
bg-blue-700

text-white

px-6
py-3

rounded-xl

hover:bg-blue-800
"

>

{

saved

?

"Saved ✓"

:

"Save"

}

</button>

</div>

</div>

)

}
