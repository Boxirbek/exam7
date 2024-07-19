import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="footer-section">
                <h4>Game  <br /> Geek</h4>
                <h4>START YOUR GAME <br /> WITH THE BEST</h4>
                
            </div>
            <div className="footer-section">
                <h4>ShopCart Help</h4>
                <ul>
                    <li>Services</li>
                    <li>Help</li>
                    <li>About Us</li>
                    <li>Gift Card</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Help</h4>
                <ul>
                    <li>Shipping & Delivery</li>
                    <li>Track Orders</li>
                    <li>Press Center</li>
                    <li>Order Pickup</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Contact Us</h4>
                <ul>
                    <li>Account Signup</li>
                    <li>Feedback</li>
                    <li>Security & Fraud</li>
                </ul>
            </div>
            
            </footer>
            <div className="FootBottom">
                <h3>GG</h3>
                    <h3>Help Center</h3>
                    <h3>Privacy & Policy</h3>
                    <h3>Terms of Service</h3>
                    <h3>All rights reserved by GameGeek | 2023</h3>
                
            </div>
            
        </>
    );
};

export default Footer;
