import { ArrowRight, Building2, ShieldCheck, Sparkles, Target, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ServiceBreadcrumb from "../components/service-pages/ServiceBreadcrumb";
import ServiceCTA from "../components/service-pages/ServiceCTA";
import ServiceFAQ from "../components/service-pages/ServiceFAQ";
import RelatedServices from "../components/service-pages/RelatedServices";
import ServiceSchema from "../components/service-pages/ServiceSchema";
import { IMAGES } from "../constants/images";

const capabilities = [
  "Structural steel design coordination",
  "Industrial frame and support works",
  "Platform, canopy and stair steel works",
  "Plant and utility structure support",
  "Site execution and erection planning",
];

const structureTypes = [
  "Factory and plant structures",
  "Mezzanine and platform support steel",
  "Canopies and covered work areas",
  "Utility and service structures",
];

const workflow = [
  "Requirement analysis and site study",
  "Engineering calculations and detailing",
  "Fabrication coordination and delivery",
  "Installation with safety and QA controls",
];

const faqs = [
  {
    question: "What kinds of structural works do you undertake?",
    answer: "We support structural steel works, steel framing, platforms, canopies and industrial support structures for a wide range of facilities.",
  },
  {
    question: "Can you support both new structures and structural extensions?",
    answer: "Yes. We can assist with new builds as well as structural additions and reconfiguration work for facilities adapting to new requirements.",
  },
  {
    question: "Do you work across Gujarat?",
    answer: "Yes. Our engineering and structural works services are available to industrial clients across Ahmedabad and other Gujarat locations.",
  },
];

export default function StructuralWorksPage() {
  return (
    <>
      <SEO
        title="Structural Steel Works Contractor Gujarat | J.D. Enterprise"
        description="J.D. Enterprise offers structural steel works contractor services in Gujarat for industrial plants, support structures and engineering-led construction."
        keywords="structural steel works contractor Gujarat, industrial structural contractor Ahmedabad, steel structure contractor"
        url="https://jdfabrication.co.in/services/structural-works"
        ogTitle="Structural Steel Works Contractor Gujarat | J.D. Enterprise"
        ogDescription="J.D. Enterprise provides structural steel works and industrial support structures for projects across Gujarat."
      />
      <ServiceSchema
        serviceName="Structural Works"
        description="Structural steel and engineering-led works for industrial and commercial infrastructure in Gujarat."
        url="https://jdfabrication.co.in/services/structural-works"
        breadcrumbs={[{ name: "Services", item: "https://jdfabrication.co.in/services" }, { name: "Structural Works", item: "https://jdfabrication.co.in/services/structural-works" }]}
        faqs={faqs}
      />

      <main className="bg-slate-50 pt-24">
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
            <div>
              <ServiceBreadcrumb items={[{ label: "Services", to: "/services" }, { label: "Structural Works" }]} />
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
                <Building2 className="h-4 w-4" />
                Structural engineering support
              </div>
              <h1 className="mt-6 font-heading text-4xl font-bold leading-tight sm:text-5xl">Structural works that support industrial growth and long-term resilience</h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                J.D. Enterprise offers structural works that combine engineering review, fabrication coordination and expert execution for industrial buildings, support steel and facility extensions.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600">
                  Discuss your structural requirement
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/projects" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/20">
                  Explore completed structures
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl">
              <img src={IMAGES.industrialSheds} alt="Structural works project by J.D. Enterprise" className="h-[420px] w-full rounded-[1.5rem] object-cover" loading="eager" />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Structural capabilities</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Engineering-led structural steel works for complex industrial requirements</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our structural works services are intended for projects where strength, precision and coordinated execution matter from the earliest planning stage to final installation.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {capabilities.map((capability) => (
                <div key={capability} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                    <Target className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-semibold text-slate-900">{capability}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Structure types</p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Support systems for facilities that need more than basic framing</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {structureTypes.map((type) => (
                  <div key={type} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <p className="mt-4 font-semibold text-slate-900">{type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Engineering workflow</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">A structured process that keeps every stage aligned</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {workflow.map((step, index) => (
                <div key={step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">0{index + 1}</div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-slate-900">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Safety and quality</p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Quality and safety remain central to every structural work project</h2>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-slate-900">Controlled execution</h3>
                    <p className="mt-3 leading-7 text-slate-600">We manage structural works with a strong focus on safety, access planning and dependable installation practices.</p>
                  </div>
                </div>
                <div className="mt-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-slate-900">Practical detailing</h3>
                    <p className="mt-3 leading-7 text-slate-600">Our work supports serviceability, future maintenance and long-term structural performance for demanding facilities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Completed works</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">A broad portfolio of steel support and structural installations</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <img src={IMAGES.industrialSheds} alt="Industrial structure work completed by J.D. Enterprise" className="h-72 w-full rounded-[2rem] object-cover" loading="lazy" />
              <img src={IMAGES.pebBuildings} alt="Structural steel and industrial building work by J.D. Enterprise" className="h-72 w-full rounded-[2rem] object-cover" loading="lazy" />
            </div>
          </div>
        </section>

        <ServiceFAQ items={faqs} title="Structural works questions" />
        <ServiceCTA title="Let us support your next structural steel project" description="We can help coordinate the steel structure, support works and installation planning needed for your industrial or commercial facility." />
        <RelatedServices />
      </main>
    </>
  );
}
