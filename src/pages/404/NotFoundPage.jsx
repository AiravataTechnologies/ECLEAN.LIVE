import NotFoundInfo from "../../components/sections/404/NotFoundInfo";
import NewslatterStyle3 from "../../components/sections/newsletter/NewsletterStyle3";
import BreadCrumb from "../../components/ui/breadCrumb/BreadCrumb";

const breadcumb_data = {
  title: "Page Not Found",
  list: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "404",
      url: "/404",
    },
  ],
};

export default function NotFoundPage() {
  return (
    <>
      <BreadCrumb data={breadcumb_data} />
      <NotFoundInfo />
      <NewslatterStyle3 />
    </>
  );
}
