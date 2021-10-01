import './ItemCount.css'
import {useState} from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({item}) =>{
    const [count, setCount] = useState(0)
    
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
                <Link to={'/cart'}><button onClick={quantityToAdd} className="Contador__btn">Agregar al carrito</button></Link>
            </div>
        </div>
    )
}

export default ItemCount