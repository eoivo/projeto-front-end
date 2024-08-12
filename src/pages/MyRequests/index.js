import { useState } from "react";
import SelectedOrders from "../../components/MyRequests";
import "./style.css";

export default function UserOrders() {
    const [activeOrderClass, setActiveOrderClass] = useState('active-order-class');

    const handleOrderSelection = () => {
        setActiveOrderClass('active-order-class');
    };

    return (
        <div className="ordersContainer">
            <div className="ordersContent">
                <h2 className="ordersHeading">Meus Pedidos</h2>
                <hr className="ordersDivider" />
                <div className={activeOrderClass} onClick={handleOrderSelection}>
                    <SelectedOrders />
                </div>
            </div>
        </div>
    );
}
