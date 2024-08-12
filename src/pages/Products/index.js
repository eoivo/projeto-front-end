import "./style.css";
import Filter from "../../components/Produtos/Filtro";
import ProductList from "../../components/Produtos/ProductList";
import SortOptions from "../../components/Produtos/OrderBy";

export default function ProductPage() {
    return (
        <div className="darkBackground">
            <div className="productBox">
                <div className="headerBox">
                    <p className="productResults">Resultados para "Tênis" - <span className="productCountGray">389 produtos</span> </p>
                    <SortOptions className="sort-options" />
                </div>

                <div className="contentBox">
                    <Filter className="filter-by" />
                    <ProductList />
                </div>
            </div>
        </div>
    );
}
