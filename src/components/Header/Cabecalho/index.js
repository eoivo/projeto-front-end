import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Input from "./Input";
import Cart from "./Carrinho";
import logo from '../../../assets/Header/logo.svg';
import "./style.css";

export default function Header() {

    const navigate = useNavigate();
    const goToHome = () => navigate('/');
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        element.addEventListener('click', goToHome);
    }, []);

    const location = useLocation();

    const noRegisterClass = (a, b) => {
        if (a === location.pathname || b === location.pathname) {
            return "noRegister";
        } else {
            return "header-register";
        }
    }

    const noButtonClass = (a, b) => {
        if (a === location.pathname || b === location.pathname) {
            return "noButton";
        } else {
            return "header-button";
        }
    }

    const titleClass = (a, b) => {
        if (a === location.pathname || b === location.pathname) {
            return "header-h2-layout";
        } else {
            return "header-h2";
        }
    }

    const logoClass = (a, b) => {
        if (a === location.pathname || b === location.pathname) {
            return "logo-layout";
        } else {
            return "header-logo";
        }
    }

    return (
        <div className="header-main">
            <div className="header-logo-container" ref={ref}>
                <img className={logoClass('/cadastrar', '/login')} src={logo} />
                <h2 className={titleClass('/cadastrar', '/login')}>Digital Store</h2>
            </div>
            <Input />
            <Link to="/cadastrar" href="registrationPage" className={noRegisterClass('/cadastrar', '/login')}>Cadastro</Link>
            <button className={noButtonClass('/cadastrar', '/login')}><Link className="header-login" to="/login">Entrar</Link></button>
            <Cart />
        </div>
    );
}
