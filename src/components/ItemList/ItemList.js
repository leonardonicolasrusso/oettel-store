import { useState,useEffect} from 'react'
import Item from '../Item/Item'
import './ItemList.css'



const ItemList = () => {

    const productos = [
        {id: 1, title: "Accesorios", price: 100},
        {id: 2, title: "Lentes", price: 200},
        {id: 3, title: "Reloj", price: 300}
    ]

    function delayProductos(){
        return new Promise ((resolve, reject) => {
            setTimeout(() => resolve(productos), 3000)
        })
    }

    const [listaItems, setListItems] = useState([])

    useEffect(() => {
        const mostrarProductos = delayProductos()

        mostrarProductos.then(item => {
            setListItems(item)
        })
    }, [])
    
    return(
        <div className="ItemList">
            {listaItems.map(p => <Item id={p.id} title={p.title} price={p.price}/>)}
        </div>
    )
}


export default ItemList