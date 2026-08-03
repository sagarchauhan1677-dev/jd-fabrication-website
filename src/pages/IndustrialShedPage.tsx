import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  MessageCircle,
} from "lucide-react";
import SEO from "../components/SEO";

export default function IndustrialShedPage() {
  return (
    <>
      <SEO
        title="Industrial Shed Fabrication Company Ahmedabad | J.D. Enterprise"
        description="J.D. Enterprise provides industrial shed fabrication, factory shed construction, warehouse sheds, PEB structures, roofing and cladding services in Ahmedabad and across Gujarat."
        keywords="Industrial Shed Fabrication Ahmedabad, Factory Shed Contractor Ahmedabad, Warehouse Shed Gujarat, PEB Shed Construction"
        url="https://jdfabrication.co.in/services/industrial-shed-fabrication"
      />

      <main className="bg-white">
        {/* Premium Hero Section */}
        <section className="relative overflow-hidden bg-slate-950 pt-28 lg:pt-32">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.22),transparent_42%)]" />

          <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
            {/* Left Content */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
                <Factory className="h-4 w-4" />
                Industrial Shed Specialists
              </div>

              <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Industrial Shed Fabrication in{" "}
                <span className="text-orange-500">Ahmedabad</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                J.D. Enterprise designs, fabricates and installs durable
                industrial sheds, factory sheds, warehouse structures and
                custom steel buildings across Ahmedabad and Gujarat.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-orange-600"
                >
                  Get Free Quotation
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <a
                  href="https://wa.me/919099099916?text=Hello%20J.D.%20Enterprise,%20I%20need%20a%20quotation%20for%20industrial%20shed%20fabrication."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </div>

              {/* Trust Points */}
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-orange-500" />
                  Established in 1996
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-orange-500" />
                  Serving Gujarat
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-orange-500" />
                  Custom Fabrication
                </span>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-orange-500/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
                <img
                  src="/images/Industrial Sheds/Industrial-sheds5.jpeg"
                  alt="Industrial shed fabrication project completed by J.D. Enterprise"
                  className="h-[360px] w-full rounded-[1.5rem] object-cover sm:h-[440px] lg:h-[500px]"
                  loading="eager"
                />

                <div className="absolute inset-3 rounded-[1.5rem] bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-slate-950/80 p-5 backdrop-blur-md">
                  <p className="text-sm font-semibold uppercase tracking-wider text-orange-400">
                    J.D. Enterprise
                  </p>

                  <p className="mt-2 font-heading text-xl font-bold text-white">
                    Building Stronger Industrial Solutions Since 1996
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>        {/* About Industrial Shed Fabrication */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
            {/* Left Content */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-0.5 w-8 bg-orange-500" />

                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                  Industrial Shed Fabrication
                </span>
              </div>

              <h2 className="font-heading text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Strong, efficient and custom-built industrial shed solutions
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                J.D. Enterprise provides complete industrial shed fabrication
                services for factories, warehouses, workshops, manufacturing
                units and commercial facilities across Ahmedabad and Gujarat.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our work includes structural steel fabrication, columns,
                trusses, roofing, cladding and on-site erection according to the
                required dimensions, application and project conditions.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Factory Shed Construction",
                  "Warehouse Shed Fabrication",
                  "PEB Structural Work",
                  "Roofing and Cladding",
                  "Heavy Steel Structures",
                  "Custom Project Execution",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-500" />

                    <span className="font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Information Card */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-orange-100 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-8 shadow-xl sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">
                  Why Industrial Steel Sheds
                </p>

                <h3 className="mt-4 font-heading text-3xl font-bold text-white">
                  Designed for strength and long-term industrial performance
                </h3>

                <div className="mt-8 space-y-6">
                  {[
                    {
                      title: "Maximum Usable Space",
                      description:
                        "Clear-span structural layouts help create open and efficient working areas.",
                    },
                    {
                      title: "Faster Construction",
                      description:
                        "Fabricated steel components can reduce project execution time.",
                    },
                    {
                      title: "Custom Dimensions",
                      description:
                        "Every shed can be planned according to the site, height, width and application.",
                    },
                    {
                      title: "Durable Structure",
                      description:
                        "High-quality steel fabrication supports long-term industrial use.",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="flex gap-4 border-b border-white/10 pb-6 last:border-b-0 last:pb-0"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 font-bold text-white">
                        {index + 1}
                      </div>

                      <div>
                        <h4 className="font-heading text-lg font-bold text-white">
                          {item.title}
                        </h4>

                        <p className="mt-2 leading-7 text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600"
                >
                  Discuss Your Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>        {/* Our Industrial Shed Services */}
        {/* Why Choose J.D. Enterprise */}
<section className="bg-white py-20 lg:py-28">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto">
      <span className="text-orange-500 font-semibold uppercase tracking-[0.18em] text-sm">
        Why Choose Us
      </span>

      <h2 className="mt-4 text-4xl font-bold text-slate-900">
        Trusted Industrial Fabrication Partner Since 1996
      </h2>

      <p className="mt-6 text-lg text-slate-600 leading-8">
        J.D. Enterprise has successfully delivered industrial sheds,
        warehouses, PEB buildings and steel fabrication projects across Gujarat
        with a strong commitment to quality, safety and timely execution.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-3xl border border-slate-200 p-8 hover:shadow-xl transition">
        <div className="text-5xl font-bold text-orange-500">28+</div>
        <h3 className="mt-5 text-xl font-bold">
          Years Experience
        </h3>
        <p className="mt-3 text-slate-600 leading-7">
          Nearly three decades of industrial fabrication and structural steel
          expertise.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-8 hover:shadow-xl transition">
        <div className="text-5xl font-bold text-orange-500">500+</div>
        <h3 className="mt-5 text-xl font-bold">
          Projects Completed
        </h3>
        <p className="mt-3 text-slate-600 leading-7">
          Industrial sheds, factories, warehouses and structural steel
          fabrication projects delivered successfully.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-8 hover:shadow-xl transition">
        <div className="text-5xl font-bold text-orange-500">100%</div>
        <h3 className="mt-5 text-xl font-bold">
          Quality Commitment
        </h3>
        <p className="mt-3 text-slate-600 leading-7">
          Premium materials, precision fabrication and strict quality control
          throughout every project.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-8 hover:shadow-xl transition">
        <div className="text-5xl font-bold text-orange-500">24/7</div>
        <h3 className="mt-5 text-xl font-bold">
          Client Support
        </h3>
        <p className="mt-3 text-slate-600 leading-7">
          Dedicated assistance from enquiry to project completion.
        </p>
      </div>

    </div>
  </div>
</section> <section className="bg-slate-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section Heading */}
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-0.5 w-8 bg-orange-500" />

                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                  Our Industrial Shed Services
                </span>

                <span className="h-0.5 w-8 bg-orange-500" />
              </div>

              <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                Complete industrial shed fabrication solutions
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                From structural fabrication to roofing and final erection, we
                provide complete solutions for industrial and commercial
                projects.
              </p>
            </div>

            {/* Services Cards */}
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Factory Shed Construction",
                  description:
                    "Custom steel factory sheds designed for manufacturing units, workshops and industrial operations.",
                  image:
                    "/images/Industrial Sheds/Industrial-sheds6.jpeg",
                },
                {
                  title: "Warehouse Shed Fabrication",
                  description:
                    "Strong and spacious warehouse structures suitable for storage, logistics and distribution facilities.",
                  image:
                    "/images/Industrial Sheds/Industrial-sheds7.jpeg",
                },
                {
                  title: "PEB Industrial Structures",
                  description:
                    "Pre-engineered steel building solutions designed for faster construction and efficient project execution.",
                  image:
                    "/images/Industrial Sheds/Industrial-sheds8.jpeg",
                },
                {
                  title: "Roofing and Cladding",
                  description:
                    "Industrial roofing sheets, wall cladding and weather-resistant solutions for factories and warehouses.",
                  image:
                    "/images/Industrial Sheds/Industrial-sheds20.jpeg",
                },
                {
                  title: "Heavy Steel Fabrication",
                  description:
                    "Structural columns, trusses, beams, bracing and custom heavy fabrication for industrial projects.",
                  image:
                    "/images/Industrial Sheds/Industrial-sheds5.jpeg",
                },
                {
                  title: "Custom Shed Solutions",
                  description:
                    "Industrial sheds planned according to your site dimensions, application, workflow and project requirements.",
                  image:
                    "/images/Industrial Sheds/Industrial-sheds6.jpeg",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} by J.D. Enterprise`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="p-7">
                    <h3 className="font-heading text-2xl font-bold text-slate-900 transition-colors group-hover:text-orange-500">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <Link
                      to="/contact"
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-500 transition hover:text-orange-600"
                    >
                      Get a Quotation
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
