import './ItemCount.css'
import {useState} from 'react';

const ItemCount = ({nombre, stock,initial}) =>{
    const miStock = parseInt(stock);
    const [count, setCount] = useState(parseInt(initial))
    
    const miFuncionRestar = () =>{
        if(count <= 0){
            console.log("No se han seleccionado unidades")
        } else{
            setCount(count - 1)    
        }
    }

    const onAdd = () =>{
        if(count === miStock){
            console.log("Haz seleccionado todo el stock disponible")
        } else {
            setCount(count + 1)
        }
    }

    const agregarCarrito = () =>{
        if(count === 0){
            console.log("Debes agregar al menos una unidad")
        } else {
        console.log("Se agregaron " + count + " productos al carrito")
        }
    }

    return(
        <div className="Card">
            <div>
                <h1>{nombre}</h1>
                <p>Stock: {stock}</p>
            </div>
            <div className="Contador">
                <button onClick={miFuncionRestar} className="Contador__btn">-</button>
                <p>{count}</p>
                <button onClick={onAdd} className="Contador__btn">+</button>
            </div>
            <div>
                <button onClick={agregarCarrito} className="Contador__btn">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount