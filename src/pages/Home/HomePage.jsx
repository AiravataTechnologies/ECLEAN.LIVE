import About from "../../components/sections/about/About";
import Brand from "../../components/sections/brand/Brand";
import Business from "../../components/sections/business/Business";
import CompanyInfo from "../../components/sections/companyInfo/CompanyInfo";
import Hero from "../../components/sections/hero/Hero";
import LatestBlog from "../../components/sections/latestBlog/LatestBlog";
import Newslatter from "../../components/sections/newsletter/Newsletter";
import WhyChooseUs from "../../components/sections/whyChooseUs/WhyChooseUs";
// import AutomationFeatures from "../../components/sections/automationFeatures/AutomationFeatures";
import Pricing from "../../components/sections/pricing/Pricing";
import Service from "../../components/sections/service/Service";
import Testimonial from "../../components/sections/testimonial/Testimonial";
import WhoWeServe from "../../components/sections/whoWeServe/WhoWeServe";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Newslatter />
      <WhyChooseUs />
      <Business />
      <CompanyInfo />
      <Pricing />
      <WhoWeServe />
      {/* <AutomationFeatures /> */}
      <Testimonial />
      <LatestBlog bg_color="bg-light-greem" />
    </>
  );
}