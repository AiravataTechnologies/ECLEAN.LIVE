import NewslatterStyle3 from "../../components/sections/newsletter/NewsletterStyle3";
import BreadCrumb from "../../components/ui/breadCrumb/BreadCrumb";
import ServiceInfo from "../../components/ui/service/ServiceInfo";

const breadcumb_data = {
  title: "Service Details",
  list: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Service Details",
      url: "/service-details",
    },
  ],
};

export default function ServiceDetailsPage() {
  return (
    <>
      <BreadCrumb data={breadcumb_data} />
      <ServiceInfo />
      <NewslatterStyle3 />
    </>
  );
}
