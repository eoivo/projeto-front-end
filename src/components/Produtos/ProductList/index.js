import img from '../../../images/HighProducts/img-tennis-colecao2.png';
import { Link } from 'react-router-dom';
import './style.css';

export default function ProductList() {
    return (
        <div>
            <div className='product-list-container'>
                <ul className='product-list'>
                    <li className='product-item'>
                        <Link to="/produto-detalhe">
                            <img className='product-image' src={img} alt="Tênis K-Swiis V8" />
                        </Link>
                        <p className='product-discount'>30% OFF</p>
                        <h5 className='product-title'>Tênis</h5>
                        <p className='product-description'>K-Swiis V8 - Masculino</p>
                        <p className='product-price'><s className='price-strikethrough'>$200</s> $100</p>
                    </li>
                    <li className='product-item'>
                        <Link to="/produto-detalhe">
                            <img className='product-image' src={img} alt="Tênis K-Swiis V8" />
                        </Link>
                        <p className='product-discount'>30% OFF</p>
                        <h5 className='product-title'>Tênis</h5>
                        <p className='product-description'>K-Swiis V8 - Masculino</p>
                        <p className='product-price'><s className='price-strikethrough'>$200</s> $100</p>
                    </li>
                    <li className='product-item'>
                        <Link to="/produto-detalhe">
                            <img className='product-image' src={img} alt="Tênis K-Swiis V8" />
                        </Link>
                        <h5 className='product-title'>Tênis</h5>
                        <p className='product-description'>K-Swiis V8 - Masculino</p>
                        <p className='product-price'><s className='price-strikethrough'>$200</s> $100</p>
                    </li>
                </ul>
                <ul className='product-list-secondary'>
                    <li className='product-item'>
                        <Link to="/produto-detalhe">
                            <img className='product-image' src={img} alt="Tênis K-Swiis V8" />
                        </Link>
                        <h5 className='product-title'>Tênis</h5>
                        <p className='product-description'>K-Swiis V8 - Masculino</p>
                        <p className='product-price'><s className='price-strikethrough'>$200</s> $100</p>
                    </li>
                    <li className='product-item'>
                        <Link to="/produto-detalhe">
                            <img className='product-image' src={img} alt="Tênis K-Swiis V8" />
                        </Link>
                        <h5 className='product-title'>Tênis</h5>
                        <p className='product-description'>K-Swiis V8 - Masculino</p>
                        <p className='product-price'><s className='price-strikethrough'>$200</s> $100</p>
                    </li>
                    <li className='product-item'>
                        <Link to="/produto-detalhe">
                            <img className='product-image' src={img} alt="Tênis K-Swiis V8" />
                        </Link>
                        <h5 className='product-title'>Tênis</h5>
                        <p className='product-description'>K-Swiis V8 - Masculino</p>
                        <p className='product-price'><s className='price-strikethrough'>$200</s> $100</p>
                    </li>
                </ul>
                <ul className='product-list-secondary'>
                    <li className='product-item'>
                        <Link to="/produto-detalhe">
                            <img className='product-image' src={img} alt="Tênis K-Swiis V8" />
                        </Link>
                        <h5 className='product-title'>Tênis</h5>
                        <p className='product-description'>K-Swiis V8 - Masculino</p>
                        <p className='product-price'><s className='price-strikethrough'>$200</s> $100</p>
                    </li>
                    <li className='product-item'>
                        <Link to="/produto-detalhe">
                            <img className='product-image' src={img} alt="Tênis K-Swiis V8" />
                        </Link>
                        <h5 className='product-title'>Tênis</h5>
                        <p className='product-description'>K-Swiis V8 - Masculino</p>
                        <p className='product-price'><s className='price-strikethrough'>$200</s> $100</p>
                    </li>
                    <li className='product-item'>
                        <Link to="/produto-detalhe">
                            <img className='product-image' src={img} alt="Tênis K-Swiis V8" />
                        </Link>
                        <h5 className='product-title'>Tênis</h5>
                        <p className='product-description'>K-Swiis V8 - Masculino</p>
                        <p className='product-price'><s className='price-strikethrough'>$200</s> $100</p>
                    </li>
                </ul>
                <ul className='product-list-secondary'>
                    <li className='product-item'>
                        <Link to="/produto-detalhe">
                            <img className='product-image' src={img} alt="Tênis K-Swiis V8" />
                        </Link>
                        <h5 className='product-title'>Tênis</h5>
                        <p className='product-description'>K-Swiis V8 - Masculino</p>
                        <p className='product-price'><s className='price-strikethrough'>$200</s> $100</p>
                    </li>
                    <li className='product-item'>
                        <Link to="/produto-detalhe">
                            <img className='product-image' src={img} alt="Tênis K-Swiis V8" />
                        </Link>
                        <h5 className='product-title'>Tênis</h5>
                        <p className='product-description'>K-Swiis V8 - Masculino</p>
                        <p className='product-price'><s className='price-strikethrough'>$200</s> $100</p>
                    </li>
                    <li className='product-item'>
                        <Link to="/produto-detalhe">
                            <img className='product-image' src={img} alt="Tênis K-Swiis V8" />
                        </Link>
                        <h5 className='product-title'>Tênis</h5>
                        <p className='product-description'>K-Swiis V8 - Masculino</p>
                        <p className='product-price'><s className='price-strikethrough'>$200</s> $100</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
