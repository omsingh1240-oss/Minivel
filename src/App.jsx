import {
BrowserRouter,
Routes,
Route
} from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"

import DashboardLayout from "./layouts/DashboardLayout"
import ProtectedRoute from "./components/ProtectedRoute"

export default function App(){

return(

<BrowserRouter>

<div className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition">

<Routes>

{/* PUBLIC ROUTES */}
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />

{/* PROTECTED ROUTES */}
<Route element={
<ProtectedRoute>
<DashboardLayout />
</ProtectedRoute>
}>

<Route path="/dashboard" element={<Dashboard />} />
<Route path="/settings" element={<Settings />} />

</Route>

</Routes>

</div>

</BrowserRouter>

)

}