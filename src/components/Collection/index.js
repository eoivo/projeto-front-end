import './style.css'

export default function HighlightedCollection() {
    return (
        <div className='container'>
            <h2 className='title-highlightedCollection'>Coleções em destaque</h2>
            <ul className='list'>
                <li className='list-item-1'>
                    <div className='box'>
                        <p className='list-item-text'>30% off</p>
                        <h3 className='list-item-title'>Novo Drop</h3>
                        <h3 className='list-item-title'>Supreme</h3>
                        <button className='list-item-button'>Comprar</button>
                    </div>
                </li>

                <li className='list-item-2'>
                    <div className='box'>
                        <p className='list-item-text'>30% off</p>
                        <h3 className='list-item-title'>Coleção</h3>
                        <h3 className='list-item-title'>Adidas</h3>
                        <button className='list-item-button'>Comprar</button>
                    </div>
                </li>

                <li className='list-item-3'>
                    <div className='box'>
                        <p className='list-item-text'>30% off</p>
                        <h3 className='list-item-title'>Novo</h3>
                        <h3 className='list-item-title'>Beats Bass</h3>
                        <button className='list-item-button'>Comprar</button>
                    </div>
                </li>
            </ul>
        </div>
    );
}
