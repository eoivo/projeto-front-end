import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderContent from "./Cabecalho";
import Navigation from "./Nav";
import "./style.css"

export default function MainHeader() {
    const [headerClass, setHeaderClass] = useState("containerMainHeader");
    const navigate = useNavigate();

    useEffect(() => {
        if ('/cadastrar' === location.pathname || '/login' === location.pathname) {
            setHeaderClass("compactHeaderLayout");
        } else {
            setHeaderClass('containerMainHeader');
        }
    }, [navigate]);

    return (
        <div className={headerClass}>
            <div className="headerWrapper">
                <HeaderContent />
                <Navigation />
            </div>
        </div>
    );
}
