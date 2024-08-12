import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';
import './styles.css';

export default function UserLogin() {
    return (
        <div className="login-gradient">
            <div className="login-container">
                <form className="login-form">
                    <div className="access-account">
                        <h1>Acesse sua conta</h1>
                    </div>
                    <br />

                    <div className="register-login">
                        Primeiro acesso? Cadastre-se <Link to="/cadastrar" 
                        className="link-register">aqui</Link>

                    </div>
                    <br />

                    <label>Login: </label>
                    <input className="input-field" type="email" placeholder="Insira seu id ou email" />

                    <label>Senha: </label>
                    <input className="input-field" type="password" placeholder="Insira sua senha" />

                    <a className="forgot-password">Esqueci minha senha.</a>

                    <div className="login-button-container">
                        <button className="login-button">Acessar Conta</button>
                    </div>
                    <div className="social-login-icons">
                        <FaGoogle size={24} color="#DB4437" />
                        <FaFacebook size={24} color="#4267B2" />
                        <FaTwitter size={24} color="#1DA1F2" />
                    </div>
                </form>
            </div>
        </div>
    );
}
