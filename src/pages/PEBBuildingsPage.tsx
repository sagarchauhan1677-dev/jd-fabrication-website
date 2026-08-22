import { ArrowRight, Building2, Factory, Layers, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ServiceBreadcrumb from "../components/service-pages/ServiceBreadcrumb";
import ServiceCTA from "../components/service-pages/ServiceCTA";
import ServiceFAQ from "../components/service-pages/ServiceFAQ";
import RelatedServices from "../components/service-pages/RelatedServices";
import ServiceSchema from "../components/service-pages/ServiceSchema";
import { IMAGES } from "../constants/images";

const components = [
  "Primary frames and columns",
  "Roof purlins and wall girts",
  "Bracing and base plates",
  "Mezzanine-ready support frames",
  "Custom bay spacing and clear height",
];

const applications = [
  "Manufacturing plants",
  "Logistics warehouses",
  "Cold storage and utility buildings",
  "Commercial facilities",
  "Workshops and industrial campuses",
];

const benefits = [
  {
    title: "Faster project delivery",
    text: "PEB systems are engineered for rapid fabrication, short installation cycles and predictable timelines.",
  },
  {
    title: "Cost-efficient steel design",
    text: "Optimized frame sections reduce material wastage while improving structural efficiency.",
  },
  {
    title: "Flexible expansion planning",
    text: "The modular nature of PEB buildings makes future extensions and reconfiguration easier.",
  },
];

const stages = [
  "Design review and site planning",
  "Frame engineering and fabrication drawings",
  "Factory manufacturing of primary members",
  "On-site erection and finishing works",
];

const faqs = [
  {
    question: "What is the advantage of choosing a PEB building over conventional construction?",
    answer: "PEB buildings offer quicker delivery, better cost control, consistent quality and easier future expansion for industrial and warehouse applications.",
  },
  {
    question: "Can J.D. Enterprise deliver PEB buildings across Gujarat?",
    answer: "Yes. We provide PEB building design, fabrication and installation support across Ahmedabad, Gujarat and nearby industrial regions.",
  },
  {
    question: "Do you design PEB buildings for specific industry needs?",
    answer: "Yes. We plan PEB structures in line with your clear span, crane load, roofing, insulation and operational needs.",
  },
];

export default function PEBBuildingsPage() {
  return (
    <>
      <SEO
        title="PEB Building Manufacturer Ahmedabad & Gujarat | J.D. Enterprise"
        description="PEB building manufacturer in Ahmedabad for factories and warehouses across Gujarat. Design, fabrication, roofing and erection support. Get a quotation."
        keywords="PEB building manufacturer Ahmedabad, pre engineered building Gujarat, industrial steel building contractor"
        url="https://jdfabrication.co.in/services/peb-buildings"
        ogTitle="PEB Building Manufacturer in Ahmedabad, Gujarat | J.D. Enterprise"
        ogDescription="J.D. Enterprise delivers pre engineered building solutions for industrial, commercial and warehouse projects in Ahmedabad and Gujarat."
      />
      <ServiceSchema
        serviceName="PEB Building Manufacturer"
        description="Pre-engineered building solutions for industrial and warehouse projects in Ahmedabad and Gujarat."
        url="https://jdfabrication.co.in/services/peb-buildings"
        breadcrumbs={[{ name: "Services", item: "https://jdfabrication.co.in/services" }, { name: "PEB Buildings", item: "https://jdfabrication.co.in/services/peb-buildings" }]}
        faqs={faqs}
      />

      <main className="bg-slate-50 pt-24">
        <section className="bg-slate-950 py-16 text-white lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <ServiceBreadcrumb items={[{ label: "Services", to: "/services" }, { label: "PEB Buildings" }]} />
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
                <Building2 className="h-4 w-4" />
                PEB building solutions
              </div>
              <h1 className="mt-6 font-heading text-4xl font-bold leading-tight sm:text-5xl">PEB building manufacturer in Ahmedabad for factories and warehouses</h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                J.D. Enterprise provides PEB buildings for industrial units, warehouses, production facilities and support infrastructure across Ahmedabad and Gujarat. Our building systems combine structural efficiency, faster installation and long-term durability in a single engineered package.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600">
                  Request a project proposal
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/gallery" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/20">
                  Explore project images
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl">
              <img src={IMAGES.pebBuildings} alt="PEB building project in Ahmedabad by J.D. Enterprise" className="h-[420px] w-full rounded-[1.5rem] object-cover" loading="eager" />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">PEB components</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Engineered systems for efficient buildings</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our PEB construction approach focuses on prefabricated structural members, optimized frame geometry and well-planned connections that reduce site complexity. The result is a building that can be erected quickly while still meeting structural, operational and regulatory expectations.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {components.map((component) => (
                <div key={component} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                    <Layers className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-semibold text-slate-900">{component}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Applications</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Ideal for manufacturing, storage and commercial operations</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {applications.map((application) => (
                <div key={application} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                    <Factory className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-slate-900">{application}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">Technical benefits</p>
                <h2 className="mt-4 font-heading text-3xl font-bold">Why leading industrial clients choose PEB structures</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  The combination of engineered detailing, manufacturing precision and quick erection helps clients reduce downtime and maintain efficient operations from day one.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {benefits.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-heading text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Comparison</p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">A smarter building system for growing operations</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Conventional construction often involves longer design cycles and greater variability on site. A PEB building reduces those constraints with factory-produced members and a clear execution sequence that supports faster project completion.
                </p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-slate-900">Traditional construction</h3>
                    <p className="mt-3 leading-7 text-slate-600">More site work, longer schedules and higher dependence on varying site conditions.</p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-slate-900">PEB delivery</h3>
                    <p className="mt-3 leading-7 text-slate-600">Optimized design, clearer coordination and faster installation with predictable quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Construction stages</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">A structured delivery process from planning to handover</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {stages.map((stage, index) => (
                <div key={stage} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">0{index + 1}</div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-slate-900">{stage}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ items={faqs} title="Frequently asked questions about PEB buildings" />
        <ServiceCTA title="Let us design a PEB building that fits your industrial goals" description="Whether you need a warehouse, factory building, workshop or multi-use industrial structure, our team can prepare a practical and efficient solution for Ahmedabad and Gujarat." />
        <RelatedServices />
      </main>
    </>
  );
}
