import React, { useState, useEffect } from 'react';

const WhoWeServe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const serviceCards = [
    {
      title: "Corporate Offices & Campuses",
      description: "Professional cleaning services for modern office buildings, corporate headquarters, and business campuses",
      gradient: 'linear-gradient(135deg, #28a745, #20c997)',
      delay: '0.1s'
    },
    {
      title: "Industrial Plants & Large Facilities",
      description: "Specialized cleaning solutions for manufacturing plants, warehouses, and large-scale industrial facilities",
      gradient: 'linear-gradient(135deg, #28a745, #20c997)',
      delay: '0.2s'
    },
    {
      title: "Government Departments",
      description: "Trusted cleaning services for municipalities, urban local bodies, and government offices",
      gradient: 'linear-gradient(135deg, #28a745, #20c997)',
      delay: '0.3s'
    },
    {
      title: "Public Infrastructure",
      description: "Comprehensive cleaning and maintenance for railways, airports, metro stations, and transportation hubs",
      gradient: 'linear-gradient(135deg, #28a745, #20c997)',
      delay: '0.4s'
    },
    {
      title: "Hospitals & Educational Institutions",
      description: "Healthcare-grade cleaning services for hospitals, schools, colleges, and universities",
      gradient: 'linear-gradient(135deg, #28a745, #20c997)',
      delay: '0.5s'
    },
    {
      title: "Commercial Complexes",
      description: "Complete facility management and cleaning solutions for shopping malls, retail centers, and developments",
      gradient: 'linear-gradient(135deg, #28a745, #20c997)',
      delay: '0.6s'
    }
  ];

  return (
    <section className="responsive-section" style={{
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
        {/* Centered Badge */}
        <div style={{
          textAlign: 'center',
          marginBottom: '50px',
          transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
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
            animation: 'pulse 2s infinite, shimmer 3s ease-in-out infinite',
            transform: isVisible ? 'scale(1)' : 'scale(0.8)',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
            DISCOVER OUR SERVICES
          </span>
        </div>

        <div className="responsive-layout" style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '0 -15px',
          alignItems: 'flex-start'
        }}>
          {/* Left Content - Title, Description, and Service Cards */}
          <div className="responsive-col responsive-content" style={{
            flex: '0 0 50%',
            maxWidth: '50%',
            padding: '0 15px',
            paddingRight: '30px'
          }}>
            {/* Title and Description */}
            <div style={{
              marginBottom: '40px',
              transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}>
              <h2 className="responsive-title" style={{
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
                Who we <span style={{
                  color: '#28a745',
                  textShadow: '0 0 15px rgba(255, 255, 255, 0.8), 0 0 25px rgba(255, 255, 255, 0.6), 0 0 35px rgba(255, 255, 255, 0.4)',
                  animation: 'whiteGlow 2s ease-in-out infinite alternate'
                }}>Serve</span>?
              </h2>
              <p className="responsive-description" style={{
                fontSize: '18px',
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '0',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
              }}>
                Transform your facilities with our comprehensive cleaning and facility management services designed for maximum efficiency and unparalleled performance across diverse sectors.
              </p>
            </div>

            {/* Service Cards Grid */}
            <div style={{
              transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
            }}>
              <div className="responsive-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '25px'
              }}>
                {serviceCards.map((card, index) => (
                  <div
                    key={index}
                    className="responsive-card"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      background: hoveredCard === index
                        ? 'linear-gradient(135deg, #2eb84e, #22d4a3)'
                        : card.gradient,
                      color: 'white',
                      padding: '25px 20px',
                      borderRadius: '18px',
                      boxShadow: hoveredCard === index
                        ? '0 30px 70px rgba(40, 167, 69, 0.5), 0 10px 30px rgba(40, 167, 69, 0.3)'
                        : '0 20px 50px rgba(40, 167, 69, 0.3), 0 8px 25px rgba(0, 0, 0, 0.15)',
                      border: '2px solid rgba(255, 255, 255, 0.25)',
                      animation: `slideInUp 0.6s ease-out both ${card.delay}`,
                      transform: hoveredCard === index
                        ? 'translateY(-15px) scale(1.05)'
                        : 'translateY(0) scale(1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
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

                    <h3 className="responsive-card-title" style={{
                      fontSize: '17px',
                      fontWeight: '700',
                      lineHeight: '1.3',
                      margin: '0 0 12px 0',
                      color: 'white',
                      textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5), 1px 1px 3px rgba(0, 0, 0, 0.8)',
                      position: 'relative',
                      zIndex: 1,
                      filter: 'brightness(1.1) contrast(1.1)'
                    }}>
                      {card.title}
                    </h3>
                    <p className="responsive-card-description" style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      lineHeight: '1.5',
                      margin: '0',
                      color: 'white',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.7)',
                      position: 'relative',
                      zIndex: 1,
                      filter: 'brightness(1.05) contrast(1.05)'
                    }}>
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Larger Image without container */}
          <div className="responsive-col responsive-image" style={{
            flex: '0 0 50%',
            maxWidth: '50%',
            padding: '0 15px',
            transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            {/* Large Image without container */}
            <img
              src="/images/brand/brandnew.png"
              alt="Who we serve - eClean.Live services"
              className="responsive-main-image"
              style={{
                width: '120%',
                height: 'auto',
                minHeight: '750px',
                objectFit: 'contain',
                filter: 'brightness(1.1) contrast(1.05)',
                transform: 'translateX(10%)'
              }}
            />
          </div>
        </div>

        {/* Call to Action - Moved to bottom with compact design */}
        <div className="responsive-cta" style={{
          textAlign: 'center',
          marginTop: '60px',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s'
        }}>
          <div className="responsive-cta-container" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '20px',
            background: 'white',
            borderRadius: '50px',
            padding: '8px',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(40, 167, 69, 0.1)'
          }}>
            <span className="responsive-cta-text" style={{
              color: '#666',
              fontWeight: '500',
              fontSize: '15px',
              paddingLeft: '20px'
            }}>
              Ready to experience professional cleaning services?
            </span>
            <button className="responsive-cta-button" style={{
              background: 'linear-gradient(135deg, #28a745, #ff8c42)',
              color: 'white',
              padding: '12px 25px',
              borderRadius: '50px',
              border: 'none',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
              transform: 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 8px 20px rgba(40, 167, 69, 0.3)'
            }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 12px 30px rgba(40, 167, 69, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 8px 20px rgba(40, 167, 69, 0.3)';
              }}>
              Get A Free Quote
            </button>
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
        
        /* Tablet View */
        @media (max-width: 991px) {
          .responsive-layout {
            flex-direction: column;
          }
          
          .responsive-col {
            flex: 0 0 100% !important;
            max-width: 100% !important;
          }
          
          .responsive-content {
            padding-right: 15px !important;
            margin-bottom: 50px;
            text-align: center;
            order: 2;
          }
          
          .responsive-image {
            order: 1;
            justify-content: center !important;
            margin-bottom: 30px;
          }
          
          .responsive-main-image {
            width: 80% !important;
            min-height: 400px !important;
            transform: translateX(0%) !important;
          }
          
          .responsive-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 20px !important;
          }
          
          .responsive-title {
            font-size: 42px !important;
          }
          
          .responsive-description {
            font-size: 16px !important;
          }
        }
        
        /* Mobile View */
        @media (max-width: 768px) {
          .responsive-section {
            padding: 60px 0 !important;
          }
          
          .responsive-content {
            order: 1 !important;
            margin-bottom: 30px !important;
            text-align: left !important;
          }
          
          .responsive-image {
            order: 2 !important;
            margin-bottom: 30px !important;
          }
          
          .responsive-grid {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
          
          .responsive-title {
            font-size: 36px !important;
            margin-bottom: 15px !important;
            text-align: left !important;
          }
          
          .responsive-description {
            font-size: 15px !important;
            text-align: left !important;
          }
          
          .responsive-card {
            padding: 20px 15px !important;
          }
          
          .responsive-card-title {
            font-size: 16px !important;
          }
          
          .responsive-card-description {
            font-size: 13px !important;
          }
          
          .responsive-main-image {
            width: 100% !important;
            min-height: 300px !important;
          }
          
          .responsive-cta {
            margin-top: 40px !important;
          }
          
          .responsive-cta-container {
            flex-direction: column !important;
            gap: 15px !important;
            padding: 20px !important;
            border-radius: 20px !important;
          }
          
          .responsive-cta-text {
            padding-left: 0 !important;
            text-align: center;
            font-size: 14px !important;
          }
          
          .responsive-cta-button {
            padding: 15px 30px !important;
            border-radius: 25px !important;
            font-size: 16px !important;
          }
        }
        
        /* Small Mobile View */
        @media (max-width: 576px) {
          .responsive-section {
            padding: 50px 0 !important;
          }
          
          .responsive-title {
            font-size: 28px !important;
            text-align: left !important;
          }
          
          .responsive-description {
            font-size: 14px !important;
            text-align: left !important;
          }
          
          .responsive-card {
            padding: 18px 12px !important;
          }
          
          .responsive-card-title {
            font-size: 15px !important;
          }
          
          .responsive-card-description {
            font-size: 12px !important;
          }
          
          .responsive-main-image {
            min-height: 250px !important;
          }
          
          .responsive-cta-text {
            font-size: 13px !important;
          }
          
          .responsive-cta-button {
            padding: 12px 25px !important;
            font-size: 14px !important;
          }
        }
        
        /* Extra Small Mobile View */
        @media (max-width: 480px) {
          .responsive-title {
            font-size: 24px !important;
            text-align: left !important;
          }
          
          .responsive-description {
            text-align: left !important;
          }
          
          .responsive-card {
            padding: 15px 10px !important;
          }
          
          .responsive-main-image {
            min-height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoWeServe;