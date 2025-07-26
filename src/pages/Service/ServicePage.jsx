import Newslatter from "../../components/sections/newsletter/Newsletter";
// import NewslatterStyle3 from "../../components/sections/newsletter/NewsletterStyle3";
// // import Pricing from "../../components/sections/pricing/Pricing";
import ServiceStyle2 from "../../components/sections/service/ServiceStyle2";
import BreadCrumb from "../../components/ui/breadCrumb/BreadCrumb";
import { services_2 } from "../../data/site";
const breadcumb_data = {
  title: "Our Features",
  list: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Services",
      url: "/services",
    },
  ],
};

export default function ServicesPage() {
  const services = services_2.slice(0, 6);
  return (
    <>
      <BreadCrumb data={breadcumb_data} />
      <ServiceStyle2 data={services} />
      <Newslatter />
      {/* <Pricing /> */}
      {/* <NewslatterStyle3 /> */}
    </>
  );
}
