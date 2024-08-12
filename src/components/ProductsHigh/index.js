import './style.css';
import { ArrowRightAlt } from "@mui/icons-material";
import shoeImage from '../../images/HighProducts/img-tennis-colecao2.png';
import { Link } from 'react-router-dom';

export default function TrendingProducts() {
    return (
        <div className="trending-container">
            <div className='header-text'>  
                <h3 className='header-title'>Produtos em alta</h3>
                <Link className='header-link' to='/products'>Veja todos {<ArrowRightAlt/>}</Link>
            </div>
            <div className='list-container'>
                <ul className='product-list'>
                    <li className='product-item'>
                        <Link to="/produto-detalhe"> 
                            <img className='product-image' src={shoeImage} alt="K-Swiis V8 Shoe" />
                        </Link>
                        <p className='discount-tag'>30% OFF</p>
                        <h5 className='product-title'>Shoe</h5>
                        <p className='product-description'>K-Swiis V8 - Men's</p>
                        <p className='product-price'><s className='price-strike'>$200</s> $100</p>
                    </li>
                    <li className='product-item'>
                        <Link to="/produto-detalhe"> 
                            <img className='product-image' src={shoeImage} alt="K-Swiis V8 Shoe" />
                        </Link>
                        <p className='discount-tag'>30% OFF</p>
                        <h5 className='product-title'>Shoe</h5>
                        <p className='product-description'>K-Swiis V8 - Men's</p>
                        <p className='product-price'><s className='price-strike'>$200</s> $100</p>
                    </li>
                    <li className='product-item'>
                        <Link to="/produto-detalhe"> 
                            <img className='product-image' src={shoeImage} alt="K-Swiis V8 Shoe" />
                        </Link>
                        <h5 className='product-title'>Shoe</h5>
                        <p className='product-description'>K-Swiis V8 - Men's</p>
                        <p className='product-price'><s className='price-strike'>$200</s> $100</p>
                    </li>
                    <li className='product-item'>
                        <Link to="/produto-detalhe"> 
                            <img className='product-image' src={shoeImage} alt="K-Swiis V8 Shoe" />
                        </Link>
                        <h5 className='product-title'>Shoe</h5>
                        <p className='product-description'>K-Swiis V8 - Men's</p>
                        <p className='product-price'><s className='price-strike'>$200</s> $100</p>
                    </li>
                </ul>

                <ul className='additional-list'>
                    <li className='product-item'>
                        <Link to="/produto-detalhe"> 
                            <img className='product-image' src={shoeImage} alt="K-Swiis V8 Shoe" />
                        </Link>
                        <h5 className='product-title'>Shoe</h5>
                        <p className='product-description'>K-Swiis V8 - Men's</p>
                        <p className='product-price'><s className='price-strike'>$200</s> $100</p>
                    </li>
                    <li className='product-item'>
                        <Link to="/produto-detalhe"> 
                            <img className='product-image' src={shoeImage} alt="K-Swiis V8 Shoe" />
                        </Link>
                        <h5 className='product-title'>Shoe</h5>
                        <p className='product-description'>K-Swiis V8 - Men's</p>
                        <p className='product-price'><s className='price-strike'>$200</s> $100</p>
                    </li>
                    <li className='product-item'>
                        <Link to="/produto-detalhe"> 
                            <img className='product-image' src={shoeImage} alt="K-Swiis V8 Shoe" />
                        </Link>
                        <h5 className='product-title'>Shoe</h5>
                        <p className='product-description'>K-Swiis V8 - Men's</p>
                        <p className='product-price'><s className='price-strike'>$200</s> $100</p>
                    </li>
                    <li className='product-item'>
                        <Link to="/produto-detalhe"> 
                            <img className='product-image' src={shoeImage} alt="K-Swiis V8 Shoe" />
                        </Link>
                        <h5 className='product-title'>Shoe</h5>
                        <p className='product-description'>K-Swiis V8 - Men's</p>
                        <p className='product-price'><s className='price-strike'>$200</s> $100</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
