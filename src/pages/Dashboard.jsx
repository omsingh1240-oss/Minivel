import DashboardHeader from "../components/DashboardHeader"
import DashboardCard from "../components/DashboardCard"
import AnalyticsChart from "../components/AnalyticsChart"
import LeadTable from "../components/LeadTable"

import QuickActions from "../components/QuickActions"
import ProgressCard from "../components/ProgressCard"
import ScannerCard from "../components/ScannerCard"
import UploadCenter from "../components/UploadCenter"
import RecentActivity from "../components/RecentActivity"
import SearchBar from "../components/SearchBar"

import { stats, leads } from "../data/dashboardData"

export default function Dashboard() {

return (

<div className="
min-h-screen
bg-slate-50 dark:bg-zinc-950
transition
p-5 md:p-8 xl:p-10
overflow-x-hidden
">

{/* HEADER (kept sticky - correct use) */}
<div className="
sticky top-0 z-20
pb-5
backdrop-blur
bg-slate-50/80 dark:bg-zinc-950/80
">

<div className="space-y-5">

<DashboardHeader />
<SearchBar />

</div>

</div>

{/* STATS */}
<div className="
mt-6
grid
grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
gap-5
">

{stats.map(item => (

<div
key={item.title}
className="transition hover:-translate-y-1"
>

<DashboardCard
title={item.title}
value={item.value}
/>

</div>

))}

</div>

{/* MAIN LAYOUT */}
<div className="
mt-10
grid
grid-cols-1 lg:grid-cols-3
gap-6
items-start
">

{/* LEFT SIDE */}
<div className="
lg:col-span-2
space-y-6
">

<div className="rounded-3xl overflow-hidden">
<AnalyticsChart />
</div>

<div className="rounded-3xl overflow-hidden">
<LeadTable data={leads} />
</div>

</div>

{/* RIGHT SIDE (FIXED - NO STICKY) */}
<div className="
space-y-6
lg:self-start
">

<QuickActions />

<ScannerCard />

<UploadCenter />

<RecentActivity />

<ProgressCard />

</div>

</div>

</div>

)

}