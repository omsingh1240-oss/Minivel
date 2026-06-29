import { useState } from "react"

const data=[
"Dashboard",
"Scanner",
"Upload Center",
"Lead Table",
"Analytics",
"Progress"
]

export default function SearchBar(){

const [query,setQuery]=useState("")

const filtered=

data.filter(

item=>

item
.toLowerCase()
.includes(
query.toLowerCase()
)

)

return(

<div className="relative">

<input

value={query}

onChange={
(e)=>
setQuery(
e.target.value
)
}

placeholder="Search dashboard"

className="
w-full
border

rounded-2xl

p-4
"
/>

{

query && (

<div
className="
absolute

w-full

bg-white

rounded-2xl

shadow

mt-2
"
>

{

filtered.length

?

filtered.map(

(item)=>(

<div

key={item}

className="
p-4
"
>

{item}

</div>

)

)

:

<div className="p-4">

No results

</div>

}

</div>

)

}

</div>

)

}