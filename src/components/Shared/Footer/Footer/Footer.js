import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';
const Footer = () => {
    const noNamed = [
        {name: "Emergency" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Full Website" , link: "/full"},
        {name: "Check Up" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "Rangpur,Bangladesh" , link: "//google.com/map"},
        {name: "Rangpur City" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Emergency Online Chat" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Corona Virus" , link: "/virus"},
        {name: "Vaccinne" , link: "/antivirus"},
    ]
    const services = [
        {name: "Emargency Checkup" , link: "/emargency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Your Health" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+8801719207069</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p className="fw-bold">Copyright Md ASIF HOSSAIN {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;