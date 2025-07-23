import About from "../../components/sections/about/About";
import Business from "../../components/sections/business/Business";
import CompanyInfo from "../../components/sections/companyInfo/CompanyInfo";
import NewslatterStyle3 from "../../components/sections/newsletter/NewsletterStyle3";
import Team from "../../components/sections/team/Team";
import Testimonial from "../../components/sections/testimonial/Testimonial";
import BreadCrumb from "../../components/ui/breadCrumb/BreadCrumb";

const breadcumb_data = {
  title: "About",
  list: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <BreadCrumb data={breadcumb_data} />
      <About />
      <Business />
      <CompanyInfo />
      <Testimonial />
      <Team />
      <NewslatterStyle3 bg_color="bg-light-greem" />
    </>
  );
}
