import { useState,useEffect} from 'react'
import { useParams } from 'react-router'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = () => {
    

    function delayProductos(){
        return new Promise ((resolve, reject) => {
        const products = [
        {id: 1, category:"Accesorios", title:"Aritos", description:"Colores varios", price:300, stock:5, pictureUrl:'../../assets/media/aritos.webp'},
        {id: 2, category:"Lentes", title:"Anteojos", description:"Antireflejo", price:500, stock:15, pictureUrl:'../../assets/media/anteojos.webp'},
        {id: 3, category:"Relojes", title:"Reloj Dama", description:"Sumergible", price:800, stock:30, pictureUrl:'../../assets/media/reloj-dama.webp'}
        ]    
            setTimeout(() => resolve(products), 2000)
        })
    }

    const { category } = useParams()
    const [product, setProduct] = useState(undefined)

    useEffect(() => {
        const listProducts = delayProductos()
        console.log(listProducts)
        listProducts.then( result => {
            const product = result.filter(prod => prod.category === category)
            setProduct(product)
        })
        return(() =>{
            setProduct(undefined)
        })
    }, [category])

    return(
        <div className="ItemList">
            {/* {listProducts.map(prod => <Item key={prod.id} item={prod} />)} */}
            <Item item={product}/>
        </div>
    )
}


export default ItemList