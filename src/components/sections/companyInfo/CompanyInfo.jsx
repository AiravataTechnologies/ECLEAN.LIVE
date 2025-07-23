const button_info = [
  {
    icon: "flaticon-management",
    text: "Sign up for a 14-day free trial",
    action: "signup"
  },
  {
    icon: "flaticon-completed-task", 
    text: "Download Brochure",
    action: "download"
  },
  {
    icon: "flaticon-handshake",
    text: "Watch Demo",
    action: "demo"
  },
];

export default function CompanyInfo() {
  const handleButtonClick = (action) => {
    switch(action) {
      case 'signup':
        console.log('Sign up clicked');
        // Add your signup logic here
        break;
      case 'download':
        console.log('Download brochure clicked');
        // Add your download logic here
        break;
      case 'demo':
        console.log('Watch demo clicked');
        // Add your demo logic here
        break;
      default:
        break;
    }
  };

  return (
    <section className="company-qinfo-sec">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="company-qinfo-raaper bg-green d-lg-flex">
              {/* button info part start */}
              {button_info.map((item, i) => (
                <div
                  key={i}
                  className="single-info flex-lg-fill d-flex align-items-center justify-content-center"
                >
                  <div className="info-icon">
                    <i className={item.icon} style={{ color: 'white' }} />
                  </div>
                  <div className="info">
                    <button 
                      onClick={() => handleButtonClick(item.action)}
                      className="btn btn-custom"
                      style={{
                        backgroundColor: 'white',
                        border: '2px solid white',
                        color: '#333',
                        padding: '18px 30px',
                        fontSize: '20px',
                        fontWeight: '600',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        transform: 'scale(1)',
                        boxShadow: '0 4px 15px rgba(255, 255, 255, 0.1)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.6)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.1)';
                      }}
                    >
                      {item.text}
                    </button>
                  </div>
                </div>
              ))}
              {/* button info part end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}