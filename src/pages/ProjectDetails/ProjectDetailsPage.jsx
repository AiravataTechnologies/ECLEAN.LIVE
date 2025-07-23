import NewslatterStyle3 from "../../components/sections/newsletter/NewsletterStyle3";
import ProjectInfo from "../../components/sections/projectDetails/ProjectInfo";
import BreadCrumb from "../../components/ui/breadCrumb/BreadCrumb";

const breadcumb_data = {
  title: "Our Projects",
  list: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Project Details",
      url: "/project-details",
    },
  ],
};
export default function ProjectDetailsPage() {
  return (
    <>
      <BreadCrumb data={breadcumb_data} />
      <ProjectInfo />
      <NewslatterStyle3 />
    </>
  );
}
