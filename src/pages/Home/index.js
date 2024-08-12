import Offers from '../../components/Offers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrossel from '../../components/Carrossel';
import Collection from '../../components/Collection';
import Collection2 from '../../components/Collection2';
import ProductsHigh from '../../components/ProductsHigh';
import './style.css';

export default function Home() {

    return (
        <div>
            <Carrossel />
            <div className='background'>
                <Collection />
                <Collection2 />
                <ProductsHigh />
            </div>
            <Offers />
        </div>
    );
}