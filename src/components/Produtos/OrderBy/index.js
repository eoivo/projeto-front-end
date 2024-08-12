import Accordion from 'react-bootstrap/Accordion';
import "./styles.css";

export default function OrderBy() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='order-by'>Ordenar por: mais relevantes</Accordion.Header>
        <Accordion.Body className='accordion-body'>
          <div className='order-option'>Mais barato</div>
          <div className='order-option'>Mais caro</div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
