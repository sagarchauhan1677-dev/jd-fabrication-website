import { ArrowRight, BarChart3, Cpu, Gauge, ShieldCheck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ServiceBreadcrumb from "../components/service-pages/ServiceBreadcrumb";
import ServiceCTA from "../components/service-pages/ServiceCTA";
import ServiceFAQ from "../components/service-pages/ServiceFAQ";
import RelatedServices from "../components/service-pages/RelatedServices";
import ServiceSchema from "../components/service-pages/ServiceSchema";
import { IMAGES } from "../constants/images";

const capabilities = [
  "Structural steel fabrication",
  "MS and custom metal fabrication",
  "Heavy-duty trusses and frames",
  "Plate work and secondary steel",
  "Site erection and support",
];

const process = [
  {
    title: "Precision cutting",
    text: "Modern cutting and preparation methods allow us to shape components accurately for complex assemblies.",
  },
  {
    title: "Welding and fit-up",
    text: "Skilled fabrication teams work on durable joints and fit-up precision for structural reliability.",
  },
  {
    title: "Surface finishing",
    text: "We provide finishing support suited to environmental exposure and project specifications.",
  },
];

const industries = ["Manufacturing", "Warehousing", "Power", "Utilities", "Processing", "Infrastructure"];

const faqs = [
  {
    question: "Do you handle custom steel fabrication projects?",
    answer: "Yes. We undertake custom steel fabrication work for industrial buildings, support structures, frames, platforms and project-specific assemblies.",
  },
  {
    question: "Can you support both fabrication and installation?",
    answer: "Yes. We coordinate fabrication and erection support to keep the structure delivery process coordinated and efficient.",
  },
  {
    question: "Do you work on large industrial orders?",
    answer: "Yes. Our fabrication approach is suitable for both large-scale industrial contracts and specialized component work.",
  },
];

export default function SteelFabricationPage() {
  return (
    <>
      <SEO
        title="Steel Fabrication Ahmedabad | MS Fabricators Near You"
        description="Need MS steel fabrication in Ahmedabad? J.D. Enterprise fabricates industrial frames, trusses, platforms and custom structures. Get a free quotation."
        keywords="steel fabrication Ahmedabad, fabrication near me, MS fabricators Ahmedabad, structural steel fabrication Ahmedabad, steel fabrication company Gujarat"
        url="https://jdfabrication.co.in/services/steel-fabrication"
        ogTitle="MS Steel Fabrication Company Ahmedabad | J.D. Enterprise"
        ogDescription="J.D. Enterprise provides structural steel fabrication, custom metal fabrication and industrial steel solutions in Ahmedabad and Gujarat."
      />
      <ServiceSchema
        serviceName="Structural Steel Fabrication"
        description="Structural steel and custom fabrication services for industrial and commercial projects in Ahmedabad and Gujarat."
        url="https://jdfabrication.co.in/services/steel-fabrication"
        breadcrumbs={[{ name: "Services", item: "https://jdfabrication.co.in/services" }, { name: "Steel Fabrication", item: "https://jdfabrication.co.in/services/steel-fabrication" }]}
        faqs={faqs}
      />

      <main className="bg-slate-50 pt-24">
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
            <div>
              <ServiceBreadcrumb items={[{ label: "Services", to: "/services" }, { label: "Steel Fabrication" }]} />
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
                <Wrench className="h-4 w-4" />
                Industrial steel fabrication
              </div>
              <h1 className="mt-6 font-heading text-4xl font-bold leading-tight sm:text-5xl">MS steel fabrication company in Ahmedabad for industrial projects</h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Looking for dependable fabrication near you? J.D. Enterprise supports factories, warehouses and commercial projects with structural steel fabrication, custom MS work and on-site installation across Ahmedabad and Gujarat.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600">
                  Get fabrication support
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a href="https://wa.me/919099099916" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/20">
                  WhatsApp a specialist
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl">
              <img src={IMAGES.steelFabrication} alt="Structural steel fabrication work by J.D. Enterprise" className="h-[400px] w-full rounded-[1.5rem] object-cover" loading="eager" />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Fabrication capabilities</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Built around accuracy, strength and project adaptability</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our fabrication operations are planned to support manufacturing facilities, warehousing infrastructure, industrial buildings and custom steel assemblies with dependable execution and service consistency.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {capabilities.map((capability) => (
                <div key={capability} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-semibold text-slate-900">{capability}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">Process</p>
                <h2 className="mt-4 font-heading text-3xl font-bold">A disciplined fabrication workflow from drawing to dispatch</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Each fabrication stage is aligned with quality expectations so the delivered components fit the structure precisely and perform as intended on site.
                </p>
              </div>
              <div className="grid gap-6">
                {process.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-heading text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Local fabrication support</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">MS and steel fabrication near Ahmedabad industrial areas</h2>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
                We execute steel fabrication work in Ahmedabad, Sanand, Changodar, Chhatral, Vatva and Naroda. Share your drawing, approximate dimensions, steel specification and site location for a practical scope and quotation.
              </p>
              <div className="mt-7 flex flex-wrap gap-5 text-sm font-semibold">
                <Link to="/services/industrial-shed-fabrication" className="text-orange-600 hover:text-orange-700">Industrial shed construction</Link>
                <Link to="/services/peb-buildings" className="text-orange-600 hover:text-orange-700">PEB steel buildings</Link>
                <Link to="/projects" className="text-orange-600 hover:text-orange-700">View fabrication projects</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Quality control</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Reliable quality checks that support structurally sound output</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                We emphasize dimensional accuracy, welding consistency, material handling and project coordination so that every fabricated component meets the standard required for installation and long-term service.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-slate-900">Inspection-led delivery</h3>
                  <p className="mt-3 leading-7 text-slate-600">Our quality process includes checks at fabrication, finishing and dispatch to reduce rework and strengthen project reliability.</p>
                </div>
              </div>
              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                  <Gauge className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-slate-900">Performance-focused planning</h3>
                  <p className="mt-3 leading-7 text-slate-600">We tailor fabrication details based on project load, exposure and operational demands so the final assembly remains dependable.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Industries served</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Trusted by industrial and infrastructure clients across Gujarat</h2>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
              {industries.map((industry) => (
                <div key={industry} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center font-semibold text-slate-800">{industry}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Project gallery</p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Fabrication work shaped to suit a wide range of industrial applications</h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <img src={IMAGES.steelFabrication} alt="Steel fabrication project executed by J.D. Enterprise" className="h-72 w-full rounded-[2rem] object-cover" loading="lazy" />
              <img src={IMAGES.industrialSheds} alt="Industrial steel structure fabrication project in Gujarat" className="h-72 w-full rounded-[2rem] object-cover" loading="lazy" />
            </div>
          </div>
        </section>

        <ServiceFAQ items={faqs} title="Questions about steel fabrication services" />
        <ServiceCTA title="Get a free steel fabrication quotation" description="Send your drawing, dimensions, quantity and Ahmedabad or Gujarat site location. Our team will review the requirement and contact you about the fabrication scope." buttonLabel="Get Free Quotation" />
        <RelatedServices />
      </main>
    </>
  );
}
