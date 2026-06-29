const metrics=[

{
value:"10K+",
label:"Customers"
},

{
value:"98%",
label:"Retention"
},

{
value:"120+",
label:"Countries"
},

{
value:"24/7",
label:"Support"
}

]

export default function Metrics(){

return(

<section
className="
py-16
"
>

<div
className="
max-w-7xl
mx-auto
px-6
"
>

<div
className="
bg-white

rounded-[40px]

shadow

grid

grid-cols-2

lg:grid-cols-4

gap-10

p-10
"
>

{

metrics.map(

(item)=>(

<div

key={item.label}

className="
text-center
"
>

<h2
className="
text-5xl

font-black

text-blue-700
"
>

{item.value}

</h2>

<p
className="
mt-4

text-gray-500
"
>

{item.label}

</p>

</div>

)

)

}

</div>

</div>

</section>

)

}