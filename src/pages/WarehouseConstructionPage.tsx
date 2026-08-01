import { ArrowRight, Building, Clock3, Compass, Layers, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ServiceBreadcrumb from "../components/service-pages/ServiceBreadcrumb";
import ServiceCTA from "../components/service-pages/ServiceCTA";
import ServiceFAQ from "../components/service-pages/ServiceFAQ";
import RelatedServices from "../components/service-pages/RelatedServices";
import ServiceSchema from "../components/service-pages/ServiceSchema";
import { IMAGES } from "../constants/images";

const warehouseTypes = [
  "Distribution and logistics warehouses",
  "Manufacturing storage facilities",
  "Cold storage support buildings",
  "Industrial utility and plant warehouses",
];

const planningPoints = [
  "Clear-span structural planning",
  "Material flow and access coordination",
  "Roofing and cladding integration",
  "Future expansion readiness",
];

const workflow = [
  "Site study and design alignment",
  "Engineering and procurement planning",
  "Fabrication, delivery and erection",
  "Final handover and operational fit-out",
];

const features = [
  "Strong steel superstructure",
  "Weather-resistant roofing and walls",
  "Efficient layout planning",
  "Scalable construction approach",
];

const faqs = [
  {
    question: "Can you build warehouses for logistics as well as manufacturing use?",
    answer: "Yes. We plan warehouse solutions for distribution, storage, dispatch and industrial operations depending on your site and process requirements.",
  },
  {
    question: "Do you provide complete warehouse construction support?",
    answer: "Yes. We coordinate structural planning, fabrication, erection and roofing so the project can move ahead in a coordinated manner.",
  },
  {
    question: "Do you work across Gujarat?",
    answer: "Yes. Our warehouse construction services are available across Ahmedabad and wider Gujarat industrial zones.",
  },
];

export default function WarehouseConstructionPage() {
  return (
    <>
      <SEO
        title="Warehouse Construction Company in Gujarat | J.D. Enterprise"
        description="J.D. Enterprise offers warehouse construction in Gujarat with steel structures, roofing systems and execution support for industrial storage needs."
        keywords="warehouse construction Gujarat, industrial warehouse contractor Ahmedabad, steel warehouse builder"
        url="https://jdfabrication.co.in/services/warehouse-construction"
        ogTitle="Warehouse Construction Company in Gujarat | J.D. Enterprise"
        ogDescription="J.D. Enterprise delivers warehouse construction solutions for logistics, manufacturing and industrial storage across Gujarat."
      />
      <ServiceSchema
        serviceName="Warehouse Construction"
        description="Warehouse construction services with structural steel, roofing and execution support across Gujarat."
        url="https://jdfabrication.co.in/services/warehouse-construction"
        breadcrumbs={[{ name: "Services", item: "https://jdfabrication.co.in/services" }, { name: "Warehouse Construction", item: "https://jdfabrication.co.in/services/warehouse-construction" }]}
        faqs={faqs}
      />

      <main className="bg-slate-50 pt-24">
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
            <div>
              <ServiceBreadcrumb items={[{ label: "Services", to: "/services" }, { label: "Warehouse Construction" }]} />
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
                <Building className="h-4 w-4" />
                Warehouse infrastructure specialist
              </div>
              <h1 className="mt-6 font-heading text-4xl font-bold leading-tight sm:text-5xl">Warehouse construction designed for efficient operations and long-term value</h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                J.D. Enterprise delivers warehouse construction projects that bring together structural steel, roof systems, planning discipline and practical execution for industrial storage and logistics use.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600">
                  Plan your warehouse project
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/projects" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/20">
                  View completed projects
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl">
              <img src={IMAGES.warehouse} alt="Warehouse construction project by J.D. Enterprise" className="h-[420px] w-full rounded-[1.5rem] object-cover" loading="eager" />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Warehouse types</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Flexible warehouse solutions for logistics, manufacturing and storage</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {warehouseTypes.map((type) => (
                <div key={type} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                    <Compass className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-semibold text-slate-900">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Planning and engineering</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Strong planning is the backbone of every efficient warehouse</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our warehouse projects are planned with attention to structural efficiency, loading, access, natural lighting, ventilation and long-term adaptability so the building can support daily operations without unnecessary complexity.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {planningPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                    <Layers className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-semibold text-slate-900">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Workflow</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">A practical execution path from planning to handover</h2>
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
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Warehouse features</p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Project features built around reliable industrial use</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <p className="mt-4 font-semibold text-slate-900">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                  <Clock3 className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-semibold text-slate-900">Timely execution for facility expansion</h3>
                <p className="mt-4 leading-8 text-slate-600">We plan warehouse projects so the construction schedule supports your growth timeline and operational readiness.</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-semibold text-slate-900">Durable steel structure for heavy use</h3>
                <p className="mt-4 leading-8 text-slate-600">The combination of steel framing and roofing systems supports durability under regular industrial use and climate exposure.</p>
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQ items={faqs} title="Questions about warehouse construction" />
        <ServiceCTA title="Discuss your warehouse construction requirement" description="From design coordination to steel structure and roofing delivery, our team can support your warehouse project in Ahmedabad and Gujarat with practical engineering and execution." />
        <RelatedServices />
      </main>
    </>
  );
}
