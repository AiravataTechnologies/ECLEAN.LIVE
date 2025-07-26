import { useState, useRef, useEffect } from 'react';

export default function GetAQuote() {
  const formRef = useRef();
  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    user_phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  // Generate random CAPTCHA
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // Validation functions
  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    if (!name.trim()) return 'Name is required';
    if (!nameRegex.test(name)) return 'Name must be 2-50 characters and contain only letters';
    return '';
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) return 'Email is required';
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validateSubject = (subject) => {
    if (!subject.trim()) return 'Subject is required';
    if (subject.length < 3 || subject.length > 100) return 'Subject must be 3-100 characters';
    return '';
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    if (!phone.trim()) return 'Phone number is required';
    if (!phoneRegex.test(phone)) return 'Phone number must be exactly 10 digits';
    return '';
  };

  const validateMessage = (message) => {
    if (!message.trim()) return 'Message is required';
    if (message.length < 10 || message.length > 1000) return 'Message must be 10-1000 characters';
    return '';
  };

  const validateForm = () => {
    const newErrors = {};
    newErrors.user_name = validateName(formData.user_name);
    newErrors.user_email = validateEmail(formData.user_email);
    newErrors.subject = validateSubject(formData.subject);
    newErrors.user_phone = validatePhone(formData.user_phone);
    newErrors.message = validateMessage(formData.message);

    // Remove empty error messages
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key]) delete newErrors[key];
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Handle phone number - only allow digits and limit to 10
    if (name === 'user_phone') {
      newValue = value.replace(/\D/g, '');
      if (newValue.length > 10) {
        newValue = newValue.slice(0, 10);
      }
    }
    // Handle name - only allow letters and spaces
    else if (name === 'user_name') {
      newValue = value.replace(/[^a-zA-Z\s]/g, '');
      if (newValue.length > 50) {
        newValue = newValue.slice(0, 50);
      }
    }
    // Handle subject - limit characters
    else if (name === 'subject') {
      if (value.length > 100) {
        newValue = value.slice(0, 100);
      }
    }
    // Handle message - limit characters
    else if (name === 'message') {
      if (value.length > 1000) {
        newValue = value.slice(0, 1000);
      }
    }

    // Update form data
    setFormData({
      ...formData,
      [name]: newValue
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // CAPTCHA Canvas Component
  const CaptchaCanvas = ({ text }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      // Clear canvas with white background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle noise lines in theme colors
      const colors = ['#2d7d32', '#ff9800', '#4caf50', '#ffb74d'];
      for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = colors[i % colors.length] + '40'; // Add transparency
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.stroke();
      }

      // Add noise dots in theme colors
      for (let i = 0; i < 15; i++) {
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)] + '60';
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1.5, 0, 2 * Math.PI);
        ctx.fill();
      }

      // Draw text with theme colors and slight rotation
      ctx.font = 'bold 26px Arial';
      ctx.textBaseline = 'middle';

      for (let i = 0; i < text.length; i++) {
        ctx.save();
        // Alternate between green and orange for text
        ctx.fillStyle = i % 2 === 0 ? '#2d7d32' : '#ff9800';
        ctx.translate(20 + i * 25, canvas.height / 2);
        ctx.rotate((Math.random() - 0.5) * 0.3);
        ctx.fillText(text[i], 0, 0);
        ctx.restore();
      }
    }, [text]);

    return (
      <canvas
        ref={canvasRef}
        width={180}
        height={60}
        className="captcha-canvas"
        style={{
          border: '2px solid #e8f5e8',
          borderRadius: '8px',
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '100%',
          height: 'auto'
        }}
      />
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form first
    if (!validateForm()) {
      setMessage('Please fix the errors below and try again.');
      return;
    }

    // Validate CAPTCHA
    if (captchaInput.toLowerCase() !== captcha.toLowerCase()) {
      setMessage('CAPTCHA verification failed. Please try again.');
      generateCaptcha();
      setCaptchaInput('');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    // Simulate email sending (replace with actual EmailJS implementation)
    setTimeout(() => {
      setMessage('Message sent successfully!');
      setFormData({
        user_name: '',
        user_email: '',
        subject: '',
        user_phone: '',
        message: ''
      });
      setCaptchaInput('');
      generateCaptcha();
      setIsSubmitting(false);
    }, 2000);
  };

  const inputStyle = (fieldName) => ({
    width: '100%',
    padding: '16px 20px',
    border: `2px solid ${errors[fieldName] ? '#f44336' : '#e8f5e8'}`,
    borderRadius: '8px',
    fontSize: '16px',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit'
  });

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#2d7d32',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const errorStyle = {
    color: '#f44336',
    fontSize: '12px',
    marginTop: '4px',
    fontWeight: '500'
  };

  const helperTextStyle = {
    color: '#666',
    fontSize: '11px',
    marginTop: '4px'
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '20px 16px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #2d7d32 0%, #4caf50 100%)',
          padding: '40px 20px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h1 style={{
            fontSize: 'clamp(24px, 5vw, 36px)',
            fontWeight: '700',
            margin: '0 0 8px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Get A Quote
          </h1>
          <p style={{
            fontSize: '16px',
            margin: '0',
            opacity: '0.9'
          }}>
            Fill out the form below and we'll get back to you soon
          </p>
        </div>

        {/* Form Container */}
        <div style={{ padding: '40px 20px' }}>
          <div>
            {/* Personal Information Section */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#2d7d32',
                marginBottom: '20px',
                borderBottom: '2px solid #e8f5e8',
                paddingBottom: '8px'
              }}>
                Personal Information
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
              }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    style={inputStyle('user_name')}
                    onFocus={(e) => e.target.style.borderColor = errors.user_name ? '#f44336' : '#2d7d32'}
                    onBlur={(e) => e.target.style.borderColor = errors.user_name ? '#f44336' : '#e8f5e8'}
                  />
                  {errors.user_name && <div style={errorStyle}>{errors.user_name}</div>}
                  <div style={helperTextStyle}>2-50 characters, letters only ({formData.user_name.length}/50)</div>
                </div>

                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                    style={inputStyle('user_email')}
                    onFocus={(e) => e.target.style.borderColor = errors.user_email ? '#f44336' : '#2d7d32'}
                    onBlur={(e) => e.target.style.borderColor = errors.user_email ? '#f44336' : '#e8f5e8'}
                  />
                  {errors.user_email && <div style={errorStyle}>{errors.user_email}</div>}
                  <div style={helperTextStyle}>We'll never share your email</div>
                </div>
              </div>
            </div>

            {/* Contact Details Section */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#2d7d32',
                marginBottom: '20px',
                borderBottom: '2px solid #e8f5e8',
                paddingBottom: '8px'
              }}>
                Contact Details
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
              }}>
                <div>
                  <label style={labelStyle}>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    style={inputStyle('subject')}
                    onFocus={(e) => e.target.style.borderColor = errors.subject ? '#f44336' : '#2d7d32'}
                    onBlur={(e) => e.target.style.borderColor = errors.subject ? '#f44336' : '#e8f5e8'}
                  />
                  {errors.subject && <div style={errorStyle}>{errors.subject}</div>}
                  <div style={helperTextStyle}>3-100 characters ({formData.subject.length}/100)</div>
                </div>

                <div>
                  <label style={labelStyle}>Phone Number *</label>
                  <input
                    type="tel"
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleInputChange}
                    placeholder="Enter 10-digit phone number"
                    required
                    style={inputStyle('user_phone')}
                    onFocus={(e) => e.target.style.borderColor = errors.user_phone ? '#f44336' : '#2d7d32'}
                    onBlur={(e) => e.target.style.borderColor = errors.user_phone ? '#f44336' : '#e8f5e8'}
                  />
                  {errors.user_phone && <div style={errorStyle}>{errors.user_phone}</div>}
                  <div style={helperTextStyle}>Exactly 10 digits ({formData.user_phone.length}/10)</div>
                </div>
              </div>
            </div>

            {/* Message Section */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#2d7d32',
                marginBottom: '20px',
                borderBottom: '2px solid #e8f5e8',
                paddingBottom: '8px'
              }}>
                Your Message
              </h3>
              <div>
                <label style={labelStyle}>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  cols={40}
                  rows={6}
                  placeholder="Tell us about your project or inquiry..."
                  required
                  style={{
                    ...inputStyle('message'),
                    resize: 'vertical',
                    minHeight: '140px'
                  }}
                  onFocus={(e) => e.target.style.borderColor = errors.message ? '#f44336' : '#2d7d32'}
                  onBlur={(e) => e.target.style.borderColor = errors.message ? '#f44336' : '#e8f5e8'}
                />
                {errors.message && <div style={errorStyle}>{errors.message}</div>}
                <div style={helperTextStyle}>10-1000 characters ({formData.message.length}/1000)</div>
              </div>
            </div>

            {/* CAPTCHA Section */}
            <div style={{
              backgroundColor: '#f8fff8',
              padding: '24px',
              borderRadius: '12px',
              border: '2px solid #e8f5e8',
              marginBottom: '32px'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#2d7d32',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                🔒 Security Verification
              </h3>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '16px',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <CaptchaCanvas text={captcha} />
                <button
                  type="button"
                  onClick={generateCaptcha}
                  style={{
                    backgroundColor: '#ff9800',
                    color: 'white',
                    border: 'none',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#f57c00'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#ff9800'}
                >
                  🔄 Refresh
                </button>
              </div>
              <div style={{ textAlign: 'center' }}>
                <input
                  type="text"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  placeholder="Enter the code above"
                  required
                  style={{
                    width: '100%',
                    maxWidth: '300px',
                    padding: '12px 16px',
                    border: '2px solid #e8f5e8',
                    borderRadius: '8px',
                    fontSize: '16px',
                    backgroundColor: '#ffffff',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    textAlign: 'center',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#2d7d32'}
                  onBlur={(e) => e.target.style.borderColor = '#e8f5e8'}
                />
              </div>
            </div>

            {/* Message Display */}
            {message && (
              <div style={{
                padding: '16px 20px',
                marginBottom: '24px',
                borderRadius: '8px',
                backgroundColor: message.includes('success') ? '#e8f5e8' : '#fff3e0',
                color: message.includes('success') ? '#2d7d32' : '#e65100',
                border: `2px solid ${message.includes('success') ? '#4caf50' : '#ff9800'}`,
                fontSize: '16px',
                fontWeight: '500',
                textAlign: 'center'
              }}>
                {message}
              </div>
            )}

            {/* Submit Button */}
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: isSubmitting
                    ? 'linear-gradient(135deg, #81c784 0%, #a5d6a7 100%)'
                    : 'linear-gradient(135deg, #2d7d32 0%, #4caf50 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '18px 48px',
                  borderRadius: '12px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  fontSize: '18px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  minWidth: '200px',
                  boxShadow: '0 4px 16px rgba(45, 125, 50, 0.3)',
                  transform: isSubmitting ? 'scale(0.98)' : 'scale(1)'
                }}
                onMouseOver={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.boxShadow = '0 6px 20px rgba(45, 125, 50, 0.4)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 16px rgba(45, 125, 50, 0.3)';
                  }
                }}
              >
                {isSubmitting ? '⏳ Sending Message...' : '📤 Send Message'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}