import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const products = [
        {id: 1, category:"Accesorios", title:"Aritos", description:"Colores varios", details:"Neque quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit", price:300, stock:5, pictureUrl:'../../../assets/media/aritos.webp'},
        // {id: 2, category:"Accesorios", title:"Pulseras", description:"Importadas", details:"Neque quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit", price:400, stock:10, pictureUrl:'../../assets/media/aritos.webp'},
        {id: 3, category:"Lentes", title:"Anteojos", description:"Antireflejo", details:"Neque quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit", price:500, stock:15, pictureUrl:'../../assets/media/anteojos.webp'},
        // {id: 4, category:"Lentes", title:"Lentes de sol", description:"Bluelightcut", details:"Neque quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit", price:600, stock:20, pictureUrl:'../../assets/media/anteojos.webp'},
        // {id: 5, category:"Relojes", title:"Reloj Hombre", description:"Acero", details:"Neque quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit", price:700, stock:25, pictureUrl:'../../assets/media/reloj-dama.webp'},
        {id: 6, category:"Relojes", title:"Reloj Dama", description:"Sumergible", details:"Neque quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit", price:800, stock:30, pictureUrl:'../../assets/media/reloj-dama.webp'}
        ]

    function getProducts(){
        return new Promise ((resolve, reject) => {
            setTimeout(() => resolve(products), 2000)
        })
    }

    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        const showProducts = getProducts()

        showProducts.then(item => {
            setListProducts(item)
        })
    }, [])

    if(listProducts.length === 0){
        return(<h1>Cargando...</h1>)
    }

    return (
        <div>   
            <h1>Item detail Container</h1>
            <div>
                {listProducts.map(prod => <ItemDetail key={prod.id} item={prod} />)}
            </div>
        </div>
    )
}

export default ItemDetailContainer