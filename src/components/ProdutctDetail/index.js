import React, { useState } from 'react';
import ProductCarousel from 'react-bootstrap/Carousel';
import productSneaker from './../../images/CarrosselProduct/TenisProduto.svg';
import { Star, StarBorder } from '@mui/icons-material';
import "./style.css"

export default function ProductDetail() {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleCarouselSelect = (selectedIndex, e) => {
        setCurrentIndex(selectedIndex);
    };

    return (
        <div className='productDetailWrapper darkBackground'>
            <div className='productImageContainer'>
                <ProductCarousel interval={null} className='productCarousel' activeIndex={currentIndex} onSelect={handleCarouselSelect}>
                    <ProductCarousel.Item className="carouselItem backgroundColor1">
                        <img
                            className="productImage"
                            src={productSneaker}
                            alt="First slide"
                        />
                    </ProductCarousel.Item>
                    <ProductCarousel.Item className="carouselItem backgroundColor2">
                        <img
                            className="productImage"
                            src={productSneaker}
                            alt="Second slide"
                        />
                    </ProductCarousel.Item>
                    <ProductCarousel.Item className="carouselItem backgroundColor3">
                        <img
                            className="productImage"
                            src={productSneaker}
                            alt="Third slide"
                        />
                    </ProductCarousel.Item>
                </ProductCarousel>
            </div>
            <div className='productInfoContainer'>
                <h1 className='productTitle'>Tênis Nike Revolution 6 Next Nature Masculino</h1>
                <p className='productRef'>Casual | Nike | REF:38416711</p>
                <p>
                    <Star className='filledStar' />
                    <Star className='filledStar' />
                    <Star className='filledStar' />
                    <Star className='filledStar' />
                    <StarBorder className='emptyStar' />
                </p>
                <p><span className='productPrice'>R$ 219,00</span> <s className='strikethroughPrice'>219,00</s></p>
                <p className='productDescriptionTitle'>Descrição produto</p>
                <p className='productDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                <p className='productSizeLabel'>Tamanho</p>
                <button className='sizeButton'>39</button>
                <button className='sizeButton'>40</button>
                <button className='sizeButton'>41</button>
                <button className='sizeButton'>42</button>
                <button className='sizeButton'>43</button>

                <p className='productColor'>Cor</p>
                <button className='colorButton'></button>
                <button className='colorButton1'></button>
                <button className='colorButton2'></button>

                <div className='dot1'></div>
                <div className='dot2'></div>
                <div className='dot3'></div>
                <div className='dot4'></div>

                <button className='purchaseButton'>COMPRAR</button>
            </div>
        </div>
    );
}
