import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const products = [
        {id: 1, category:"Accesorios", title:"Aritos", description:"Colores varios", details:"Neque quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit", price:300, stock:5, pictureUrl:'../../../assets/media/aritos.webp'},
        {id: 2, category:"Lentes", title:"Anteojos", description:"Antireflejo", details:"Neque quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit", price:500, stock:15, pictureUrl:'../../assets/media/anteojos.webp'},
        {id: 3, category:"Relojes", title:"Reloj Dama", description:"Sumergible", details:"Neque quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit", price:800, stock:30, pictureUrl:'../../assets/media/reloj-dama.webp'}
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