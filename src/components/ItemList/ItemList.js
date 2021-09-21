import { useState,useEffect} from 'react'
import Item from '../Item/Item'
import './ItemList.css'



const ItemList = () => {

    const productos = [
        {id: 1, name: 'Accesorios', price: 100, category: 'Accesorios', img:'../../assets/media/acc.png'},
        {id: 2, name: 'Accesorios', price: 100, category: 'Accesorios', img:'../../assets/media/acc.png'},
        {id: 3, name: 'Lentes', price: 200, category: 'Lentes', img:'../../assets/media/lentes.jpg'},
        {id: 4, name: 'Lentes', price: 200, category: 'Lentes', img:'../../assets/media/lentes.jpg'},
        {id: 5, name: 'Reloj', price: 400, category: 'Reloj', img:'../../assets/media/reloj-dama.jpg'},
        {id: 6, name: 'Reloj', price: 400, category: 'Reloj', img:'../../assets/media/reloj-dama.jpg'}
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
            {listaItems.map(p => <Item key={p.id} name={p.name} price={p.price} img={p.img}/>)}
        </div>
    )
}


export default ItemList