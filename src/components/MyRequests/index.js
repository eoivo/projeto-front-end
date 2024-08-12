import { FaTruck, FaCheckCircle } from 'react-icons/fa'; 
import shoeImage from "../../assets/Requests/tenisquadrado.svg"; 
import "./style.css";

export default function OrderHistory() { 
    return (
        <div className="orderHistoryContainer"> 
            <header className="orderHeader"> 
                <p className="orderStatus">Status</p> 
            </header>
            <div className="orderItem"> 
                <img className="shoeImage" src={shoeImage} alt="Tênis" /> 
                <div className="orderDetailsColumn"> 
                    <p className="orderNumber">Order (1)</p> 
                    <p className="productDescription">Tênis Nike Revolution 6 Next Nature Masculino</p> 
                    <p className="productInTransit">Produto a caminho <FaTruck className="statusIcon" /></p>
                </div>
            </div>
            <hr className="divider" /> 
            <div className="orderItem"> 
                <img className="shoeImage" src={shoeImage} alt="Tênis" /> 
                <div className="orderDetailsColumn"> 
                    <p className="orderNumber">Order (2)</p> 
                    <p className="productDescription">Tênis Nike Revolution 6 Next Nature Masculino</p> 
                    <p className="productDelivered">Produto entregue <FaCheckCircle className="statusIcon" /></p> 
                </div>
            </div>
        </div>
    );
}
