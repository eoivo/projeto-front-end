import "./style.css";
import shirt from "../../assets/HightlightedCollection2/camisa.svg";
import pants from "../../assets/HightlightedCollection2/calca.svg";
import headphone from "../../assets/HightlightedCollection2/headphone.svg";
import tenis from "../../assets/HightlightedCollection2/tenis.svg";

export default function HightlightedCollection2() {
    return (
        <div className="container">
            <h1 className="highlighted-collection-title">
                Coleções em Destaque
            </h1>
            <div className="main-section">
                <div className="items-container"> 
                    <div className="shirt-section">
                        <div className="shirt">
                            <img className="shirt-image" src={shirt} alt="Camisetas" />
                        </div>
                        <span className="shirt-label">Camisetas</span>
                    </div>
                    <div className="pants-section">
                        <div className="pants">
                            <img className="pants-image" src={pants} alt="Calças" />
                        </div>
                        <span className="pants-label">Calças</span>
                    </div>
                    <div className="hat-section"> 
                        <div className="hat">
                            <img className="hat-image" src={pants} alt="Bonés" />
                        </div>
                        <span className="hat-label">Bonés</span>
                    </div>
                    <div className="headphones-section">
                        <div className="headphones">
                            <img className="headphones-image" src={headphone} alt="Headphones" />
                        </div>
                        <span className="headphones-label">Headphones</span>
                    </div>
                    <div className="sneakers-section">
                        <div className="sneakers">
                            <img className="sneakers-image" src={tenis} alt="Tênis" />
                        </div>
                        <span className="sneakers-label">Tênis</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
