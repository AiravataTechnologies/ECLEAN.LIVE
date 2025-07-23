import React, { useState, useEffect } from 'react';

const features = [
  "Smart Analytics & Reporting Dashboard",
  "Automated Lead Generation & CRM",
  "Digital Service Audit Management", 
  "Intelligent Job Creation & Scheduling",
  "Real-time Client Feedback & Invoicing",
  "AI-Powered Role Assignment System",
  "Advanced Task Execution Tracking",
  "Smart Attendance & Performance Monitoring"
];

export default function AICleaningPlatform() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{
      padding: '100px 0',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
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
              background: 'rgba(59, 130, 246, 0.2)',
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
          radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)
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
          {/* Left Content - Mobile Mockups */}
          <div style={{
            flex: '0 0 41.666667%',
            maxWidth: '41.666667%',
            padding: '0 15px',
            paddingRight: '20px', // Reduced from 40px to 20px
            transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-start' }}> {/* Changed to flex-start */}
              {/* Main Phone */}
              <div style={{
                background: '#000',
                borderRadius: '3rem',
                padding: '16px',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
                transform: 'rotate(-2deg)',
                transition: 'transform 0.5s ease',
                position: 'relative',
                zIndex: 20,
                marginLeft: '20px' // Added margin to shift left
              }}
              onMouseEnter={(e) => e.target.style.transform = 'rotate(0deg)'}
              onMouseLeave={(e) => e.target.style.transform = 'rotate(-2deg)'}
              >
                <div style={{
                  background: 'white',
                  borderRadius: '2.5rem',
                  overflow: 'hidden',
                  width: '280px',
                  height: '560px'
                }}>
                  {/* Phone Header */}
                  <div style={{
                    background: '#22c55e',
                    color: 'white',
                    padding: '12px 16px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0 }}>Contract Details</h3>
                  </div>
                  
                  <div style={{ padding: '16px', fontSize: '14px' }}>
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ marginBottom: '8px' }}>
                        <span style={{ fontWeight: '600', color: '#1f2937' }}>Contract Name:</span>
                      </div>
                      <div style={{ color: '#6b7280', marginBottom: '8px' }}>Hygiene & Cleaning Solutions</div>
                      <div>
                        <span style={{ fontWeight: '600', color: '#1f2937' }}>Status:</span>{' '}
                        <span style={{ color: '#22c55e', fontWeight: '500' }}>Active</span>
                      </div>
                    </div>
                    
                    <div style={{
                      background: '#fed7aa',
                      padding: '12px',
                      borderRadius: '8px',
                      marginBottom: '16px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          background: '#f97316',
                          borderRadius: '50%',
                          color: 'white',
                          fontSize: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold'
                        }}>AI</div>
                        <div>
                          <div style={{ fontWeight: '600', color: '#1f2937' }}>AI Plus Cleaning</div>
                          <div style={{ fontSize: '12px', color: '#6b7280' }}>Smart Hygiene Solutions</div>
                        </div>
                      </div>
                    </div>
                    
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>Service Tasks:</div>
                      <ul style={{ fontSize: '12px', color: '#6b7280', paddingLeft: '8px', margin: 0 }}>
                        <li>• Deep Cleaning & Sanitization</li>
                        <li>• Floor Maintenance & Polishing</li>
                        <li>• Washroom Hygiene Management</li>
                        <li>• Waste Management Systems</li>
                      </ul>
                    </div>
                    
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                      fontSize: '12px',
                      marginBottom: '16px'
                    }}>
                      <div>
                        <span style={{ fontWeight: '600', color: '#1f2937' }}>Start Date:</span><br/>
                        <span style={{ color: '#6b7280' }}>15-Jan-2024</span>
                      </div>
                      <div>
                        <span style={{ fontWeight: '600', color: '#1f2937' }}>End Date:</span><br/>
                        <span style={{ color: '#6b7280' }}>31-Dec-2024</span>
                      </div>
                    </div>
                    
                    <div style={{
                      background: '#22c55e',
                      color: 'white',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      textAlign: 'center',
                      fontWeight: '600',
                      fontSize: '14px',
                      marginBottom: '16px'
                    }}>
                      Active Contract
                    </div>
                    
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                      textAlign: 'center',
                      marginBottom: '16px'
                    }}>
                      <div style={{ background: '#dcfce7', padding: '8px', borderRadius: '6px' }}>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#22c55e' }}>8</div>
                        <div style={{ fontSize: '12px', color: '#6b7280' }}>Assigned</div>
                      </div>
                      <div style={{ background: '#fed7aa', padding: '8px', borderRadius: '6px' }}>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#f97316' }}>2</div>
                        <div style={{ fontSize: '12px', color: '#6b7280' }}>Pending</div>
                      </div>
                    </div>
                    
                    <div style={{
                      background: 'linear-gradient(90deg, #dcfce7, #dbeafe)',
                      padding: '8px 12px',
                      borderRadius: '8px'
                    }}>
                      <div style={{ fontWeight: '600', fontSize: '14px', color: '#1f2937' }}>AI Status Monitor</div>
                      <div style={{ fontSize: '12px', color: '#6b7280' }}>Real-time tracking active</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Second Phone - Adjusted positioning */}
              <div style={{
                position: 'absolute',
                top: '80px',
                right: '0', // Changed from -64px to 0
                background: '#000',
                borderRadius: '2.5rem',
                padding: '12px',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
                transform: 'rotate(5deg)',
                transition: 'transform 0.5s ease',
                zIndex: 10
              }}
              onMouseEnter={(e) => e.target.style.transform = 'rotate(2deg)'}
              onMouseLeave={(e) => e.target.style.transform = 'rotate(5deg)'}
              >
                <div style={{
                  background: 'white',
                  borderRadius: '2rem',
                  overflow: 'hidden',
                  width: '200px',
                  height: '350px'
                }}>
                  <div style={{
                    background: '#22c55e',
                    color: 'white',
                    padding: '8px 12px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ fontWeight: 'bold', fontSize: '12px', margin: 0 }}>AI Team Hub</h3>
                  </div>
                  
                  <div style={{ padding: '12px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px',
                      background: '#dbeafe',
                      borderRadius: '8px',
                      marginBottom: '12px'
                    }}>
                      <div style={{
                        width: '24px',
                        height: '24px',
                        background: '#3b82f6',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>TL</span>
                      </div>
                      <div style={{ fontSize: '12px' }}>
                        <div style={{ fontWeight: '600', color: '#1f2937' }}>TEAM LEADER</div>
                        <div style={{ color: '#22c55e', fontWeight: '500' }}>Online</div>
                      </div>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px',
                      background: '#dcfce7',
                      borderRadius: '8px',
                      marginBottom: '12px'
                    }}>
                      <div style={{
                        width: '24px',
                        height: '24px',
                        background: '#22c55e',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>CS</span>
                      </div>
                      <div style={{ fontSize: '12px' }}>
                        <div style={{ fontWeight: '600', color: '#1f2937' }}>CLEANING STAFF</div>
                        <div style={{ color: '#22c55e', fontWeight: '500' }}>Active</div>
                      </div>
                    </div>
                    
                    <div style={{
                      background: 'linear-gradient(90deg, #dbeafe, #dcfce7)',
                      padding: '12px',
                      borderRadius: '8px',
                      marginBottom: '12px'
                    }}>
                      <div style={{ fontSize: '12px', fontWeight: '600', color: '#1f2937' }}>Today's Progress</div>
                      <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#22c55e' }}>12/15</div>
                      <div style={{ fontSize: '12px', color: '#6b7280' }}>Tasks Completed</div>
                    </div>
                    
                    <div style={{ background: '#f9fafb', padding: '8px', borderRadius: '6px', fontSize: '12px' }}>
                      <div style={{ fontWeight: '500', color: '#1f2937' }}>Current Task</div>
                      <div style={{ color: '#6b7280' }}>Floor Sanitization - B2</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div style={{
            flex: '0 0 58.333333%',
            maxWidth: '58.333333%',
            padding: '0 15px',
            paddingLeft: '30px',
            transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
            <div style={{ marginBottom: '40px' }}>
              <span style={{
                display: 'inline-block',
                background: 'linear-gradient(90deg, #3b82f6, #22c55e)',
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
                AI-Powered Solution
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
                Smart <span style={{
                  background: 'linear-gradient(45deg, #3b82f6, #22c55e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'textGlow 2s ease-in-out infinite alternate'
                }}>Hygiene</span> & 
                <br/>
                <span style={{ color: '#22c55e' }}>Cleaning</span> Automation
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
                Revolutionary AI-based SaaS platform designed specifically for the hygiene and cleaning industry. 
                Streamline operations, enhance productivity, and deliver exceptional service quality.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}>
              {features.map((feature, index) => (
                <div 
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    background: 'white',
                    padding: '20px',
                    borderRadius: '16px',
                    boxShadow: hoveredCard === index 
                      ? '0 25px 60px rgba(59, 130, 246, 0.2)' 
                      : '0 8px 30px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(229, 231, 235, 0.8)',
                    transform: hoveredCard === index 
                      ? 'translateY(-8px) scale(1.02)' 
                      : 'translateY(0) scale(1)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    animation: `slideInUp 0.6s ease-out both ${0.1 + index * 0.1}s`
                  }}
                >
                  {/* Hover shine effect */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                    transform: hoveredCard === index ? 'translateX(100%)' : 'translateX(-100%)',
                    transition: 'transform 0.6s ease-in-out',
                    pointerEvents: 'none'
                  }}></div>
                  
                  <div style={{
                    width: '24px',
                    height: '24px',
                    background: hoveredCard === index ? '#22c55e' : '#3b82f6',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                    transition: 'background-color 0.3s ease'
                  }}>
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: '12px' }}>✓</span>
                  </div>
                  <span style={{
                    color: '#374151',
                    fontWeight: '500',
                    fontSize: '15px',
                    lineHeight: '1.5',
                    position: 'relative',
                    zIndex: 1
                  }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes textGlow {
          0% { text-shadow: 0 0 3px rgba(59, 130, 246, 0.3); }
          100% { text-shadow: 0 0 8px rgba(59, 130, 246, 0.5), 0 0 12px rgba(34, 197, 94, 0.3); }
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
}