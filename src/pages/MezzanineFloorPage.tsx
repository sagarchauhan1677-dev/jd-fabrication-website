import { ArrowRight, CheckCircle2, Layers, Ruler, Warehouse } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ServiceBreadcrumb from "../components/service-pages/ServiceBreadcrumb";
import ServiceCTA from "../components/service-pages/ServiceCTA";
import ServiceFAQ from "../components/service-pages/ServiceFAQ";
import RelatedServices from "../components/service-pages/RelatedServices";
import ServiceSchema from "../components/service-pages/ServiceSchema";

const applications = [
  "Warehouse storage expansion",
  "Factory production platforms",
  "Industrial office floors",
  "Maintenance and utility platforms",
  "Material handling and racking support",
  "Workshop space optimisation",
];

const faqs = [
  {
    question: "Do you fabricate MS mezzanine floors in Ahmedabad?",
    answer: "Yes. J.D. Enterprise fabricates and installs custom MS mezzanine floors for factories, warehouses and industrial units in Ahmedabad and nearby Gujarat industrial areas.",
  },
  {
    question: "What information is required for a mezzanine quotation?",
    answer: "Share the floor length and width, clear height, intended use, expected loading, project location, site photographs and any available drawings. Final member sizes must follow structural design requirements.",
  },
  {
    question: "Can a mezzanine be added inside an existing warehouse?",
    answer: "Often yes, subject to a site survey, available clear height, column layout, foundation capacity, access and structural engineering review.",
  },
  {
    question: "Do you provide fabrication and on-site installation?",
    answer: "Yes. Our scope can include MS structural fabrication, stairs, handrails, flooring support and coordinated erection according to the approved project scope.",
  },
];

export default function MezzanineFloorPage() {
  return (
    <>
      <SEO
        title="MS Mezzanine Floor Manufacturer Ahmedabad | J.D. Enterprise"
        description="MS mezzanine floor fabrication and installation in Ahmedabad for factories and warehouses. Custom industrial platforms by J.D. Enterprise. Get a quotation."
        keywords="mezzanine floor manufacturer Ahmedabad, MS mezzanine floor fabrication, industrial mezzanine floor Gujarat, warehouse mezzanine floor"
        url="https://jdfabrication.co.in/services/mezzanine-floor-fabrication"
        ogTitle="MS Mezzanine Floor Manufacturer in Ahmedabad"
        ogDescription="Custom MS mezzanine floors and industrial platforms for warehouses, factories and workshops in Ahmedabad and Gujarat."
      />
      <ServiceSchema
        serviceName="MS Mezzanine Floor Fabrication"
        description="Custom MS mezzanine floor fabrication and installation for industrial and warehouse projects in Ahmedabad and Gujarat."
        url="https://jdfabrication.co.in/services/mezzanine-floor-fabrication"
        breadcrumbs={[
          { name: "Services", item: "https://jdfabrication.co.in/services" },
          { name: "Mezzanine Floor Fabrication", item: "https://jdfabrication.co.in/services/mezzanine-floor-fabrication" },
        ]}
        faqs={faqs}
      />

      <main className="bg-slate-50 pt-24">
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
            <div>
              <ServiceBreadcrumb items={[{ label: "Services", to: "/services" }, { label: "Mezzanine Floor Fabrication" }]} />
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
                <Layers className="h-4 w-4" />
                MS mezzanine floor specialists
              </div>
              <h1 className="mt-6 font-heading text-4xl font-bold leading-tight sm:text-5xl">
                MS mezzanine floor fabrication in Ahmedabad
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                J.D. Enterprise designs, fabricates and installs industrial mezzanine structures that help factories and warehouses create usable floor space without expanding the building footprint.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold hover:bg-orange-600">
                  Request a quotation <ArrowRight className="h-5 w-5" />
                </Link>
                <a href="https://wa.me/919099099916?text=Hello%20J.D.%20Enterprise%2C%20I%20need%20a%20quotation%20for%20an%20MS%20mezzanine%20floor." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-4 font-semibold hover:bg-white/20">
                  WhatsApp requirement
                </a>
              </div>
            </div>
            <img src="/images/Gallery/fabricationwork20.jpeg" alt="MS mezzanine floor and structural fabrication by J.D. Enterprise in Ahmedabad" className="h-[420px] w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl" />
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Industrial space optimisation</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Custom mezzanine structures planned around load, access and operations</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Each mezzanine requirement is reviewed for intended use, loading, column spacing, headroom, access stairs, handrails, flooring system and connection details. Member sizes and foundations are finalised only after structural review.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {applications.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                  <span className="font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3 lg:px-8">
            {[
              { icon: Ruler, title: "Site-specific planning", text: "Layout, clear height, column positions and access are coordinated around your existing facility." },
              { icon: Warehouse, title: "Industrial MS construction", text: "Beams, columns, bracing, stairs and handrails are fabricated for the approved structural scheme." },
              { icon: Layers, title: "Complete execution support", text: "Fabrication, delivery and erection are coordinated for Ahmedabad and Gujarat project sites." },
            ].map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <Icon className="h-8 w-8 text-orange-500" />
                <h3 className="mt-5 font-heading text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <ServiceFAQ items={faqs} title="MS mezzanine floor questions" />
        <ServiceCTA title="Need more usable space inside your factory or warehouse?" description="Share the approximate dimensions, loading requirement, clear height and site location for a practical MS mezzanine floor quotation." />
        <RelatedServices />
      </main>
    </>
  );
}
