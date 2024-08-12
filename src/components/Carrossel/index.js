import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { useSwipeable } from 'react-swipeable';
import 'bootstrap/dist/css/bootstrap.min.css';
import tenis from "../../images/CarrosselMain/tenis.svg";
import ball from "../../images/CarrosselMain/ball.svg";
import rectangle from "../../images/CarrosselMain/rectangle.svg";

import './style.css';

export default function ImageCarousel() { 
  const navigate = useNavigate(); 

  const swipeHandlers = useSwipeable({ 
    onSwipedLeft: () => { document.querySelector('.carousel-control-next').click(); },
    onSwipedRight: () => { document.querySelector('.carousel-control-prev').click(); },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <Carousel className="carousel-main" touch={true} {...swipeHandlers}> 
      <Carousel.Item>
        <div style={{ backgroundImage: `url(${rectangle})` }} className="rectangle"> 
          <img className="ball" src={ball} alt="ball" />
          <img className="tenis" src={tenis} alt="tenis" /> 
        </div>
        <Carousel.Caption className="caption-left"> 
          <div className="phrase-wrapper1"> 
            <p className="phrase1">Melhores ofertas personalizadas</p>
          </div>
          <div className="phrase-wrapper2"> 
            <h2 className='phrase2'>
              Queima de <br />estoque Nike 🔥
            </h2>
          </div>
          <div className="phrase-wrapper3"> 
            <p className="phrase3">Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur</p>
          </div>
          <div className="button-wrapper"> 
            <button className="offer-button" onClick={() => navigate('/produtos')}> 
              Ver Ofertas
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ backgroundImage: `url(${rectangle})` }} className="rectangle"> 
          <img className="ball" src={ball} alt="ball" />
          <img className="tenis" src={tenis} alt="tenis" /> 
        </div>
        <Carousel.Caption className="caption-left"> 
          <div className="phrase-wrapper1"> 
            <p className="phrase1">Melhores ofertas personalizadas</p>
          </div>
          <div className="phrase-wrapper2"> 
            <h2 className='phrase2'>
              Queima de <br />estoque Nike 🔥
            </h2>
          </div>
          <div className="phrase-wrapper3"> 
            <p className="phrase3">Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur</p>
          </div>
          <div className="button-wrapper"> 
            <button className="offer-button" onClick={() => navigate('/produtos')}>
              Ver Ofertas
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ backgroundImage: `url(${rectangle})` }} className="rectangle"> 
          <img className="ball" src={ball} alt="ball" />
          <img className="tenis" src={tenis} alt="tenis" /> 
        </div>
        <Carousel.Caption className="caption-left"> 
          <div className="phrase-wrapper1"> 
            <p className="phrase1">Melhores ofertas personalizadas</p>
          </div>
          <div className="phrase-wrapper2"> 
            <h2 className='phrase2'>
              Queima de <br />estoque Nike 🔥
            </h2>
          </div>
          <div className="phrase-wrapper3"> 
            <p className="phrase3">Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur</p>
          </div>
          <div className="button-wrapper"> 
            <button className="offer-button" onClick={() => navigate('/produtos')}> 
              Ver Ofertas
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ backgroundImage: `url(${rectangle})` }} className="rectangle"> 
          <img className="ball" src={ball} alt="ball" />
          <img className="tenis" src={tenis} alt="tenis" /> 
        </div>
        <Carousel.Caption className="caption-left"> 
          <div className="phrase-wrapper1"> 
            <p className="phrase1">Melhores ofertas personalizadas</p>
          </div>
          <div className="phrase-wrapper2"> 
            <h2 className='phrase2'>
              Queima de <br />estoque Nike 🔥
            </h2>
          </div>
          <div className="phrase-wrapper3"> 
            <p className="phrase3">Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur</p>
          </div>
          <div className="button-wrapper"> 
            <button className="offer-button" onClick={() => navigate('/produtos')}> 
              Ver Ofertas
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
