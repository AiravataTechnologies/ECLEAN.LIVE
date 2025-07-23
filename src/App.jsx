import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LayoutStyle2 from "./components/layout/LayoutStyle2";
import LayoutStyle3 from "./components/layout/LayoutStyle3";
import ScrollTopOnLoad from "./components/ScrollTopOnLoad";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/About/AboutPage";
import BlogPage from "./pages/Blog/BlogPage";
import BlogDetailsPage from "./pages/BlogDetails/BlogDetailsPage";
import ContactPage from "./pages/Contact/ContactPage";
import FaqsPage from "./pages/Faq/FaqsPage";
import HomePage from "./pages/Home/HomePage";
import HomePageStyle2 from "./pages/Home/HomePageStyle2";
import HomePageStyle3 from "./pages/Home/HomePageStyle3";
import PricePlanPage from "./pages/PricePlan/PricePlanPage";
import ProjectDetailsPage from "./pages/ProjectDetails/ProjectDetailsPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ServicesPage from "./pages/Service/ServicePage";
import ServiceDetailsPage from "./pages/ServiceDetails/ServiceDetailsPage";
import TeamPage from "./pages/Team/TeamPage";
import TeamDetailsPage from "./pages/TeamDetails/TeamDetailsPage";
import TestimonialsPage from "./pages/Testimonials/TestimonialsPage";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollTopOnLoad />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service-details" element={<ServiceDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-details" element={<BlogDetailsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team-details" element={<TeamDetailsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project-details" element={<ProjectDetailsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/price-plan" element={<PricePlanPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/home-2" element={<LayoutStyle2 />}>
          <Route index element={<HomePageStyle2 />} />
        </Route>
        <Route path="/home-3" element={<LayoutStyle3 />}>
          <Route index element={<HomePageStyle3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
