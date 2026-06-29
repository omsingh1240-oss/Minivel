const activity=[

"New file uploaded",

"Scanner opened",

"Dashboard updated",

"Lead created"

]

export default function RecentActivity(){

return(

<div
className="
bg-white

rounded-3xl

shadow

p-8
"
>

<h2
className="
text-2xl
font-bold

mb-6
"
>

Recent Activity

</h2>

<div
className="
space-y-4
"
>

{

activity.map(

(item,index)=>(

<div

key={index}

className="
flex

gap-4

items-center

bg-slate-50

rounded-xl

p-4
"
>

<div
className="
w-3
h-3

rounded-full

bg-blue-700
"
/>

<p>

{item}

</p>

</div>

)

)

}

</div>

</div>

)

}