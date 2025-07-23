import TeamDetailsBio from "../../components/sections/teamDetails/TeamDetailsBio";
import TeamDetailsContact from "../../components/sections/teamDetails/TeamDetailsContact";
import BreadCrumb from "../../components/ui/breadCrumb/BreadCrumb";

const breadcumb_data = {
  title: "Team Details",
  list: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Team Details",
      url: "/team-details",
    },
  ],
};
export default function TeamDetails() {
  return (
    <>
      <BreadCrumb data={breadcumb_data} />
      <TeamDetailsBio />
      <TeamDetailsContact />
    </>
  );
}
