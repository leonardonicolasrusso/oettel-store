import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className="cartWidget">
            <img src='../../../assets/media/cartWidget.png' alt="cartWidget" className="cartWidget__Icon"></img>
            <p className="cartWidget__Number"></p>
        </div>
    );
}

export default CartWidget