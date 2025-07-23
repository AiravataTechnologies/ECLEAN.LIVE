import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const progress_data = [
  {
    title: "Service Efficiency",
    completed: 85,
  },
  {
    title: "Quality Assurance",
    completed: 92,
  },
  {
    title: "Client Satisfaction",
    completed: 88,
  },
];

export default function Business() {
  const [animatedProgress, setAnimatedProgress] = useState([
    { title: "Service Efficiency", completed: 0, target: 85 },
    { title: "Quality Assurance", completed: 0, target: 92 },
    { title: "Client Satisfaction", completed: 0, target: 88 },
  ]);
  const [textVisible, setTextVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Text animation trigger
            const textTimer = setTimeout(() => {
              setTextVisible(true);
            }, 500);

            // Progress bar animation
            const progressTimer = setTimeout(() => {
              const interval = setInterval(() => {
                setAnimatedProgress(prev => 
                  prev.map(item => ({
                    ...item,
                    completed: item.completed < item.target 
                      ? Math.min(item.completed + 2, item.target)
                      : item.target
                  }))
                );
              }, 50);

              const stopTimer = setTimeout(() => {
                clearInterval(interval);
              }, 3000);

              return () => clearTimeout(stopTimer);
            }, 1000);

            return () => {
              clearTimeout(textTimer);
              clearTimeout(progressTimer);
            };
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -10% 0px' // Adjust trigger point
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="business-sec sec-ptb bg-light-greem">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-content h-100 d-flex justify-content-center flex-column">
              <h6 
                className={`sec-sub-title ${textVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: '0.2s' }}
              >
                Smart Solutions
              </h6>
              <h2 
                className={`sec-title ${textVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: '0.4s' }}
              >
                Transform Your Cleaning Operations with AI-Powered Intelligence
              </h2>
              <p 
                className={`sec-text ${textVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: '0.6s' }}
              >
                Revolutionize hygiene and facility management through our next-generation 
                AI-based SaaS platform. Streamline operations, enhance transparency, and 
                deliver real-time intelligence across both public and private sector ecosystems.
              </p>
              {/* progressbar part start */}
              {animatedProgress?.map((item, i) => (
                <div 
                  key={i} 
                  className={`ab-progress ${textVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.8 + (i * 0.2)}s` }}
                >
                  <h2 className="progress-title">{item.title}</h2>
                  <ProgressBar
                    className="ui-progressbar"
                    completed={item.completed}
                    animateOnRender={false}
                    height="8px"
                    baseBgColor="#a1cebe"
                    bgColor="var(--thm-teal)"
                    labelClassName="ui-progressbar-label"
                  />
                </div>
              ))}
              {/* progressbar part end */}
            </div>
          </div>
          <div className="col-lg-6 tab-col-gap">
            <div
              className={`sec-images wow fadeInRight ${textVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="sec-img-one h-100">
                <DotLottieReact
                  src="https://lottie.host/4aed34ec-5ec9-487d-9623-f4280ae2642d/t6Jd1Ghn0j.lottie"
                  loop
                  autoplay
                  className="h-100"
                />
              </div>
              <div className="sec-img-two">
                <DotLottieReact
                  src="https://lottie.host/4f6ea43b-4891-4a24-8162-4550fa9fe3f4/E3zeIeq9sa.lottie"
                  loop
                  autoplay
                  className="h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .opacity-0 {
          opacity: 0;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .ab-progress {
          margin-bottom: 20px;
        }
        
        .ui-progressbar {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}