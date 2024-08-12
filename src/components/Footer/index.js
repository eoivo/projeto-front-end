import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import faceLogo from '../../images/Footer/logoface.svg';
import instaLogo from '../../images/Footer/logoinsta.svg';
import twitterLogo from '../../images/Footer/logott.svg';
import footerLogo from '../../images/Footer/logofooter.svg';
import "./style.css";

export default function FooterComponent() {
    const [footerClass, setFooterClass] = useState("footer-main");
    const navigate = useNavigate();

    useEffect(() => {
        if ('/register' === location.pathname || '/login' === location.pathname) {
            setFooterClass("layoutFooter");
        } else if ('/' === location.pathname) {
            setFooterClass("footer-home");
        } else {
            setFooterClass("footer-main");
        }
    }, [navigate]);

    return (
        <section className={footerClass}>
            <div className='standard-margin'>
                <div className="digital-store">
                    <div className='footer-image-container'>
                        <img className="footer-image" src={footerLogo} alt="Footer Logo" />
                        <h2 className='digital-store-name'>Digital Store</h2>
                    </div>
                    <span className='footer-text'>
                        Lorem ipsum dolor sit amet, consectetur<br />
                        adipiscing elit, sed do eiusmod tempor<br />
                        incididunt ut labore et dolore
                    </span>
                    <div className='footer-icons'>
                        <a><img className='icon-facebook' src={faceLogo} alt="Facebook Icon" /></a>
                        <a><img className='icon-instagram' src={instaLogo} alt="Instagram Icon" /></a>
                        <img className='icon-twitter' src={twitterLogo} alt="Twitter Icon" />
                    </div>
                </div>

                <div className='info-section'>
                    <h3 className='info-title'>Informação</h3>
                    <ul className='info-list'>
                        <li>Sobre Drip Store</li>
                        <li>Segurança</li>
                        <li>Wishlist</li>
                        <li>Blog</li>
                        <li>Trabalhe conosco</li>
                        <li>Meus pedidos</li>
                    </ul>
                </div>

                <div className='general-category'>
                    <h3 className='category-title'>Categorias</h3>
                    <ul className='footer-category-list'>
                        <li>Camisetas</li>
                        <li>Calças</li>
                        <li>Bonés</li>
                        <li>Headphones</li>
                        <li>Tênis</li>
                    </ul>
                </div>

                <div>
                    <h3 className='contact-title'>Contato</h3>
                    <p className='contact-info'>Av. Santos Dumont, 1510-1 <br />
                        andar- Aldeota, Fortaleza -<br />
                        CE, 60150-161<br /></p>
                    <div className='footer-phone-number'>
                        (85) 3051-3411
                    </div>
                </div>
            </div>

            <div className='footer-final'>
                <p className='small-digital'>@2024 Digital College</p>
            </div>
        </section>
    );
}
