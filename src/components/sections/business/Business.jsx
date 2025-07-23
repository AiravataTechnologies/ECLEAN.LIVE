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
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const animationRef = useRef(null);

  // Optimized visibility check using getBoundingClientRect
  useEffect(() => {
    const checkVisibility = () => {
      if (!sectionRef.current || hasAnimated) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Element is visible when top is within viewport (more responsive)
      if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
        setIsVisible(true);
        setHasAnimated(true);
      }
    };

    // Check immediately on mount
    checkVisibility();

    // Throttled scroll listener for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Also check on resize
    const handleResize = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hasAnimated]);

  // Trigger animations when visible
  useEffect(() => {
    if (!isVisible) return;

    // Start progress animation immediately when visible
    const startTime = Date.now();
    const duration = 2000; // 2 seconds for smooth animation

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setAnimatedProgress(prev =>
        prev.map(item => ({
          ...item,
          completed: Math.round(item.target * easeOut)
        }))
      );

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Ensure final values are exact
        setAnimatedProgress(prev =>
          prev.map(item => ({
            ...item,
            completed: item.target
          }))
        );
      }
    };

    // Small delay to let text animations start first
    setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, 300);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="business-sec sec-ptb bg-light-greem">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-content h-100 d-flex justify-content-center flex-column">
              <h6
                className={`sec-sub-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: '0.1s' }}
              >
                Smart Solutions
              </h6>
              <h2
                className={`sec-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: '0.2s' }}
              >
                Transform Your Cleaning Operations with AI-Powered Intelligence
              </h2>
              <p
                className={`sec-text ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: '0.3s' }}
              >
                Revolutionize hygiene and facility management through our next-generation
                AI-based SaaS platform. Streamline operations, enhance transparency, and
                deliver real-time intelligence across both public and private sector ecosystems.
              </p>
              {/* progressbar part start */}
              {animatedProgress?.map((item, i) => (
                <div
                  key={i}
                  className={`ab-progress ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.4 + (i * 0.1)}s` }}
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
              className={`sec-images wow fadeInRight ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
              style={{ animationDelay: '0.2s' }}
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
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
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