import { ArrowRight, Droplets, HardHat, Layers, ShieldCheck, SunMedium } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ServiceBreadcrumb from "../components/service-pages/ServiceBreadcrumb";
import ServiceCTA from "../components/service-pages/ServiceCTA";
import ServiceFAQ from "../components/service-pages/ServiceFAQ";
import RelatedServices from "../components/service-pages/RelatedServices";
import ServiceSchema from "../components/service-pages/ServiceSchema";
import { IMAGES } from "../constants/images";

const materials = [
  "Colour-coated profiled roofing sheets",
  "PUF and insulated roofing panels",
  "Industrial wall cladding systems",
  "Polycarbonate daylight roofing sheets",
];

const systemBenefits = [
  "Improved weather protection",
  "Better thermal performance",
  "Long service life and low maintenance",
  "Cleaner industrial envelope finish",
];

const applications = [
  "Factory roofs and canopies",
  "Warehouse cladding",
  "Industrial plants and workshops",
  "Utilities and storage spaces",
];

const installationSteps = [
  "Detailed site assessment and measurement",
  "Material selection and system design",
  "Installation of support and fastening elements",
  "Final inspection and handover",
];

const faqs = [
  {
    question: "What roofing systems do you install?",
    answer: "We install industrial roofing and cladding systems suited to factories, warehouses and large structures, including metal sheet and insulated solutions.",
  },
  {
    question: "Can you work on existing structures?",
    answer: "Yes. We can support roofing and cladding upgrades, repairs and new installations depending on the project requirement.",
  },
  {
    question: "Do you provide roofing for Gujarat-based industrial projects?",
    answer: "Yes. J.D. Enterprise provides roofing services for Ahmedabad and industrial sites across Gujarat.",
  },
];

export default function RoofingCladdingPage() {
  return (
    <>
      <SEO
        title="Industrial Roofing & Cladding Ahmedabad | J.D. Enterprise"
        description="Commercial and industrial roofing and cladding in Ahmedabad. Roofing sheets, PUF panels, wall cladding, repairs and replacement. Request a free quote."
        keywords="commercial roofing and cladding, industrial roofing contractor Ahmedabad, cladding contractor Gujarat, roofing sheets Ahmedabad, PUF panel roofing"
        url="https://jdfabrication.co.in/services/roofing-cladding"
        ogTitle="Roofing & Cladding Contractor Ahmedabad | J.D. Enterprise"
        ogDescription="J.D. Enterprise provides industrial roofing and cladding services for factory, warehouse and plant projects in Ahmedabad and Gujarat."
      />
      <ServiceSchema
        serviceName="Roofing and Cladding"
        description="Industrial roofing and cladding services for factories, warehouses and industrial buildings."
        url="https://jdfabrication.co.in/services/roofing-cladding"
        breadcrumbs={[{ name: "Services", item: "https://jdfabrication.co.in/services" }, { name: "Roofing & Cladding", item: "https://jdfabrication.co.in/services/roofing-cladding" }]}
        faqs={faqs}
      />

      <main className="bg-slate-50 pt-24">
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <ServiceBreadcrumb items={[{ label: "Services", to: "/services" }, { label: "Roofing & Cladding" }]} />
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
                <HardHat className="h-4 w-4" />
                Roofing and cladding specialist
              </div>
              <h1 className="mt-6 font-heading text-4xl font-bold leading-tight sm:text-5xl">Industrial roofing and cladding contractor in Ahmedabad</h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                J.D. Enterprise delivers commercial and industrial roofing and cladding for factories, warehouses, workshops and plants. We handle new roofing sheets, wall cladding, insulated panels, leak repairs and roof replacement across Ahmedabad and Gujarat.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600">
                  Request roofing quotation
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/gallery" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/20">
                  See completed work
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl">
              <img src={IMAGES.roofing} alt="Industrial roofing installation by J.D. Enterprise" className="h-[420px] w-full rounded-[1.5rem] object-cover" loading="eager" />
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Complete roofing scope</p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Commercial roofing and cladding for new and existing buildings</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Our scope can include roof-sheet installation, wall cladding, ridge and flashing work, gutters, downpipes, skylight sheets, insulation and replacement of damaged sheets. We assess roof slope, drainage, support spacing, wind exposure and maintenance access before recommending a system.
                </p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
                <h3 className="font-heading text-2xl font-semibold text-slate-900">Areas we serve</h3>
                <p className="mt-4 leading-7 text-slate-600">Ahmedabad, Sanand, Changodar, Chhatral, Vatva, Naroda and industrial locations across Gujarat.</p>
                <div className="mt-6 space-y-3 text-sm font-semibold">
                  <Link to="/services/industrial-shed-fabrication" className="block text-orange-600 hover:text-orange-700">Roofing for industrial shed construction</Link>
                  <Link to="/services/peb-buildings" className="block text-orange-600 hover:text-orange-700">Roofing for PEB steel buildings</Link>
                  <Link to="/services/steel-fabrication" className="block text-orange-600 hover:text-orange-700">Supporting steel fabrication</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Material options</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Roofing systems selected for performance and durability</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The right roof and wall covering depends on environmental exposure, building use and long-term maintenance expectations. We advise on system configurations that support both functionality and appearance.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {materials.map((material) => (
                <div key={material} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                    <Layers className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-semibold text-slate-900">{material}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">System benefits</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Roofing solutions that strengthen the building envelope</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {systemBenefits.map((benefit) => (
                <div key={benefit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-semibold text-slate-900">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Applications</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Used across factories, plants, workshops and warehouses</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {applications.map((application) => (
                <div key={application} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                    <SunMedium className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-semibold text-slate-900">{application}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Installation process</p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">An organized approach to roof and wall system installation</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {installationSteps.map((step, index) => (
                  <div key={step} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">0{index + 1}</div>
                    <p className="mt-4 font-semibold text-slate-900">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Maintenance approach</p>
                  <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Designed for long-term performance and easier upkeep</h2>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                      <Droplets className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-slate-900">Protective design</h3>
                      <p className="mt-3 leading-7 text-slate-600">The right roofing system helps reduce water ingress, heat gain and wear from environmental exposure.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQ items={faqs} title="Roofing and cladding questions" />
        <ServiceCTA title="Request a free roofing and cladding quotation" description="Send the approximate roof area, site location, existing roof photos and preferred sheet or panel type. We will recommend a practical system for your building." buttonLabel="Get Free Roofing Quote" />
        <RelatedServices />
      </main>
    </>
  );
}
