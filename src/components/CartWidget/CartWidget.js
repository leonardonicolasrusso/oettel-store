import cartWidget from '../../assets/media/cartWidget.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className="cartWidget">
            <img src={cartWidget} alt="cartWidget" className="cartWidget__Icon"></img>
            <p className="cartWidget__Number">10</p>
        </div>
    );
}

export default CartWidget