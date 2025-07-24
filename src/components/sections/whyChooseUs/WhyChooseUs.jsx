import React, { useState, useEffect } from 'react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const features = [
    {
      title: 'Reduces operational inefficiencies by up to 40%',
      gradient: 'linear-gradient(135deg, #28a745, #20c997)',
      delay: '0.1s'
    },
    {
      title: 'Real-time visibility into staff, status, and service performance',
      gradient: 'linear-gradient(135deg, #28a745, #20c997)',
      delay: '0.2s'
    },
    {
      title: 'No paperwork: 100% digitized workflows',
      gradient: 'linear-gradient(135deg, #28a745, #20c997)',
      delay: '0.3s'
    },
    {
      title: 'Helps ensure compliance, hygiene audits, and timely maintenance',
      gradient: 'linear-gradient(135deg, #28a745, #20c997)',
      delay: '0.4s'
    },
    {
      title: 'Citizen & customer feedback through simple QR scans',
      gradient: 'linear-gradient(135deg, #28a745, #20c997)',
      delay: '0.5s'
    },
    {
      title: 'AI-backed dashboards for faster, data-driven decisions',
      gradient: 'linear-gradient(135deg, #28a745, #20c997)',
      delay: '0.6s'
    }
  ];

  const sectionStyle = {
    padding: isMobile ? '60px 0' : '100px 0',
    background: '#f8f9fa',
    position: 'relative',
    overflow: 'hidden'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: isMobile ? '0 20px' : '0 15px',
    position: 'relative',
    zIndex: 2
  };

  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -15px',
    alignItems: isMobile ? 'flex-start' : 'center',
    flexDirection: isMobile ? 'column' : 'row'
  };

  const leftColStyle = {
    flex: isMobile ? '1 1 100%' : '0 0 41.666667%',
    maxWidth: isMobile ? '100%' : '41.666667%',
    padding: isMobile ? '0' : '0 15px',
    paddingRight: isMobile ? '0' : '40px',
    marginBottom: isMobile ? '40px' : '0',
    textAlign: isMobile ? 'center' : 'left',
    transform: isVisible ? 'translateX(0)' : `translateX(${isMobile ? '0' : '-50px'})`,
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const rightColStyle = {
    flex: isMobile ? '1 1 100%' : '0 0 58.333333%',
    maxWidth: isMobile ? '100%' : '58.333333%',
    padding: isMobile ? '0' : '0 15px',
    transform: isVisible ? 'translateX(0)' : `translateX(${isMobile ? '0' : '50px'})`,
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
  };

  const titleStyle = {
    fontSize: isMobile ? (window.innerWidth <= 480 ? '28px' : '36px') : '52px',
    fontWeight: '800',
    color: '#333',
    lineHeight: '1.2',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.05)',
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
  };

  const descriptionStyle = {
    fontSize: isMobile ? '16px' : '18px',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '30px',
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
    gap: isMobile ? '20px' : '30px',
    paddingLeft: isMobile ? '0' : '30px'
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
        {[...Array(isMobile ? 8 : 15)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '3px',
              height: '3px',
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
              <div style={{ marginBottom: '40px' }}>
                <span style={{
                  display: 'inline-block',
                  background: 'linear-gradient(90deg, #28a745, #20c997)',
                  color: 'white',
                  padding: isMobile ? '6px 16px' : '8px 20px',
                  borderRadius: '25px',
                  fontSize: isMobile ? '12px' : '14px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '20px',
                  animation: 'pulse 2s infinite, shimmer 3s ease-in-out infinite',
                  transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                }}>
                  Discover Excellence
                </span>
                <h2 style={titleStyle}>
                  Why <span style={{
                    display: 'inline-block',
                    textShadow: '0 0 15px rgba(255, 255, 255, 0.8), 0 0 25px rgba(255, 255, 255, 0.6), 0 0 35px rgba(255, 255, 255, 0.4)',
                    animation: 'whiteGlow 2s ease-in-out infinite alternate'
                  }}>
                    <span style={{ color: '#ff8c42' }}>e</span><span style={{ color: '#28a745' }}>Clean</span>
                  </span> Live?
                </h2>
                <p style={descriptionStyle}>
                  Transform your operations with our cutting-edge digital solutions designed for maximum efficiency and unparalleled performance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div style={rightColStyle}>
            <div style={gridStyle}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  onMouseEnter={() => !isMobile && setHoveredCard(index)}
                  onMouseLeave={() => !isMobile && setHoveredCard(null)}
                  style={{
                    background: hoveredCard === index && !isMobile
                      ? 'linear-gradient(135deg, #2eb84e, #22d4a3)'
                      : feature.gradient,
                    color: 'white',
                    padding: isMobile ? '25px 20px' : '35px 30px',
                    borderRadius: isMobile ? '18px' : '22px',
                    boxShadow: hoveredCard === index && !isMobile
                      ? '0 30px 70px rgba(40, 167, 69, 0.5), 0 10px 30px rgba(40, 167, 69, 0.3)'
                      : isMobile
                        ? '0 12px 35px rgba(40, 167, 69, 0.25), 0 5px 15px rgba(0, 0, 0, 0.1)'
                        : '0 20px 50px rgba(40, 167, 69, 0.3), 0 8px 25px rgba(0, 0, 0, 0.15)',
                    border: '2px solid rgba(255, 255, 255, 0.25)',
                    animation: `slideInUp 0.6s ease-out both ${feature.delay}`,
                    transform: hoveredCard === index && !isMobile
                      ? 'translateY(-15px) scale(1.05)'
                      : 'translateY(0) scale(1)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: isMobile ? 'default' : 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)'
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
                  {!isMobile && (
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
                  )}

                  <p style={{
                    fontSize: isMobile ? '15px' : '17px',
                    fontWeight: '500',
                    lineHeight: '1.5',
                    margin: '0',
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
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
            transform: translateY(60px) scale(0.9);
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
            transform: translateY(-20px) rotate(180deg); 
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
      `}</style>
    </section>
  );
};

export default WhyChooseUs;