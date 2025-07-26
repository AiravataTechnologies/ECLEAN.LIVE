import { teams } from "../../../data/site";
import TeamCard from "../../ui/cards/TeamCard";

export default function Team() {
  return (
    <section className="team-sec sec-ptb bg-light-greem">
      <div className="container">
        {/* Header Section - Centered */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 text-center">
            <div className="sec-content">
              <h6 className="sec-sub-title">Our Team Members</h6>
              <h2 className="sec-title">
                Building A Smarter future Through Our Team
              </h2>
            </div>
          </div>
        </div>

        {/* Team Cards Section - Centered */}
        <div className="row pt-5 justify-content-center">
          {teams?.slice(0, 4).map((item, i) => (
            <div key={i} className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <TeamCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}