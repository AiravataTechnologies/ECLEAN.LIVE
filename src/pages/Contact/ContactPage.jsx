import NewslatterStyle3 from "../../components/sections/newsletter/NewsletterStyle3";
import BreadCrumb from "../../components/ui/breadCrumb/BreadCrumb";
import ContactMap from "../../components/ui/contact/ContactMap";
import ContactForm from "../../components/ui/form/ContactForm";

const breadcumb_data = {
  title: "Contact Us",
  list: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <BreadCrumb data={breadcumb_data} />
      <ContactMap />
      <ContactForm />
      <NewslatterStyle3 />
    </>
  );
}
