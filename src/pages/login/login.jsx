import "./login.css";
import logo from "../../imgs/logo.png";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header>
        <img className="header-logo" src={logo} alt="logo"></img>
      </header>
      <div className="login-form-holder">
        <h1>Entrar</h1>
        <form>
          <input></input>
          <input type="password"></input>

          <button
            onClick={() => navigate("/home")}
            className="login-button"
            type="button"
          >
            Entrar
          </button>
        </form>
        <span className="form-middle-span">OU</span>
        <button className="login-by-code-button">
          Usar um código de acesso
        </button>
        <a className="forgot-password-link">Esqueceu a senha?</a>

        <label className="checkbox-label">
          <input className="login-checkbox" type="checkbox"></input>
          Lembre-se de mim
        </label>
        <span>
          Novo por aqui? <a>Assine agora</a>
        </span>
        <span className="captcha-text">
          Esta página é protegida pelo Google reCAPTCHA para garantir que você
          não é um robô. <a className="learn-more">Saiba mais</a>
        </span>
      </div>
      <footer>
        <div className="footer-section">
          <span>Perguntas frequentes</span>
          <span>Privacidade</span>
          <span>
            <select>
              <option>PT-br</option>
              <option>EN-us</option>
            </select>
          </span>
        </div>
        <div className="footer-section">
          <span>
            <a>Centro de ajuda</a>
          </span>
          <span>
            <a>Preferência de cookies</a>
          </span>
        </div>
        <div className="footer-section">
          <span>
            <a>Termos de uso</a>
          </span>
          <span>
            <a>Informações corporativas</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
