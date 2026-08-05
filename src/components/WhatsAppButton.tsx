import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello J.D. Enterprise,\n\nI am interested in your industrial fabrication services. Please share more details and a quotation.\n\nThank you."
  );

  return (
    <a
      href={`https://wa.me/919099099916?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition hover:scale-110"
      title="Get a free quotation on WhatsApp"
    >
      
      <FaWhatsapp className="text-4xl text-white" />
    </a>
  );
}