import React, {useContext} from "react"
import { CartContext } from "../../Context/CartContext"
import ItemList from "../ItemList/ItemList"


const Cart = ({itemsAdded, addProdFuntion}) => {

    const user = useContext(CartContext)

    return(
        <div>
            <h1>Cart</h1>
            <h3>Sus compras: {user}</h3>  
            {/* <button onClick={() => addProdFuntion([]) } >Cancelar compra</button>   */}
            {/* <ItemList item={itemsAdded} /> */}
        </div>
    )
}

export default Cart