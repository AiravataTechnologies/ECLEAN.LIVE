import BlogDetailsInfo from "../../components/sections/blog/BlogDetailsInfo";
import NewslatterStyle3 from "../../components/sections/newsletter/NewsletterStyle3";
import BreadCrumb from "../../components/ui/breadCrumb/BreadCrumb";

const breadcumb_data = {
  title: "Blog Details",
  list: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Blog Details",
      url: "/blog-details",
    },
  ],
};

export default function BlogDetailsPage() {
  return (
    <>
      <BreadCrumb data={breadcumb_data} />
      <BlogDetailsInfo />
      <NewslatterStyle3 />
    </>
  );
}
