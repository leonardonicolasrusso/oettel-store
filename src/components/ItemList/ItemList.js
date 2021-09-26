import { useState,useEffect} from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = () => {

    function delayProductos(){
        return new Promise ((resolve, reject) => {
        const products = [
        {id: 1, category:"Accesorios", title:"Aritos", description:"Colores varios", price:300, stock:5, pictureUrl:'../../assets/media/aritos.webp'},
        // {id: 2, category:"Accesorios", title:"Pulseras", description:"Importadas", price:400, stock:10, pictureUrl:'../../assets/media/aritos.webp'},
        {id: 3, category:"Lentes", title:"Anteojos", description:"Antireflejo", price:500, stock:15, pictureUrl:'../../assets/media/anteojos.webp'},
        // {id: 4, category:"Lentes", title:"Lentes de sol", description:"Bluelightcut", price:600, stock:20, pictureUrl:'../../assets/media/anteojos.webp'},
        // {id: 5, category:"Relojes", title:"Reloj Hombre", description:"Acero", price:700, stock:25, pictureUrl:'../../assets/media/reloj-dama.webp'},
        {id: 6, category:"Relojes", title:"Reloj Dama", description:"Sumergible", price:800, stock:30, pictureUrl:'../../assets/media/reloj-dama.webp'}
        ]    
            setTimeout(() => resolve(products), 2000)
        })
    }

    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        const showProducts = delayProductos()

        showProducts.then(item => {
            setListProducts(item)
        })
    }, [])

    if(listProducts.length === 0){
        return(<h1>Cargando...</h1>)
    }
    
    return(
        <div className="ItemList">
            {listProducts.map(prod => <Item key={prod.id} item={prod} />)}
        </div>
    )
}


export default ItemList