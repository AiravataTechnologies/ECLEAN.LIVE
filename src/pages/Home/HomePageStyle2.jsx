import AboutStyle2 from "../../components/sections/about/AboutStyle2";
import Brand from "../../components/sections/brand/Brand";
import Faq from "../../components/sections/faq/Faq";
import HeroStyle2 from "../../components/sections/hero/HeroStyle2";
import LatestBlog from "../../components/sections/latestBlog/LatestBlog";
import NewslatterStyle2 from "../../components/sections/newsletter/NewsletterStyle2";
import NewslatterStyle3 from "../../components/sections/newsletter/NewsletterStyle3";
import ProjectStyle2 from "../../components/sections/project/ProjectStyle2";
import ServiceStyle2 from "../../components/sections/service/ServiceStyle2";
import Team from "../../components/sections/team/Team";
import TestimonialStyle2 from "../../components/sections/testimonial/TestimonialStyle2";
import { projects_2, services_2 } from "../../data/site";

const HomePageStyle2 = () => {
  const projects = projects_2.slice(0, 3);
  const services = services_2.slice(0, 3);
  return (
    <>
      <HeroStyle2 />
      <ServiceStyle2 data={services} />
      <AboutStyle2 />
      <NewslatterStyle2 />
      <ProjectStyle2 data={projects} />
      <Team />
      <Brand />
      <Faq />
      <TestimonialStyle2 />
      <LatestBlog />
      <NewslatterStyle3 />
    </>
  );
};

export default HomePageStyle2;
