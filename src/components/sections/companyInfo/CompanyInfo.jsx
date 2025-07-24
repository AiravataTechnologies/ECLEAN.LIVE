import { useState, useEffect } from 'react';

const stats_info = [
  {
    icon: "flaticon-management",
    label: "Happy Customers",
    targetValue: 15420,
    suffix: "+"
  },
  {
    icon: "flaticon-completed-task",
    label: "Projects Completed",
    targetValue: 8750,
    suffix: "+"
  },
  {
    icon: "flaticon-handshake",
    label: "Years of Experience",
    targetValue: 12,
    suffix: ""
  },
];

export default function CompanyInfo() {
  const [counts, setCounts] = useState(stats_info.map(() => 0));
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          startCountingAnimation();
        }
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector('.company-qinfo-sec');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  const startCountingAnimation = () => {
    stats_info.forEach((stat, index) => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = stat.targetValue / steps;
      let currentCount = 0;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.targetValue) {
          currentCount = stat.targetValue;
          clearInterval(timer);
        }

        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(currentCount);
          return newCounts;
        });
      }, duration / steps);
    });
  };

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <section className="company-qinfo-sec">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="company-qinfo-raaper bg-green d-lg-flex">
              {/* stats info part start */}
              {stats_info.map((item, i) => (
                <div
                  key={i}
                  className="single-info flex-lg-fill d-flex align-items-center justify-content-center"
                >
                  <div className="info-icon">
                    <i className={item.icon} style={{ color: 'white' }} />
                  </div>
                  <div className="info">
                    <div
                      className="stat-number"
                      style={{
                        color: 'white',
                        fontSize: '24px',
                        fontWeight: '600',
                        marginBottom: '5px'
                      }}
                    >
                      {formatNumber(counts[i])}{item.suffix}
                    </div>
                    <div
                      className="stat-label"
                      style={{
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: '400'
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
              {/* stats info part end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}