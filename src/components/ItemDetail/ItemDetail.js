import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount.js"
// import { useState } from "react"

const ItemDetail = ({item, productsAdded, addProdFunction}) => {

    // const [quantity, setQuantity] = useState(0)
    // console.log('Esta es la cantidad en Item Detail: ' + quantity)

    // const addToCart = (numberOfProductsAdd) =>{
    //     console.log('agregado al carrito')
    //     setQuantity(numberOfProductsAdd)
    // } 
    
    return(
        <div className="CardDetail">
            <div className="CardDetail__img">
                <img src={item?.pictureUrl} alt="img" style={{width: 300}} className=""></img>
            </div>
            <div className="CardDetail__info">
                <p className="CardDetail__info--title">{item?.title}</p>
                <p className="CardDetail__info--description"><strong>Detalles: </strong></p>
                <p className="CardDetail__info--text">{item?.description}</p>
                <p className="CardDetail__info--price">Precio <strong>${item?.price}</strong></p>
                {/* <ItemCount quantityToAdd={addToCart} item={item}/> */}
                <ItemCount item={item} productsAdded={productsAdded} addProdFunction={addProdFunction}/>
            </div>
        </div> 
    )
}

export default ItemDetail