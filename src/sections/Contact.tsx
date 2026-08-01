import { useState } from 'react';
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Factory,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  User,
  Users,
  X,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PRIMARY_PHONE = '919099099916';
const SECONDARY_PHONE = '919409119219';
const ACCESS_KEY = 'ce0c6ec1-899b-4d3c-8f74-f2069589afd3';

const generalWhatsAppMessage = encodeURIComponent(
  'Hello J.D. Enterprise, I would like to discuss an industrial fabrication project.'
);

type FormData = {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  service: string;
  projectLocation: string;
  budget: string;
  startDate: string;
  message: string;
};

const initialFormData: FormData = {
  companyName: '',
  contactPerson: '',
  phone: '',
  email: '',
  service: '',
  projectLocation: '',
  budget: '',
  startDate: '',
  message: '',
};

const stats = [
  { value: '500+', label: 'Projects Completed', icon: Factory },
  { value: '30+', label: 'Years Experience', icon: ShieldCheck },
  { value: '100+', label: 'Happy Clients', icon: Users },
  { value: '24/7', label: 'Customer Support', icon: Clock3 },
];

const team = [
  {
    name: 'Sagarsinh Chauhan',
    role: 'Managing Director',
    phone: '+91 90990 99916',
    phoneRaw: `+${PRIMARY_PHONE}`,
    whatsapp: `https://wa.me/${PRIMARY_PHONE}?text=${generalWhatsAppMessage}`,
    initials: 'SC',
  },
  {
    name: 'Hardiksinh Chauhan',
    role: 'Director',
    phone: '+91 94091 19219',
    phoneRaw: `+${SECONDARY_PHONE}`,
    whatsapp: `https://wa.me/${SECONDARY_PHONE}?text=${generalWhatsAppMessage}`,
    initials: 'HC',
  },
];

const benefits = [
  'Industrial fabrication experience since 1996',
  'PEB buildings and industrial shed specialists',
  'Skilled fabrication and site-installation team',
  'Quality-focused materials and workmanship',
  'Competitive and transparent project pricing',
  'Service across Ahmedabad and Gujarat',
  'On-time execution and responsive support',
  'Free initial project consultation',
];

