import { useState } from "react";
import "./style.css";

export default function FilterSidebar() {
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [brands, setBrands] = useState({
        adidas: false,
        balenciaga: false,
        kswiss: false,
        nike: false,
        puma: false,
    });

    const handleStatusChange = (value) => {
        setSelectedStatus(prevStatus => (prevStatus === value ? null : value));
    };

    const handleBrandChange = (brand) => {
        setBrands(prevBrands => ({ ...prevBrands, [brand]: !prevBrands[brand] }));
    };

    return (
        <div className="filterSidebar">
            <aside className="filterSection">
                <h2 className="sectionTitle">Filtrar por</h2>
                <hr />
                <form>
                    <h2 className="filterSubTitle">Marca</h2>
                    <div className="checkboxContainer">
                        {Object.keys(brands).map((brand) => (
                            <div key={brand}>
                                <input
                                    id={brand}
                                    type="checkbox"
                                    className="filterCheckbox"
                                    checked={brands[brand]}
                                    onChange={() => handleBrandChange(brand)}
                                />
                                <label htmlFor={brand} className="filterLabel"> {brand.charAt(0).toUpperCase() + brand.slice(1)}</label>
                            </div>
                        ))}
                    </div>

                    <h2 className="filterSubTitle">Categoria</h2>
                    <div className="checkboxContainer">
                        {["Esporte e lazer", "Casual", "Utilitário", "Corrida"].map((category) => (
                            <div key={category}>
                                <input id={category} type="checkbox" className="filterCheckbox" />
                                <label htmlFor={category} className="filterLabel"> {category.charAt(0).toUpperCase() + category.slice(1)}</label>
                            </div>
                        ))}
                    </div>

                    <h2 className="filterSubTitle">Gênero</h2>
                    <div className="checkboxContainer">
                        {["Masculino", "Feminino", "Unisex"].map((gender) => (
                            <div key={gender}>
                                <input id={gender} type="checkbox" className="filterCheckbox" />
                                <label htmlFor={gender} className="filterLabel"> {gender.charAt(0).toUpperCase() + gender.slice(1)}</label>
                            </div>
                        ))}
                    </div>

                    <h2 className="filterSubTitle">Estado</h2>
                    <div className="checkboxContainer">
                        <div>
                            <input
                                id="new"
                                type="radio"
                                className={`filterCheckbox ${selectedStatus === "new" ? "selected" : ""}`}
                                checked={selectedStatus === "new"}
                                onChange={() => handleStatusChange("new")}
                            />
                            <label htmlFor="new" className="filterLabel"> Novo</label>
                        </div>
                        <div>
                            <input
                                id="used"
                                type="radio"
                                className={`filterCheckbox ${selectedStatus === "used" ? "selected" : ""}`}
                                checked={selectedStatus === "used"}
                                onChange={() => handleStatusChange("used")}
                            />
                            <label htmlFor="used" className="filterLabel">Usado</label>
                        </div>
                    </div>
                </form>
            </aside>
        </div>
    );
}
