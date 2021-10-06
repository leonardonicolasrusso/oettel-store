import React, {useContext} from "react"
import { CartContext } from "../../Context/CartContext"
import ItemList from "../ItemList/ItemList"


const Cart = (productsAdded, addProdFunction) => {

    const user = useContext(CartContext)


    return(
        <div>
            <h1>Cart</h1>
            <h3>Sus compras: {user}</h3>  
            <button onClick={() => addProdFunction([]) } >Cancelar compra</button>  
            <ItemList item={productsAdded} />
        </div>
    )
}

export default Cart