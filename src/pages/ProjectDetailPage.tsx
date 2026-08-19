import { ArrowRight, CheckCircle2, MapPin, MessageCircle } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import SEO from "../components/SEO";

type ProjectProfile = {
  slug: string;
  title: string;
  shortTitle: string;
  location: string;
  category: string;
  image: string;
  description: string;
  services: string[];
};

const projectProfiles: Record<string, ProjectProfile> = {
  "industrial-fabrication-sanand": {
    slug: "industrial-fabrication-sanand",
    title: "Industrial Fabrication Project Experience in Sanand",
    shortTitle: "Industrial Fabrication – Sanand",
    location: "Sanand, Gujarat",
    category: "Industrial Fabrication",
    image: "/images/Industrial%20Sheds/Industrial-sheds5.jpeg",
    description:
      "J.D. Enterprise has project experience in Sanand and supports industrial units with practical MS steel fabrication, structural work, shed construction, roofing and site execution.",
    services: [
      "MS steel fabrication",
      "Industrial shed and structural work",
      "Roofing and cladding support",
      "On-site fabrication and erection",
    ],
  },
  "steel-fabrication-changodar": {
    slug: "steel-fabrication-changodar",
    title: "Steel Fabrication Project Experience in Changodar",
    shortTitle: "Steel Fabrication – Changodar",
    location: "Changodar, Gujarat",
    category: "Steel Fabrication",
    image: "/images/Steel%20Fabrication/steelfabrication1.jpeg",
    description:
      "J.D. Enterprise serves industrial requirements in Changodar with structural and custom steel fabrication solutions designed around the building, operational and site requirements.",
    services: [
      "Structural steel fabrication",
      "Custom MS fabrication",
      "Industrial platforms and support structures",
      "Fabrication, installation and site coordination",
    ],
  },
  "industrial-shed-chhatral": {
    slug: "industrial-shed-chhatral",
    title: "Industrial Shed Project Experience in Chhatral",
    shortTitle: "Industrial Shed – Chhatral",
    location: "Chhatral, Gujarat",
    category: "Industrial Shed",
    image: "/images/Industrial%20Sheds/Industrial-sheds6.jpeg",
    description:
      "J.D. Enterprise has experience serving projects in Chhatral and provides industrial shed, warehouse structure, roofing and related steel fabrication support.",
    services: [
      "Industrial and factory sheds",
      "Warehouse steel structures",
      "Roofing and cladding",
      "Structural fabrication and erection",
    ],
  },
  "peb-building-vadodara": {
    slug: "peb-building-vadodara",
    title: "PEB and Steel Building Project Experience in Vadodara",
    shortTitle: "PEB Building – Vadodara",
    location: "Vadodara, Gujarat",
    category: "PEB Building",
    image: "/images/PEB%20Buildings/PEB-buildings1.jpeg",
    description:
      "J.D. Enterprise supports industrial projects in Vadodara with PEB and steel building solutions, including fabrication, roofing, cladding and coordinated site execution.",
    services: [
      "PEB and steel building structures",
      "Industrial shed fabrication",
      "Roofing and wall cladding",
      "Site erection and project coordination",
    ],
  },
};

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = slug ? projectProfiles[slug] : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const url = `https://jdfabrication.co.in/projects/${project.slug}`;
  const whatsappText = encodeURIComponent(
    `Hello J.D. Enterprise, I need information and a quotation for a ${project.category.toLowerCase()} project in ${project.location}.`
  );

  return (
    <>
      <SEO
        title={`${project.shortTitle} | J.D. Enterprise`}
        description={project.description}
        keywords={`${project.category} ${project.location}, industrial fabrication ${project.location}, steel fabrication Gujarat, J.D. Enterprise projects`}
        url={url}
        structuredData={{
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          url,
          image: `https://jdfabrication.co.in${project.image}`,
          creator: {
            "@type": "Organization",
            name: "J.D. Enterprise",
          },
          locationCreated: {
            "@type": "Place",
            name: project.location,
          },
        }}
      />

      <main className="bg-white">
        <section className="relative overflow-hidden bg-slate-950 pt-28 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.22),transparent_42%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
                <MapPin className="h-4 w-4" />
                {project.location}
              </div>
              <h1 className="mt-6 font-heading text-4xl font-bold leading-tight sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {project.description}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600"
                >
                  Request a Quotation
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href={`https://wa.me/919099099916?text=${whatsappText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-semibold transition hover:bg-white/10"
                >
                  <MessageCircle className="h-5 w-5" />
                  Discuss Your Project
                </a>
              </div>
            </div>
            <img
              src={project.image}
              alt={`${project.category} project experience by J.D. Enterprise in ${project.location}`}
              className="h-[360px] w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl lg:h-[460px]"
            />
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                Relevant capabilities
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
                Fabrication support suited to industrial requirements
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Every requirement is reviewed according to the intended use, site
                conditions, structural design and execution needs. Final dimensions,
                materials and commercial terms are confirmed only after project review.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {project.services.map((service) => (
                  <div
                    key={service}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                    <span className="font-medium text-slate-800">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                Verified business information
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold text-slate-900">
                J.D. Enterprise
              </h2>
              <dl className="mt-6 space-y-5 text-slate-600">
                <div>
                  <dt className="font-semibold text-slate-900">Established</dt>
                  <dd className="mt-1">1996</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Primary service area</dt>
                  <dd className="mt-1">Ahmedabad and Gujarat</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Project location</dt>
                  <dd className="mt-1">{project.location}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Project details</dt>
                  <dd className="mt-1">
                    Dimensions, quantities, client information and technical scope are
                    shared only when verified and permitted.
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold">Planning a project in {project.location}?</h2>
              <p className="mt-3 text-slate-300">
                Share your drawings, dimensions or site requirement for a practical quotation.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold hover:bg-orange-600"
            >
              Contact J.D. Enterprise
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
