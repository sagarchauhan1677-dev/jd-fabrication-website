import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  {
    title: "Industrial Shed Fabrication",
    description: "Custom industrial and warehouse sheds for factories, plants and utilities.",
    to: "/services/industrial-shed-fabrication",
  },
  {
    title: "PEB Buildings",
    description: "Fast-delivery steel buildings for warehouses and industrial facilities.",
    to: "/services/peb-buildings",
  },
  {
    title: "Steel Fabrication",
    description: "Precision steel and structural work for complex industrial projects.",
    to: "/services/steel-fabrication",
  },
  {
    title: "Warehouse Construction",
    description: "Complete warehousing infrastructure from planning to execution.",
    to: "/services/warehouse-construction",
  },
  {
    title: "Roofing & Cladding",
    description: "Durable roofing systems for factories, warehouses, and plants.",
    to: "/services/roofing-cladding",
  },
  {
    title: "Structural Works",
    description: "Engineer-led structural steel and building support solutions.",
    to: "/services/structural-works",
  },
  {
    title: "Mezzanine Floor Fabrication",
    description: "Custom MS mezzanine floors and industrial platforms for factories and warehouses.",
    to: "/services/mezzanine-floor-fabrication",
  },
];

export default function RelatedServices() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Explore More</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Related services by J.D. Enterprise</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {links.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="font-heading text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600">
                Explore service
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
