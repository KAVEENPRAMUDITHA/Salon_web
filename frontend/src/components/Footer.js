import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Location: 123 Main Street, City</p>
                    <p>Phone: 123-456-7890</p>
                    <p>Email: info@salonweb.com</p>
                </div>
                <div className="footer-section">
                    <h4>Send us a message</h4>
                    <form>
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <textarea placeholder="Your Message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Salon Web. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
