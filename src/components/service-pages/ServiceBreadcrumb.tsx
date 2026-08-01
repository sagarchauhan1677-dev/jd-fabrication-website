import { Link } from "react-router-dom";

type BreadcrumbItem = {
  label: string;
  to?: string;
};

type ServiceBreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function ServiceBreadcrumb({ items }: ServiceBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
        <li>
          <Link to="/" className="font-medium text-orange-600 transition hover:text-orange-700">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            <span className="text-slate-400">/</span>
            {item.to ? (
              <Link to={item.to} className="font-medium text-slate-600 transition hover:text-orange-600">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-slate-800">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
