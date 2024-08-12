import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import MyRequests from "../pages/MyRequests";
import Category from "../pages/Category";
import Header from "../components/Header";
import CreateAccount from "../components/CreateAccount";
import Login from "../components/Login";
import ProdutctDetail from "../components/ProdutctDetail";
import Footer from "../components/Footer";


export default function Routers() {
    return (
        <BrowserRouter>
            <Header />  
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<Products />} />
                <Route path="/categorias" element={<Category />} />
                <Route path="/meus-pedidos" element={<MyRequests />} />
                <Route path="/cadastrar" element={<CreateAccount />} />
                <Route path="/login" element={<Login />} />
                <Route path="/produto-detalhe" element={<ProdutctDetail />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}