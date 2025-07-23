import { prices } from "../../../data/site";
import PriceCard from "../../ui/cards/PriceCard";

export default function Pricing() {
  return (
    <section className="pricing-sec sec-ptb">
      <div className="container">
        <div className="row">
          <div className="offset-lg-3 col-lg-6">
            <div className="sec-content text-center mb-5">
              <h6 className="sec-sub-title">Our Pricing</h6>
              <h2 className="sec-title">Find the Right Plan</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* price part start */}
          {prices?.slice(0, 3).map((item, i) => (
            <PriceCard key={i} data={item} index={i} />
          ))}
          {/* price part end */}
        </div>
      </div>
    </section>
  );
}
