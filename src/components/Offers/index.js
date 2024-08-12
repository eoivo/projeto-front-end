import "./style.css";
import { Link } from 'react-router-dom';
import elipse from "../../images/Offers/elipse-tenis.svg";
import sneaker from "../../images/Offers/tenis-oferta-especial.svg";

export default function Offers() {
  return (
    <section className="offers-1">
      <div style={{ backgroundImage: `url(${elipse})` }} className="left">
        <img className="sneaker" src={sneaker} alt="" />
      </div>
      <div className="right">
        <div className="wrapper-content">
          <p className="text">Oferta especial</p>
        </div>
        <div className="wrapper-content1">
          <h2 className="text1">Air Jordan edição de colecionador</h2>
        </div>
        <div className="wrapper-content2">
          <p className="text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do br
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
        </div>
        <div className="button">
          <Link to="/produtos">
            <button className="button-offers">Ver Ofertas</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
