import FaqStyle2 from "../../components/sections/faq/FaqStyle2";
import NewslatterStyle3 from "../../components/sections/newsletter/NewsletterStyle3";
import TestimonialStyle4 from "../../components/sections/testimonial/TestimonialStyle4";
import BreadCrumb from "../../components/ui/breadCrumb/BreadCrumb";

const breadcumb_data = {
  title: "FAQs",
  list: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "FAQs",
      url: "/faqs",
    },
  ],
};

export default function FaqsPage() {
  return (
    <>
      <BreadCrumb data={breadcumb_data} />
      <FaqStyle2 />
      <TestimonialStyle4 />
      <NewslatterStyle3 bg_color="bg-light-greem" />
    </>
  );
}
