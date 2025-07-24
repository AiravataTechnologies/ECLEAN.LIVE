import { prices } from "../../../data/site";
import PriceCard from "../../ui/cards/PriceCard";

export default function Pricing() {
  return (
    <>
      <style jsx>{`
        .pricing-section-wrapper {
          padding: 100px 0 80px;
          background-color: #ffffff;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .pricing-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
        }

        .pricing-header-row {
          display: flex;
          justify-content: center;
          margin-bottom: 60px;
        }

        .pricing-header-col {
          max-width: 700px;
          width: 100%;
        }

        .pricing-header-content {
          text-align: center;
        }

        .pricing-subtitle {
          color: #ff9500;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          display: block;
          opacity: 0.9;
        }

        .pricing-title {
          color: #2c3e50;
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 0;
          margin-top: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          letter-spacing: -0.5px;
        }

        .pricing-cards-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          justify-items: center;
          align-items: start;
        }

        /* Large Desktop (1400px+) */
        @media (min-width: 1400px) {
          .pricing-cards-row {
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .pricing-section-wrapper {
            padding: 120px 0 100px;
          }
          
          .pricing-container {
            padding: 0 40px;
          }
        }

        /* Desktop (1024px - 1399px) */
        @media (min-width: 1024px) and (max-width: 1399px) {
          .pricing-cards-row {
            grid-template-columns: repeat(3, 1fr);
            gap: 35px;
            max-width: 1000px;
            margin: 0 auto;
          }
          
          .pricing-container {
            padding: 0 30px;
          }
        }

        /* Medium Desktop (900px - 1023px) */
        @media (min-width: 900px) and (max-width: 1023px) {
          .pricing-cards-row {
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
            max-width: 850px;
            margin: 0 auto;
          }
          
          .pricing-container {
            padding: 0 25px;
          }
        }

        /* Tablet Landscape (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .pricing-section-wrapper {
            padding: 80px 0 60px;
          }
          
          .pricing-cards-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
          
          .pricing-header-row {
            margin-bottom: 50px;
          }
          
          .pricing-subtitle {
            font-size: 14px;
            letter-spacing: 2px;
          }
        }

        /* Tablet Portrait & Large Mobile (481px - 767px) */
        @media (min-width: 481px) and (max-width: 767px) {
          .pricing-section-wrapper {
            padding: 60px 0 50px;
            min-height: auto;
          }
          
          .pricing-cards-row {
            grid-template-columns: 1fr;
            gap: 20px;
            max-width: 400px;
            margin: 0 auto;
          }
          
          .pricing-header-row {
            margin-bottom: 40px;
          }
          
          .pricing-subtitle {
            font-size: 13px;
            letter-spacing: 1.8px;
            margin-bottom: 15px;
          }
          
          .pricing-container {
            padding: 0 15px;
          }
        }

        /* Small Mobile (320px - 480px) */
        @media (max-width: 480px) {
          .pricing-section-wrapper {
            padding: 40px 0 30px;
            min-height: auto;
          }
          
          .pricing-cards-row {
            grid-template-columns: 1fr;
            gap: 15px;
            max-width: 350px;
            margin: 0 auto;
          }
          
          .pricing-container {
            padding: 0 12px;
          }
          
          .pricing-header-row {
            margin-bottom: 30px;
          }
          
          .pricing-subtitle {
            font-size: 12px;
            letter-spacing: 1.5px;
            margin-bottom: 12px;
          }
        }

        /* Extra Small Mobile (below 320px) */
        @media (max-width: 319px) {
          .pricing-section-wrapper {
            padding: 30px 0 25px;
          }
          
          .pricing-container {
            padding: 0 8px;
          }
          
          .pricing-cards-row {
            gap: 12px;
            max-width: 280px;
          }
          
          .pricing-subtitle {
            font-size: 11px;
            letter-spacing: 1px;
          }
        }

        /* High DPI/Retina Display Optimizations */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .pricing-title {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          .pricing-subtitle {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }

        /* Accessibility Improvements */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Print Styles */
        @media print {
          .pricing-section-wrapper {
            padding: 20px 0;
            background-color: white !important;
          }
          
          .pricing-cards-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }

        /* Landscape Mobile Specific */
        @media (max-height: 500px) and (orientation: landscape) {
          .pricing-section-wrapper {
            padding: 30px 0;
            min-height: auto;
          }
          
          .pricing-header-row {
            margin-bottom: 25px;
          }
        }

        /* Focus and Hover States for Better UX */
        .pricing-cards-row > * {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          width: 100%;
          max-width: 350px;
        }

        .pricing-cards-row > *:hover {
          transform: translateY(-2px);
        }

        /* Ensure consistent card sizing on desktop */
        @media (min-width: 900px) {
          .pricing-cards-row > * {
            height: auto;
            min-height: 400px;
            display: flex;
            flex-direction: column;
          }
        }

        /* Container Query Support (for modern browsers) */
        @supports (container-type: inline-size) {
          .pricing-cards-row {
            container-type: inline-size;
          }
          
          @container (min-width: 900px) {
            .pricing-cards-row {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          
          @container (min-width: 600px) and (max-width: 899px) {
            .pricing-cards-row {
              grid-template-columns: repeat(2, 1fr);
            }
          }
        }
      `}</style>

      <section className="pricing-section-wrapper">
        <div className="pricing-container">
          <div className="pricing-header-row">
            <div className="pricing-header-col">
              <div className="pricing-header-content">
                <h6 className="pricing-subtitle">
                  Our Pricing
                </h6>
                <h2 className="pricing-title">
                  Find the Right Plan
                </h2>
              </div>
            </div>
          </div>
          <div className="pricing-cards-row">
            {/* price part start */}
            {prices?.slice(0, 3).map((item, i) => (
              <PriceCard key={i} data={item} index={i} />
            ))}
            {/* price part end */}
          </div>
        </div>
      </section>
    </>
  );
}