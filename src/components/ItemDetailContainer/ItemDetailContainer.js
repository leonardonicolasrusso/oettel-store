import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

import { useParams } from "react-router"

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

const ItemDetailContainer = () => {

    const {id} = useParams()
    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        const showProducts = getProducts()
        console.log(showProducts)
        showProducts.then(item => {
            const product = item.find(prod => prod.id === parseInt(id))
            setListProducts(product)
        })
    },[id])

    console.log(typeof(id))

    return (
        <div>   
            <h1>Item detail Container</h1>
            <div>
                <ItemDetail key={id} item={listProducts} />
            </div>
        </div>
    )
}

export default ItemDetailContainer