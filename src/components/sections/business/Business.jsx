import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const progress_data = [
  {
    title: "Service Efficiency",
    completed: 100,
  },
  {
    title: "Quality Assurance",
    completed: 100,
  },
  {
    title: "Client Satisfaction",
    completed: 100,
  },
];

export default function Business() {
  const [animatedProgress, setAnimatedProgress] = useState([
    { title: "Service Efficiency", completed: 0, target: 100 },
    { title: "Quality Assurance", completed: 0, target: 100 },
    { title: "Client Satisfaction", completed: 0, target: 100 },
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
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="sec-content h-100 d-flex justify-content-center flex-column">
              <h6
                className={`sec-sub-title business-orange-subtitle ${isVisible ? 'business-animate-fade-in-up' : 'business-opacity-0'}`}
                style={{ animationDelay: '0.1s' }}
              >
                Smart Solutions
              </h6>
              <div
                className={`business-content-section ${isVisible ? 'business-animate-fade-in-up' : 'business-opacity-0'}`}
                style={{ animationDelay: '0.2s' }}
              >
                <h2 className="business-sec-title">
                  Transform Your Cleaning Operations with AI-Powered Intelligence
                </h2>
                <p className="business-sec-text">
                  Revolutionize hygiene and facility management through our next-generation
                  AI-based SaaS platform. Streamline operations, enhance transparency, and
                  deliver real-time intelligence across both public and private sector ecosystems.
                </p>
              </div>
              {/* progressbar part start */}
              {animatedProgress?.map((item, i) => (
                <div
                  key={i}
                  className={`ab-progress ${isVisible ? 'business-animate-fade-in-up' : 'business-opacity-0'}`}
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
              className={`sec-images d-flex justify-content-center align-items-center wow fadeInRight ${isVisible ? 'business-animate-fade-in-right' : 'business-opacity-0'}`}
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="business-sec-img-main">
                <DotLottieReact
                  src="https://lottie.host/4aed34ec-5ec9-487d-9623-f4280ae2642d/t6Jd1Ghn0j.lottie"
                  loop
                  autoplay
                  className="business-lottie-animation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Reduced section padding */
        .business-sec {
          padding: 40px 0 !important;
        }
        
        .business-opacity-0 {
          opacity: 0;
        }
        
        /* Force orange color for Smart Solutions subtitle */
        .business-orange-subtitle {
          color: #ff6b35 !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
          margin-bottom: 10px !important;
        }
        
        /* Override any existing styles that might conflict */
        .sec-sub-title.business-orange-subtitle,
        h6.business-orange-subtitle,
        .business-orange-subtitle {
          color: #ff6b35 !important;
        }
        
        .business-animate-fade-in-up {
          animation: businessFadeInUp 0.6s ease-out forwards;
        }
        
        .business-animate-fade-in-right {
          animation: businessFadeInRight 0.8s ease-out forwards;
        }
        
        @keyframes businessFadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes businessFadeInRight {
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
          margin-bottom: 15px;
        }
        
        .ui-progressbar {
          transition: all 0.3s ease;
        }
        
        .sec-images {
          height: 100%;
          min-height: 280px;
        }
        
        .business-sec-img-main {
          width: 100%;
          max-width: 350px;
          height: 280px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .business-lottie-animation {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        
        .business-content-section {
          text-align: justify;
          line-height: 1.5;
          width: 100%;
          max-width: 100%;
          padding-right: 15px;
        }
        
        .business-content-section .business-sec-title {
          text-align: left;
          line-height: 1.2;
          margin-bottom: 15px;
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          font-weight: bold;
          color: #333;
          word-wrap: break-word;
          hyphens: auto;
          max-width: 100%;
        }
        
        .business-content-section .business-sec-text {
          text-align: justify;
          line-height: 1.5;
          margin: 0 0 20px 0;
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          color: #666;
        }
        
        .row.align-items-center {
          align-items: center !important;
        }
        
        .col-lg-6 {
          width: 100%;
        }
        
        @media (min-width: 992px) {
          .col-lg-6 {
            width: 50%;
            flex: 0 0 50%;
          }
        }
        
        @media (max-width: 991px) {
          .business-sec {
            padding: 30px 0 !important;
          }
          
          .business-sec-img-main {
            max-width: 280px;
            height: 220px;
            margin: 20px auto;
          }
          
          .business-content-section {
            padding-right: 0;
            margin-bottom: 20px;
          }
          
          .business-content-section .business-sec-title {
            font-size: clamp(1.4rem, 5vw, 1.9rem);
            text-align: center;
            margin-bottom: 12px;
          }
          
          .business-content-section .business-sec-text {
            text-align: center;
            margin-bottom: 15px;
          }
          
          /* Center align Smart Solutions subtitle in mobile */
          .business-orange-subtitle {
            text-align: center !important;
          }
          
          .sec-images {
            min-height: 220px;
          }
        }
        
        @media (max-width: 767px) {
          .business-sec {
            padding: 25px 0 !important;
          }
          
          .business-sec-img-main {
            max-width: 240px;
            height: 180px;
          }
          
          .business-content-section .business-sec-title {
            font-size: clamp(1.3rem, 6vw, 1.7rem);
            line-height: 1.1;
            margin-bottom: 10px;
          }
          
          .business-content-section .business-sec-text {
            font-size: clamp(0.85rem, 3vw, 0.95rem);
            margin-bottom: 15px;
          }
          
          .ab-progress {
            margin-bottom: 12px;
          }
          
          .sec-images {
            min-height: 180px;
          }
        }
        
        @media (max-width: 576px) {
          .business-sec {
            padding: 20px 0 !important;
          }
          
          .business-content-section .business-sec-title {
            font-size: clamp(1.1rem, 7vw, 1.4rem);
            line-height: 1.1;
            word-break: break-word;
          }
          
          .business-content-section {
            padding: 0 10px;
          }
          
          .business-sec-img-main {
            max-width: 200px;
            height: 160px;
          }
          
          .sec-images {
            min-height: 160px;
          }
        }
      `}</style>
    </section>
  );
}