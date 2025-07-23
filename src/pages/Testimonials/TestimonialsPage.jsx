import NewslatterStyle3 from "../../components/sections/newsletter/NewsletterStyle3";
import TestimonialsList from "../../components/sections/testimonial/TestimonialsList";
import BreadCrumb from "../../components/ui/breadCrumb/BreadCrumb";

const breadcumb_data = {
  title: "Testimonials",
  list: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Testimonials",
      url: "/testimonials",
    },
  ],
};

export default function TestimonialsPage() {
  return (
    <>
      <BreadCrumb data={breadcumb_data} />
      <TestimonialsList />
      <NewslatterStyle3 />
    </>
  );
}
