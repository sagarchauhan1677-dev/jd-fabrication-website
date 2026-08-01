import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 | Page Not Found | J.D Enterprise"
        description="The page you requested could not be found. Return to the J.D Enterprise homepage for industrial fabrication and construction services in Ahmedabad, Gujarat."
        keywords="404 page, J.D Enterprise, industrial fabrication Ahmedabad"
        url="https://jdfabrication.co.in/404"
        ogTitle="404 | Page Not Found | J.D Enterprise"
        ogDescription="The page you requested could not be found. Visit J.D Enterprise for industrial fabrication and construction services in Ahmedabad, Gujarat."
      />

      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-24">
        <div className="max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">404 Error</p>
          <h1 className="mt-4 font-heading text-4xl font-bold text-slate-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            The page you were looking for may have moved or no longer exists. Please return to the homepage or explore our industrial fabrication services in Ahmedabad and Gujarat.
          </p>
          <Link to="/" className="mt-8 inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600">
            Return to homepage
          </Link>
        </div>
      </main>
    </>
  );
}
