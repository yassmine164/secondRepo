import React from 'react';
import './footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p><FaEnvelope /> Email: contact@nextlevelconsulting.com</p>
          <p><FaMapMarkerAlt /> Location: Mourouj, Tunisia</p>
        </div>
        
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>NextLevel Consulting - Empowering businesses with digital solutions since 2022.</p>
        </div>

        <div className="footer-section social-links">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 NextLevel Consulting. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
