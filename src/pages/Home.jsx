import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import DashboardPreview from "../components/DashboardPreview"
import Features from "../components/Features"
import Trusted from "../components/Trusted"
import CTA from "../components/CTA"
import Footer from "../components/Footer"
import Testimonials from "../components/Testimonials"
import Metrics from "../components/Metrics"

export default function Home(){

return(

<div className="
bg-gradient-to-b from-blue-50 to-white
dark:from-zinc-950 dark:to-zinc-950
transition
min-h-screen
overflow-x-hidden
">

{/* NAV */}
<Navbar />

{/* HERO */}
<section className="pt-10 md:pt-16">
<Hero />
</section>

{/* METRICS */}
<section className="mt-10 md:mt-16">
<Metrics />
</section>

{/* DASHBOARD PREVIEW */}
<section className="mt-16 md:mt-24">
<DashboardPreview />
</section>

{/* FEATURES */}
<section className="mt-16 md:mt-24">
<Features />
</section>

{/* TRUSTED */}
<section className="mt-12 md:mt-20">
<Trusted />
</section>

{/* TESTIMONIALS */}
<section className="mt-16 md:mt-24">
<Testimonials />
</section>

{/* CTA */}
<section className="mt-16 md:mt-24">
<CTA />
</section>

{/* FOOTER */}
<section className="mt-16">
<Footer />
</section>

</div>

)

}