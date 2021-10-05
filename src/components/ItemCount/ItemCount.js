import './ItemCount.css'
import {useState, useContext} from 'react';
import CartContextNotification from '../../Context/NotificationCartContext';

const ItemCount = ({item, addProdFunction, itemsAdded}) =>{
    const [count, setCount] = useState(0)
    const { setNotificacion } = useContext(CartContextNotification)
    
    const handleRemove = () =>{
        if(count <= 0){
            console.log("No se han seleccionado unidades")
        } else{
            setCount(count - 1)    
        }
    }

    const handleAdd = () =>{
        if(count === item?.stock){
            console.log("Haz seleccionado todo el stock disponible")
        } else {
            setCount(count + 1)
        }
    }

    const quantityToAdd = () =>{
        
        if(count === 0){
            console.log("Debes agregar al menos una unidad")
        } else {
        console.log("Se agregaron " + count + " productos del Item ID: '" + item?.id + "' , al carrito")
        }
        // const newItem = {
        //     ...item,
        //     quantity: count 
        // }
        // addProdFunction([...itemsAdded, newItem])
        setNotificacion('success', `${item.title} ha sido agregado al carrito`)
    }

    return(
        <div>
            <div>
                <p>Stock: {item?.stock}</p>
            </div>
            <div className="Contador">
                <button onClick={handleRemove} className="Contador__btn">-</button>
                <p>{count}</p>
                <button onClick={handleAdd} className="Contador__btn">+</button>
            </div>
            <div>
                {/* <Link to={'/cart'}><button onClick={quantityToAdd} className="Contador__btn">Agregar al carrito</button></Link> */}
                <button onClick={quantityToAdd} className="Contador__btn">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount