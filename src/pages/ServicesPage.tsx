import { Link } from "react-router-dom";
import { ArrowRight, Building2, Factory, Layers, ShieldCheck, Wrench, Warehouse } from "lucide-react";
import SEO from "../components/SEO";
import { IMAGES } from "../constants/images";

const services = [
  {
    title: "Industrial Shed Fabrication",
    description: "Custom factory and industrial shed solutions with durable steel structures, clear-span layouts and on-site execution in Ahmedabad and across Gujarat.",
    icon: Factory,
    image: IMAGES.industrialSheds,
    link: "/services/industrial-shed-fabrication",
  },
  {
    title: "PEB Buildings",
    description: "Fast-track pre-engineered building systems for manufacturing plants, warehouses and commercial premises with controlled delivery schedules.",
    icon: Building2,
    image: IMAGES.pebBuildings,
    link: "/services/peb-buildings",
  },
  {
    title: "Steel Fabrication",
    description: "Precision structural steel and custom metal fabrication for heavy industrial applications, framed structures and plant infrastructure.",
    icon: Wrench,
    image: IMAGES.steelFabrication,
    link: "/services/steel-fabrication",
  },
  {
    title: "Warehouse Construction",
    description: "Turnkey warehouse construction, structural planning and execution for logistics, storage and distribution needs.",
    icon: Warehouse,
    image: IMAGES.warehouse,
    link: "/services/warehouse-construction",
  },
  {
    title: "Roofing & Cladding",
    description: "Weather-resistant industrial roofing and wall cladding systems for factories, plants and large-span buildings.",
    icon: Layers,
    image: IMAGES.roofing,
    link: "/services/roofing-cladding",
  },
  {
    title: "Structural Works",
    description: "Engineering-led structural steel works and support systems for industrial facilities, extensions and large build projects.",
    icon: ShieldCheck,
    image: IMAGES.industrialSheds,
    link: "/services/structural-works",
  },
];

const industries = [
  "Automotive and manufacturing",
  "Food processing and warehousing",
  "Logistics and distribution",
  "Power and utilities",
  "Chemical and processing plants",
  "Commercial and public infrastructure",
];

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Industrial Fabrication Services in Ahmedabad | J.D Enterprise"
        description="Explore industrial shed fabrication, PEB buildings, steel fabrication, warehouse construction, roofing and structural works by J.D Enterprise in Ahmedabad, Gujarat."
        keywords="industrial fabrication services Ahmedabad, PEB building manufacturer Gujarat, steel fabrication company Ahmedabad"
        url="https://jdfabrication.co.in/services"
        ogTitle="Industrial Fabrication Services in Ahmedabad | J.D Enterprise"
        ogDescription="Explore industrial fabrication services from J.D Enterprise, including industrial sheds, PEB buildings, steel fabrication and warehouse construction in Gujarat."
      />

      <main className="bg-slate-50 pt-24">
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">J.D Enterprise Services</p>
              <h1 className="mt-4 font-heading text-4xl font-bold leading-tight sm:text-5xl">Premium industrial fabrication and construction solutions for Gujarat</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                From industrial sheds and PEB buildings to warehouse construction and roofing systems, J.D Enterprise delivers engineered solutions backed by decades of expertise in Ahmedabad and across Gujarat.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600">
                  Request a quotation
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/projects" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/20">
                  View delivered projects
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl">
              <img src={IMAGES.industrialSheds} alt="Industrial fabrication project executed by J.D Enterprise in Gujarat" className="h-[400px] w-full rounded-[1.5rem] object-cover" loading="eager" />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">About J.D Enterprise</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">A trusted fabrication partner since 1996</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                J.D Enterprise has grown from a steel fabrication specialist into a full-spectrum industrial contractor serving Ahmedabad, Gujarat and wider industrial corridors. Our team combines precision engineering, modern project execution and a strong focus on durable outcomes for every plant, warehouse and building envelope.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-slate-900">Complete engineering support</h3>
                <p className="mt-4 leading-7 text-slate-600">We assist from concept planning and material selection to fabrication, erection and final handover.</p>
              </article>
              <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-slate-900">Quality focused delivery</h3>
                <p className="mt-4 leading-7 text-slate-600">Every project is handled with quality checks, safety controls and a commitment to dependable timelines.</p>
              </article>
              <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-slate-900">Custom industrial solutions</h3>
                <p className="mt-4 leading-7 text-slate-600">We design around site requirements, future expansion needs and long-term performance expectations.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Our core services</p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Explore the full spectrum of our fabrication and construction services</h2>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <img src={service.image} alt={`${service.title} by J.D Enterprise`} className="h-48 w-full object-cover" loading="lazy" />
                    <div className="p-7">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 font-heading text-2xl font-bold text-slate-900">{service.title}</h3>
                      <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
                      <Link to={service.link} className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600">
                        Explore Service
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">Industries served</p>
              <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">Serving diverse industries with reliable fabrication and construction expertise</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {industries.map((industry) => (
                <div key={industry} className="rounded-2xl border border-white/10 bg-white/10 p-5 text-slate-200">{industry}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Why choose us</p>
                  <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">A dependable partner for demanding industrial projects</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-slate-900">Project-led execution</h3>
                    <p className="mt-3 leading-7 text-slate-600">We coordinate design, procurement, fabrication and installation with clear communication at every stage.</p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-slate-900">Custom engineering</h3>
                    <p className="mt-3 leading-7 text-slate-600">Every solution is tailored to structural requirements, site conditions and future operational needs.</p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-slate-900">Responsive support</h3>
                    <p className="mt-3 leading-7 text-slate-600">We respond fast to site challenges and provide practical guidance from initial planning to final completion.</p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-slate-900">Long-term value</h3>
                    <p className="mt-3 leading-7 text-slate-600">Our structures are designed to be robust, efficient and suitable for long-term industrial use.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[2rem] border border-orange-100 bg-orange-50/70 p-8 lg:p-12">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Ready to begin</p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Discuss your industrial building or fabrication requirement with our team</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">Whether you need an industrial shed, PEB structure, steel fabrication support or a warehouse project, J.D Enterprise can offer a tailored solution for your site and timeline.</p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600">
                  Contact us today
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a href="https://wa.me/919099099916" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-800 transition hover:bg-slate-100">
                  WhatsApp quotation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}