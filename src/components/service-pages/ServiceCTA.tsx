import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

type ServiceCTAProps = {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonTo?: string;
};

export default function ServiceCTA({
  title,
  description,
  buttonLabel = "Request a Quotation",
  buttonTo = "/contact",
}: ServiceCTAProps) {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950/80 p-10 shadow-2xl lg:p-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">Quotation Support</p>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">{title}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to={buttonTo}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              {buttonLabel}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/919099099916"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/20"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
