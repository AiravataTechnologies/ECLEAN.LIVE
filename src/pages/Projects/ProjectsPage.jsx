import NewslatterStyle3 from "../../components/sections/newsletter/NewsletterStyle3";
import ProjectStyle2 from "../../components/sections/project/ProjectStyle2";
import BreadCrumb from "../../components/ui/breadCrumb/BreadCrumb";
import { projects_2 } from "../../data/site";

const breadcumb_data = {
  title: "Our Projects",
  list: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Projects",
      url: "/projects",
    },
  ],
};

export default function ProjectsPage() {
  const data = projects_2.slice(0, 6);
  return (
    <>
      <BreadCrumb data={breadcumb_data} />
      <ProjectStyle2 data={data} />
      <NewslatterStyle3 />
    </>
  );
}