const faqs = [
  {
    question: 'Do you provide complete PEB building solutions?',
    answer:
      'Yes. J.D. Enterprise undertakes PEB buildings, industrial sheds, structural steel fabrication, roofing, cladding and related site installation work.',
  },
  {
    question: 'Can I request a free quotation?',
    answer:
      'Yes. Submit the quotation form with your location, service and project details. Our team will review your requirement and contact you.',
  },
  {
    question: 'Do you work outside Ahmedabad?',
    answer:
      'Yes. We serve industrial and commercial projects across Gujarat, subject to project scope, location and site requirements.',
  },
  {
    question: 'What details should I share for an accurate estimate?',
    answer:
      'Please share the project location, approximate dimensions, required service, expected start date and any drawings, BOQ or reference images available.',
  },
  {
    question: 'How quickly will your team respond?',
    answer:
      'We aim to respond as quickly as possible. For urgent requirements, call or WhatsApp +91 90990 99916 directly.',
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.08);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const scrollToQuoteForm = () => {
    document
      .getElementById('quotation-form')
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: 'New Quotation Request - J.D. Enterprise Website',
          from_name: 'J.D. Enterprise Website',
          company_name: formData.companyName,
          contact_person: formData.contactPerson,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          project_location: formData.projectLocation,
          estimated_budget: formData.budget,
          expected_start_date: formData.startDate,
          project_details: formData.message,
        }),
      });

      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) {
        throw new Error('Web3Forms submission failed.');
      }

      const whatsappText = encodeURIComponent(
        `New quotation request from the J.D. Enterprise website

Company: ${formData.companyName || 'Not provided'}
Contact person: ${formData.contactPerson}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}
Service: ${formData.service}
Project location: ${formData.projectLocation}
Estimated budget: ${formData.budget || 'Not provided'}
Expected start date: ${formData.startDate || 'Not provided'}

Project details:
${formData.message}`
      );

      setShowSuccessPopup(true);
      setFormData(initialFormData);

      window.open(
        `https://wa.me/${PRIMARY_PHONE}?text=${whatsappText}`,
        '_blank',
        'noopener,noreferrer'
      );
    } catch (error) {
      console.error(error);
      window.alert(
        'Your request could not be sent. Please call or WhatsApp +91 90990 99916.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-slate-50"
    >
      {/* Premium hero */}
      <div className="relative isolate overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('/images/Fabrication-work10.jpg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/70" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-8 lg:px-10 lg:pb-28 lg:pt-32">
          <div
            className={`max-w-4xl ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300">
              <Building2 className="h-4 w-4" />
              Industrial Fabrication & Construction Company
            </div>

            <h2 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Contact <span className="text-orange-500">J.D. Enterprise</span>
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Industrial sheds, PEB buildings, structural steel fabrication,
              warehouse construction, roofing and cladding solutions across
              Gujarat since 1996.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={scrollToQuoteForm}
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Request Free Quote
                <ArrowRight className="h-5 w-5" />
              </button>

              <a
                href={`tel:+${PRIMARY_PHONE}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>

              <a
                href={`https://wa.me/${PRIMARY_PHONE}?text=${generalWhatsAppMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1fbd5a]"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="relative z-10 mx-auto -mt-8 max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-5 text-center sm:p-7 ${
                index < stats.length - 1 ? 'lg:border-r lg:border-slate-200' : ''
              } ${index < 2 ? 'border-b border-slate-200 lg:border-b-0' : ''}`}
            >
              <stat.icon className="mx-auto mb-2 h-6 w-6 text-orange-500" />
              <p className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-16 px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        {/* Management */}
        <div>
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Speak With Our Team
            </p>
            <h3 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
              Direct assistance for your project
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {team.map((member) => (
              <article
                key={member.name}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl transition group-hover:bg-orange-500/30" />
                <div className="relative flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 font-heading text-xl font-bold text-white shadow-lg">
                    {member.initials}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-orange-400">
                      {member.role}
                    </p>
                    <h4 className="mt-1 font-heading text-2xl font-bold text-white">
                      {member.name}
                    </h4>
                    <p className="mt-2 text-sm text-slate-400">
                      Available for project discussion and quotation support.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <a
                        href={`tel:${member.phoneRaw}`}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                      >
                        <Phone className="h-4 w-4" />
                        {member.phone}
                      </a>
                      <a
                        href={member.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1fbd5a]"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Why choose us + form */}
        <div className="grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="overflow-hidden rounded-3xl bg-slate-950 p-7 text-white shadow-2xl sm:p-9 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3 py-1.5 text-sm font-semibold text-orange-400">
              <ShieldCheck className="h-4 w-4" />
              Why Choose Us
            </div>

            <h3 className="mt-5 font-heading text-3xl font-bold">
              Strong structures. Reliable execution.
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              J.D. Enterprise combines practical fabrication experience,
              responsive service and project-focused execution for industrial
              clients.
            </p>

            <div className="mt-7 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-6 text-slate-200">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">Need immediate assistance?</p>
              <a
                href={`tel:+${PRIMARY_PHONE}`}
                className="mt-2 inline-flex items-center gap-2 font-heading text-xl font-bold text-white hover:text-orange-400"
              >
                <Phone className="h-5 w-5 text-orange-500" />
                +91 90990 99916
              </a>
            </div>
          </aside>

          <div
            id="quotation-form"
            className="scroll-mt-28 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
          >
            <div className="border-b border-slate-200 bg-gradient-to-r from-orange-500 to-orange-600 p-7 text-white sm:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <Send className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold sm:text-3xl">
                    Request a Free Quotation
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-orange-50 sm:text-base">
                    Share your project details and our team will contact you
                    with the next steps.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 p-7 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Company Name" optional>
                  <div className="relative">
                    <Building2 className="field-icon" />
                    <input
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="contact-input pl-11"
                      placeholder="Your company name"
                    />
                  </div>
                </Field>

                <Field label="Contact Person">
                  <div className="relative">
                    <User className="field-icon" />
                    <input
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className="contact-input pl-11"
                      placeholder="Full name"
                      required
                    />
                  </div>
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Mobile Number">
                  <div className="relative">
                    <Phone className="field-icon" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="contact-input pl-11"
                      placeholder="+91 00000 00000"
                      required
                    />
                  </div>
                </Field>

                <Field label="Email Address" optional>
                  <div className="relative">
                    <Mail className="field-icon" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-input pl-11"
                      placeholder="name@company.com"
                    />
                  </div>
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Service Required">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="contact-input"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Industrial Shed">Industrial Shed</option>
                    <option value="PEB Building">PEB Building</option>
                    <option value="Steel Fabrication">Steel Fabrication</option>
                    <option value="Structural Work">Structural Work</option>
                    <option value="Warehouse Construction">
                      Warehouse Construction
                    </option>
                    <option value="Roofing and Cladding">
                      Roofing & Cladding
                    </option>
                    <option value="Civil Construction">Civil Construction</option>
                    <option value="Other">Other Requirement</option>
                  </select>
                </Field>

                <Field label="Project Location">
                  <div className="relative">
                    <MapPin className="field-icon" />
                    <input
                      name="projectLocation"
                      value={formData.projectLocation}
                      onChange={handleChange}
                      className="contact-input pl-11"
                      placeholder="City / project location"
                      required
                    />
                  </div>
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Estimated Budget" optional>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="contact-input"
                  >
                    <option value="">Select budget range</option>
                    <option value="Below ₹5 lakh">Below ₹5 lakh</option>
                    <option value="₹5 lakh – ₹15 lakh">
                      ₹5 lakh – ₹15 lakh
                    </option>
                    <option value="₹15 lakh – ₹50 lakh">
                      ₹15 lakh – ₹50 lakh
                    </option>
                    <option value="₹50 lakh – ₹1 crore">
                      ₹50 lakh – ₹1 crore
                    </option>
                    <option value="Above ₹1 crore">Above ₹1 crore</option>
                    <option value="Need estimation">Need estimation</option>
                  </select>
                </Field>

                <Field label="Expected Start Date" optional>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </Field>
              </div>

              <Field label="Project Description">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-input min-h-[140px] resize-y"
                  placeholder="Share project size, dimensions, material requirements, timeline and any other important details."
                  required
                />
              </Field>

              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending Request...
                  </>
                ) : (
                  <>
                    Get Free Quotation
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>

              <div className="grid gap-2 text-xs font-medium text-slate-500 sm:grid-cols-3">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Free consultation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Fast response
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Transparent discussion
                </span>
              </div>
            </form>
          </div>
        </div>

        {/* Map + office */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
           <iframe
  title="J.D. Enterprise exact location"
  src="https://www.google.com/maps?q=23.043806,72.577167&z=18&output=embed"
  className="h-[380px] w-full border-0 lg:h-full lg:min-h-[460px]"
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
/>

            <div className="bg-slate-950 p-8 text-white sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
                Office Information
              </p>
              <h3 className="mt-3 font-heading text-3xl font-bold">
                J.D. Enterprise
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                Industrial Fabrication & Construction Company
              </p>

              <div className="mt-8 space-y-6">
                <ContactLine icon={MapPin} title="Address">
                  17/A J.D. Enterprise, Shahpur Society, Opp. Master Colony,
                  Ahmedabad, Gujarat – 380004
                </ContactLine>

                <ContactLine icon={Phone} title="Primary Contact">
                  <a href={`tel:+${PRIMARY_PHONE}`} className="hover:text-orange-400">
                    +91 90990 99916
                  </a>
                </ContactLine>

                <ContactLine icon={Mail} title="Email">
                  <a
                    href="mailto:sagar.chauhan@jdfabrication.co.in"
                    className="break-all hover:text-orange-400"
                  >
                    sagar.chauhan@jdfabrication.co.in
                  </a>
                </ContactLine>

                <ContactLine icon={Clock3} title="Availability">
                  Available 24 hours for calls and enquiries
                </ContactLine>
              </div>

              <a
                href="https://www.google.co.in/maps/place/23%C2%B002'37.7%22N+72%C2%B034'37.8%22E/@23.0437606,72.5669034,15z/data=!4m4!3m3!8m2!3d23.0438056!4d72.5771667?entry=ttu&g_ep=EgoyMDI2MDcyNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                <MapPin className="h-5 w-5" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mx-auto max-w-4xl">
          <div className="mb-9 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Common Questions
            </p>
            <h3 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-orange-500 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 pb-6 pt-4 text-sm leading-7 text-slate-600 sm:px-6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-center text-white shadow-2xl sm:p-12">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-12 -right-10 h-48 w-48 rounded-full bg-slate-950/15 blur-2xl" />

          <div className="relative">
            <h3 className="font-heading text-3xl font-bold sm:text-4xl">
              Ready to start your industrial project?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-orange-50">
              Discuss your fabrication, PEB, industrial shed, warehouse,
              roofing or structural work requirement with our team.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={scrollToQuoteForm}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-900"
              >
                Request Free Quote
                <ArrowRight className="h-5 w-5" />
              </button>
              <a
                href={`https://wa.me/${PRIMARY_PHONE}?text=${generalWhatsAppMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Success popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-title"
            className="relative w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setShowSuccessPopup(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-900"
              aria-label="Close success message"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-11 w-11 text-green-600" />
            </div>

            <h3
              id="success-title"
              className="mt-5 font-heading text-3xl font-bold text-slate-900"
            >
              Thank You!
            </h3>
            <p className="mt-2 font-semibold text-orange-500">
              J.D. Enterprise
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Your quotation request has been submitted successfully. Our team
              will contact you shortly.
            </p>

            <button
              type="button"
              onClick={() => setShowSuccessPopup(false)}
              className="mt-7 w-full rounded-xl bg-orange-500 py-3.5 font-bold text-white transition hover:bg-orange-600"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Local styles used only by this component */}
      <style>{`
        .contact-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgb(226 232 240);
          background: white;
          padding: 0.875rem 1rem;
          color: rgb(15 23 42);
          outline: none;
          transition: border-color 160ms ease, box-shadow 160ms ease;
        }

        .contact-input::placeholder {
          color: rgb(148 163 184);
        }

        .contact-input:focus {
          border-color: rgb(249 115 22);
          box-shadow: 0 0 0 3px rgb(249 115 22 / 0.13);
        }

        .field-icon {
          position: absolute;
          left: 0.875rem;
          top: 50%;
          width: 1rem;
          height: 1rem;
          transform: translateY(-50%);
          color: rgb(148 163 184);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}

type FieldProps = {
  label: string;
  optional?: boolean;
  children: React.ReactNode;
};

function Field({ label, optional = false, children }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
        {optional ? (
          <span className="ml-1 font-normal text-slate-400">(Optional)</span>
        ) : (
          <span className="ml-1 text-orange-500">*</span>
        )}
      </span>
      {children}
    </label>
  );
}

type ContactLineProps = {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
};

function ContactLine({ icon: Icon, title, children }: ContactLineProps) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
          {title}
        </p>
        <div className="mt-1 text-sm leading-6 text-slate-200">{children}</div>
      </div>
    </div>
  );
}