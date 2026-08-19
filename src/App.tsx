import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import IndustrialShedPage from "./pages/IndustrialShedPage";
import PEBBuildingsPage from "./pages/PEBBuildingsPage";
import SteelFabricationPage from "./pages/SteelFabricationPage";
import WarehouseConstructionPage from "./pages/WarehouseConstructionPage";
import RoofingCladdingPage from "./pages/RoofingCladdingPage";
import StructuralWorksPage from "./pages/StructuralWorksPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/industrial-shed-fabrication" element={<IndustrialShedPage />} />
        <Route path="/services/peb-buildings" element={<PEBBuildingsPage />} />
        <Route path="/services/steel-fabrication" element={<SteelFabricationPage />} />
        <Route path="/services/warehouse-construction" element={<WarehouseConstructionPage />} />
        <Route path="/services/roofing-cladding" element={<RoofingCladdingPage />} />
        <Route path="/services/structural-works" element={<StructuralWorksPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
