import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const serviceLinks = [
  { name: "Industrial Shed Fabrication", href: "/services/industrial-shed-fabrication" },
  { name: "PEB Buildings", href: "/services/peb-buildings" },
  { name: "Structural Steel Fabrication", href: "/services/steel-fabrication" },
  { name: "Warehouse Construction", href: "/services/warehouse-construction" },
  { name: "Roofing & Cladding", href: "/services/roofing-cladding" },
  { name: "Structural Works", href: "/services/structural-works" },
];

const locationLinks = [
  { name: "Ahmedabad Airport", href: "/projects/fabrication-work-ahmedabad-airport" },
  { name: "Sanand", href: "/projects/industrial-fabrication-sanand" },
  { name: "Changodar", href: "/projects/steel-fabrication-changodar" },
  { name: "Chhatral", href: "/projects/industrial-shed-chhatral" },
  { name: "Vadodara", href: "/projects/peb-building-vadodara" },
];

export default function HomeSEOIntro() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
              Ahmedabad, Gujarat
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Industrial fabrication for sheds, steel structures and commercial projects
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Established in 1996, J.D. Enterprise provides custom MS fabrication,
              industrial shed construction, PEB structures, warehouse steelwork,
              roofing and cladding in Ahmedabad and across Gujarat. We support projects
              from requirement review and fabrication through coordinated site installation.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-800 transition hover:border-orange-400 hover:text-orange-600"
                >
                  {service.name}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-7 w-7 text-orange-400" />
              <h2 className="font-heading text-2xl font-bold">Verified project locations</h2>
            </div>
            <p className="mt-4 leading-7 text-slate-300">
              View real project experience and supplied photographs from industrial
              and commercial work completed in Gujarat.
            </p>
            <div className="mt-7 space-y-3">
              {locationLinks.map((location) => (
                <Link
                  key={location.href}
                  to={location.href}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold transition hover:bg-white/10"
                >
                  <MapPin className="h-4 w-4 text-orange-400" />
                  Project work in {location.name}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
