import React, { useState, useEffect } from 'react';

const WhoWeServe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isSmallMobile: false
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);

    const updateScreenSize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isMobile: width <= 768,
        isTablet: width > 768 && width <= 1024,
        isSmallMobile: width <= 480
      });
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  const { isMobile, isTablet, isSmallMobile } = screenSize;

  const serviceCards = [
    {
      title: 'Corporate Offices & Campuses',
      description: 'Professional cleaning services for modern office buildings, corporate headquarters, and business campuses',
      gradient: 'linear-gradient(135deg, #28a745, #20c997)',
      delay: '0.1s'
    },
    {
      title: 'Industrial Plants & Large Facilities',
      description: 'Specialized cleaning solutions for manufacturing plants, warehouses, and large-scale industrial facilities',
      gradient: 'linear-gradient(135deg, #28a745, #20c997)',
      delay: '0.2s'
    },
    {
      title: 'Government Departments',
      description: 'Trusted cleaning services for municipalities, urban local bodies, and government offices',
      gradient: 'linear-gradient(135deg, #28a745, #20c997)',
      delay: '0.3s'
    },
    {
      title: 'Public Infrastructure',
      description: 'Comprehensive cleaning and maintenance for railways, airports, metro stations, and transportation hubs',
      gradient: 'linear-gradient(135deg, #28a745, #20c997)',
      delay: '0.4s'
    },
    {
      title: 'Hospitals & Educational Institutions',
      description: 'Healthcare-grade cleaning services for hospitals, schools, colleges, and universities',
      gradient: 'linear-gradient(135deg, #28a745, #20c997)',
      delay: '0.5s'
    },
    {
      title: 'Commercial Complexes',
      description: 'Complete facility management and cleaning solutions for shopping malls, retail centers, and developments',
      gradient: 'linear-gradient(135deg, #28a745, #20c997)',
      delay: '0.6s'
    }
  ];

  const sectionStyle = {
    padding: isSmallMobile ? '30px 0 40px' : isMobile ? '40px 0 50px' : isTablet ? '60px 0 70px' : '80px 0 100px',
    background: '#f8f9fa',
    position: 'relative',
    overflow: 'hidden',
    minHeight: 'auto'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: isSmallMobile ? '0 12px' : isMobile ? '0 16px' : '0 20px',
    position: 'relative',
    zIndex: 2
  };

  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0',
    alignItems: isMobile ? 'flex-start' : 'flex-start',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '30px' : '0'
  };

  const leftColStyle = {
    flex: isMobile ? '1 1 100%' : '0 0 40%',
    maxWidth: isMobile ? '100%' : '40%',
    padding: isMobile ? '0' : '0 30px 0 0',
    textAlign: isMobile ? 'center' : 'left',
    transform: isVisible ? 'translateX(0)' : `translateX(${isMobile ? '0' : '-50px'})`,
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const rightColStyle = {
    flex: isMobile ? '1 1 100%' : '0 0 60%',
    maxWidth: isMobile ? '100%' : '60%',
    padding: '0',
    transform: isVisible ? 'translateX(0)' : `translateX(${isMobile ? '0' : '50px'})`,
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
  };

  const titleStyle = {
    fontSize: isSmallMobile ? '28px' : isMobile ? '36px' : isTablet ? '42px' : '48px',
    fontWeight: '800',
    color: '#333',
    lineHeight: '1.2',
    marginBottom: isMobile ? '16px' : '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.05)',
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
  };

  const descriptionStyle = {
    fontSize: isSmallMobile ? '15px' : isMobile ? '16px' : '18px',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: isMobile ? '0' : '30px',
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
    maxWidth: isMobile ? '100%' : '90%'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
    gap: isSmallMobile ? '16px' : isMobile ? '20px' : '24px',
    width: '100%'
  };

  return (
    <section style={sectionStyle}>
      {/* Animated Background Particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none'
      }}>
        {[...Array(isSmallMobile ? 4 : isMobile ? 6 : 12)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: isMobile ? '2px' : '3px',
              height: isMobile ? '2px' : '3px',
              background: 'rgba(40, 167, 69, 0.2)',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Background overlay with moving gradients */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(40, 167, 69, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(32, 201, 151, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(40, 167, 69, 0.03) 0%, transparent 50%)
        `,
        pointerEvents: 'none',
        animation: 'gradientShift 8s ease-in-out infinite'
      }}></div>

      <div style={containerStyle}>
        <div style={rowStyle}>
          {/* Left Content */}
          <div style={leftColStyle}>
            <div>
              <div style={{ marginBottom: isMobile ? '0' : '40px' }}>
                <span style={{
                  display: 'inline-block',
                  background: 'linear-gradient(90deg, #28a745, #20c997)',
                  color: 'white',
                  padding: isSmallMobile ? '8px 16px' : isMobile ? '10px 20px' : '12px 24px',
                  borderRadius: '25px',
                  fontSize: isSmallMobile ? '12px' : isMobile ? '13px' : '14px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: isMobile ? '20px' : '24px',
                  animation: 'pulse 2s infinite, shimmer 3s ease-in-out infinite',
                  transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                }}>
                  DISCOVER OUR SERVICES
                </span>
                <h2 style={titleStyle}>
                  Who we <span style={{
                    color: '#28a745',
                    display: 'inline-block',
                    textShadow: '0 0 15px rgba(255, 255, 255, 0.8), 0 0 25px rgba(255, 255, 255, 0.6), 0 0 35px rgba(255, 255, 255, 0.4)',
                    animation: 'whiteGlow 2s ease-in-out infinite alternate'
                  }}>Serve</span>?
                </h2>
                <p style={descriptionStyle}>
                  Transform your facilities with our comprehensive cleaning and facility management services designed for maximum efficiency and unparalleled performance across diverse sectors.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Service Cards Grid */}
          <div style={rightColStyle}>
            <div style={gridStyle}>
              {serviceCards.map((card, index) => (
                <div
                  key={index}
                  onMouseEnter={() => !isMobile && setHoveredCard(index)}
                  onMouseLeave={() => !isMobile && setHoveredCard(null)}
                  onTouchStart={() => isMobile && setHoveredCard(index)}
                  onTouchEnd={() => isMobile && setTimeout(() => setHoveredCard(null), 1500)}
                  style={{
                    background: hoveredCard === index
                      ? 'linear-gradient(135deg, #2eb84e, #22d4a3)'
                      : card.gradient,
                    color: 'white',
                    padding: isSmallMobile ? '20px 16px' : isMobile ? '24px 20px' : '30px 28px',
                    borderRadius: isSmallMobile ? '16px' : isMobile ? '18px' : '20px',
                    boxShadow: hoveredCard === index
                      ? isSmallMobile
                        ? '0 12px 30px rgba(40, 167, 69, 0.4), 0 4px 12px rgba(40, 167, 69, 0.2)'
                        : isMobile
                          ? '0 16px 35px rgba(40, 167, 69, 0.4), 0 6px 15px rgba(40, 167, 69, 0.25)'
                          : '0 25px 60px rgba(40, 167, 69, 0.5), 0 8px 25px rgba(40, 167, 69, 0.3)'
                      : isSmallMobile
                        ? '0 6px 20px rgba(40, 167, 69, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)'
                        : isMobile
                          ? '0 8px 25px rgba(40, 167, 69, 0.25), 0 3px 12px rgba(0, 0, 0, 0.1)'
                          : '0 15px 40px rgba(40, 167, 69, 0.3), 0 6px 20px rgba(0, 0, 0, 0.15)',
                    border: '2px solid rgba(255, 255, 255, 0.25)',
                    animation: `slideInUp 0.6s ease-out both ${card.delay}`,
                    transform: hoveredCard === index
                      ? isMobile
                        ? 'translateY(-4px) scale(1.02)'
                        : 'translateY(-8px) scale(1.03)'
                      : 'translateY(0) scale(1)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)',
                    minHeight: isSmallMobile ? '140px' : isMobile ? '150px' : 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  {/* Enhanced glow effect for better visibility */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    right: '-50%',
                    bottom: '-50%',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                    animation: 'rotate 4s linear infinite',
                    pointerEvents: 'none'
                  }}></div>

                  {/* Hover shine effect */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                    transform: hoveredCard === index ? 'translateX(100%)' : 'translateX(-100%)',
                    transition: 'transform 0.6s ease-in-out',
                    pointerEvents: 'none'
                  }}></div>

                  <h3 style={{
                    fontSize: isSmallMobile ? '16px' : isMobile ? '17px' : '18px',
                    fontWeight: '700',
                    lineHeight: '1.3',
                    margin: `0 0 ${isMobile ? '12px' : '14px'} 0`,
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {card.title}
                  </h3>
                  <p style={{
                    fontSize: isSmallMobile ? '13px' : isMobile ? '14px' : '15px',
                    fontWeight: '500',
                    lineHeight: '1.5',
                    margin: '0',
                    color: 'rgba(255, 255, 255, 0.95)',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: isSmallMobile ? '40px' : isMobile ? '50px' : '60px',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: isMobile ? '0' : '20px',
            background: 'white',
            borderRadius: isMobile ? '20px' : '50px',
            padding: isSmallMobile ? '16px' : isMobile ? '20px' : '8px',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(40, 167, 69, 0.1)',
            flexDirection: isMobile ? 'column' : 'row',
            maxWidth: isMobile ? '95%' : 'none',
            margin: '0 auto',
            width: isMobile ? '100%' : 'auto'
          }}>
            <span style={{
              color: '#666',
              fontWeight: '500',
              fontSize: isSmallMobile ? '14px' : isMobile ? '15px' : '16px',
              textAlign: 'center',
              padding: isMobile ? '0 16px 16px' : '0 20px',
              lineHeight: '1.4'
            }}>
              Ready to experience professional cleaning services?
            </span>
            <button style={{
              background: 'linear-gradient(135deg, #28a745, #20c997)',
              color: 'white',
              padding: isSmallMobile ? '14px 28px' : isMobile ? '16px 32px' : '14px 30px',
              borderRadius: isMobile ? '16px' : '50px',
              border: 'none',
              fontWeight: '600',
              fontSize: isSmallMobile ? '15px' : isMobile ? '16px' : '15px',
              cursor: 'pointer',
              transform: 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 8px 20px rgba(40, 167, 69, 0.3)',
              minHeight: '48px',
              minWidth: isMobile ? '200px' : '160px',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? '280px' : 'none'
            }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 12px 30px rgba(40, 167, 69, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 8px 20px rgba(40, 167, 69, 0.3)';
                }
              }}
              onTouchStart={(e) => {
                e.target.style.transform = 'scale(0.98)';
              }}
              onTouchEnd={(e) => {
                e.target.style.transform = 'scale(1)';
              }}>
              Get A Free Quote
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(40, 167, 69, 0); }
          100% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes whiteGlow {
          0% { 
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.8), 0 0 25px rgba(255, 255, 255, 0.6), 0 0 35px rgba(255, 255, 255, 0.4);
          }
          100% { 
            text-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.8), 0 0 45px rgba(255, 255, 255, 0.6);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-15px) rotate(180deg); 
            opacity: 0.6;
          }
        }
        
        @keyframes gradientShift {
          0%, 100% { 
            filter: hue-rotate(0deg) brightness(1); 
          }
          50% { 
            filter: hue-rotate(10deg) brightness(1.1); 
          }
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }
          
          body {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
        }

        /* Improved mobile touch targets */
        @media (hover: none) and (pointer: coarse) {
          button {
            min-height: 48px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoWeServe;