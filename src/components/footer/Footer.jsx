import React from "react";
import './css/Footer.css';
import {about, contact, privacy} from "../../urls/Urls.js";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Ipastore. Todos os direitos reservados.</p>
                <ul className="footer-links">
                    <li><a href={about}>Sobre</a></li>
                    <li><a href={contact}>Contato</a></li>
                    <li><a href={privacy}>Política de Privacidade</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
