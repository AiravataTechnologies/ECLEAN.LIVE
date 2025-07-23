import NewslatterStyle3 from "../../components/sections/newsletter/NewsletterStyle3";
import TeamInfo from "../../components/sections/team/TeamInfo";
import BreadCrumb from "../../components/ui/breadCrumb/BreadCrumb";

const breadcumb_data = {
  title: "Our Team",
  list: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Team",
      url: "/team",
    },
  ],
};
export default function TeamPage() {
  return (
    <>
      <BreadCrumb data={breadcumb_data} />
      <TeamInfo />
      <NewslatterStyle3 bg_color="bg-light-greem" />
    </>
  );
}
