import { Link, useLocation } from "react-router-dom";
import "./style.css";

export default function Navigation() { 
    const currentPath = useLocation(); 

    const activateHome = (url) => url === currentPath.pathname ? "highlightHome" : "linkHome"; 
    const activateProducts = (url) => url === currentPath.pathname ? "highlightProducts" : "linkProducts"; 
    const activateCategories = (url) => url === currentPath.pathname ? "highlightCategories" : "linkCategories"; 
    const activateOrders = (url) => url === currentPath.pathname ? "highlightOrders" : "linkOrders"; 
    const checkNavVisibility = (a, b) => { 
        if (a === currentPath.pathname || b === currentPath.pathname) {
            return "navVisible"; 
        } else {
            return "navHidden"; 
        }
    }

    return (
        <nav className={checkNavVisibility('/cadastrar', '/login')}>
            <Link className={activateHome('/')} to="/" >Home</Link>
            <Link className={activateProducts('/produtos')} to="/produtos" >Produtos</Link>
            <Link className={activateCategories('/categorias')} to="/categorias" >Categorias</Link>
            <Link className={activateOrders('/meus-pedidos')} to="/meus-pedidos" >Meus Pedidos</Link>
        </nav>
    );
}
