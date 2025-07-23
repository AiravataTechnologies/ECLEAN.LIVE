import { teams } from "../../../data/site";
import TeamCard from "../../ui/cards/TeamCard";

export default function TeamInfo() {
  return (
    <section className="team-page-sec team-sec sec-ptb bg-light-greem">
      <div className="container">
        <div className="row">
          <div className="offset-lg-3 col-lg-6">
            <div className="sec-content text-center mb-5">
              <h6 className="sec-sub-title">Our Team Members</h6>
              <h2 className="sec-title">
                Building A Smarter future Through Our Team
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* team card part start */}
          {teams?.slice(0, 6).map((item, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <TeamCard data={item} />
            </div>
          ))}
          {/* team card part end */}
        </div>
      </div>
    </section>
  );
}
