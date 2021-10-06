import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const CartWidget = (props) => {

    const user = useContext(CartContext)

    return (
        <div className="cartWidget">
            <img src='../../../assets/media/cartWidget.png' alt="cartWidget" className="cartWidget__Icon"></img>
            <p className="cartWidget__Number">{props.quantity}</p>
        </div>
    );
}

export default CartWidget