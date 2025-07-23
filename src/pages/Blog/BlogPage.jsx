import BlogInfo from "../../components/sections/blog/BlogInfo";
import NewslatterStyle3 from "../../components/sections/newsletter/NewsletterStyle3";
import BreadCrumb from "../../components/ui/breadCrumb/BreadCrumb";

const breadcumb_data = {
  title: "Our Blogs",
  list: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Blog",
      url: "/blog",
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <BreadCrumb data={breadcumb_data} />
      <BlogInfo />
      <NewslatterStyle3 />
    </>
  );
}
