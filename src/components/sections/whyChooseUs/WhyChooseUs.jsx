import React, { useState, useEffect } from 'react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
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

  return (
    <section style={{
      padding: '100px 0',
      background: '#f8f9fa',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none'
      }}>
        {[...Array(15)].map((_, i) => (
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
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 15px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '0 -15px',
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <div style={{
            flex: '0 0 41.666667%',
            maxWidth: '41.666667%',
            padding: '0 15px',
            paddingRight: '40px',
            transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div>
              <div style={{ marginBottom: '40px' }}>
                <span style={{
                  display: 'inline-block',
                  background: 'linear-gradient(90deg, #28a745, #20c997)',
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: '25px',
                  fontSize: '14px',
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
                <h2 style={{
                  fontSize: '52px',
                  fontWeight: '800',
                  color: '#333',
                  lineHeight: '1.2',
                  marginBottom: '20px',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.05)',
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                }}>
                  Why <span style={{ color: '#ff8c42' }}>e</span><span style={{
                    background: 'linear-gradient(45deg, #28a745, #20c997)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'textGlow 2s ease-in-out infinite alternate'
                  }}>Clean</span> Live?
                </h2>
                <p style={{
                  fontSize: '18px',
                  color: '#666',
                  lineHeight: '1.6',
                  marginBottom: '30px',
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
                }}>
                  Transform your operations with our cutting-edge digital solutions designed for maximum efficiency and unparalleled performance.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Features Grid */}
          <div style={{
            flex: '0 0 58.333333%',
            maxWidth: '58.333333%',
            padding: '0 15px',
            transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              paddingLeft: '30px'
            }}>
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    background: feature.gradient,
                    color: 'white',
                    padding: '30px 25px',
                    borderRadius: '20px',
                    boxShadow: hoveredCard === index 
                      ? '0 25px 60px rgba(40, 167, 69, 0.4)' 
                      : '0 15px 40px rgba(0, 0, 0, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    animation: `slideInUp 0.6s ease-out both ${feature.delay}`,
                    transform: hoveredCard === index 
                      ? 'translateY(-10px) scale(1.02)' 
                      : 'translateY(0) scale(1)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Hover shine effect */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                    transform: hoveredCard === index ? 'translateX(100%)' : 'translateX(-100%)',
                    transition: 'transform 0.6s ease-in-out',
                    pointerEvents: 'none'
                  }}></div>
                  
                  <p style={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '1.5',
                    margin: '0',
                    color: 'white',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
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
      
      <style jsx>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(40, 167, 69, 0); }
          100% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes textGlow {
          0% { text-shadow: 0 0 3px rgba(40, 167, 69, 0.3); }
          100% { text-shadow: 0 0 8px rgba(40, 167, 69, 0.5), 0 0 12px rgba(32, 201, 151, 0.3); }
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
        
        @media (max-width: 991px) {
          .responsive-col {
            flex: 0 0 100% !important;
            max-width: 100% !important;
          }
          
          .responsive-content {
            padding-right: 0 !important;
            margin-bottom: 50px;
            text-align: center;
          }
          
          .responsive-grid {
            padding-left: 0 !important;
            grid-template-columns: 1fr !important;
          }
          
          .responsive-title {
            font-size: 42px !important;
          }
        }
        
        @media (max-width: 768px) {
          .responsive-section {
            padding: 80px 0 !important;
          }
          
          .responsive-grid {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }
          
          .responsive-title {
            font-size: 36px !important;
          }
          
          .responsive-card {
            padding: 25px 20px !important;
          }
          
          .responsive-text {
            font-size: 15px !important;
          }
        }
        
        @media (max-width: 576px) {
          .responsive-title {
            font-size: 32px !important;
          }
          
          .responsive-description {
            font-size: 16px !important;
          }
          
          .responsive-card {
            padding: 20px 15px !important;
          }
          
          .responsive-text {
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;