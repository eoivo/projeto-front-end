import img from '../../../../assets/Header/cart.svg';
import { FaShoppingCart } from 'react-icons/fa';
import './style.css';
import { useRef, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function ShoppingCart() {
    const cartRef = useRef(null);

    useEffect(() => {
        const element = cartRef.current;
        element.addEventListener('click', showModal);
    }, []);

    const [isModalVisible, setModalVisible] = useState(false);

    const closeModal = () => setModalVisible(false);
    const showModal = () => setModalVisible(true);

    return (
        <div>
            <div className='cart-wrapper'>
                <img className='cart-header' ref={cartRef} src={img} alt="Shopping Cart" />
                <div className='notification-badge'>0</div>
            </div>

            <Modal className='cart-modal' show={isModalVisible} onHide={closeModal}>
                <Modal.Header className='modal-header-margin'>
                    <Modal.Title className='modal-title-shoppingCart'>Meu carrinho</Modal.Title>
                </Modal.Header>
                <Modal.Body className="empty-cart">
                    <FaShoppingCart size={50} color="#EE4266" />
                    <p>Carrinho vazio</p>
                </Modal.Body>
                <Modal.Footer className='modal-footer-margin'>
                    <Button className='modal-button-close' onClick={closeModal}>
                        Fechar
                    </Button>
                    <Button className='modal-button-continue' onClick={closeModal}>
                        <Link className='cart-link' to="/produtos">Continue comprando</Link>
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
