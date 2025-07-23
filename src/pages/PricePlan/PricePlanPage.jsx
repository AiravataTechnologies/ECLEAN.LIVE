import Faq from "../../components/sections/faq/Faq";
import Newslatter from "../../components/sections/newsletter/Newsletter";
import NewslatterStyle3 from "../../components/sections/newsletter/NewsletterStyle3";
import Pricing from "../../components/sections/pricing/Pricing";
import BreadCrumb from "../../components/ui/breadCrumb/BreadCrumb";

const breadcumb_data = {
  title: "Our Pricing",
  list: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Pricing",
      url: "/price-plan",
    },
  ],
};

export default function PricePlanPage() {
  return (
    <>
      <BreadCrumb data={breadcumb_data} />
      <Pricing />
      <Newslatter />
      <Faq />
      <NewslatterStyle3 />
    </>
  );
}
