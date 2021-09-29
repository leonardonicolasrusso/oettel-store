import { useState,useEffect} from 'react'
import { useParams } from 'react-router'
import Item from '../Item/Item'
import './ItemList.css'

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

const ItemList = () => {

    const { category } = useParams()
    const [product, setProduct] = useState(undefined)
    console.log(category)

    useEffect(() => {
        const listProducts = delayProductos()
        console.log(listProducts)
        listProducts.then( result => {
            if(category){
                const product = result.filter(prod => prod.category.toLowerCase() === category)
                setProduct(product)
            } else{
                setProduct(result)
            }
        })
        return(() =>{
            setProduct(undefined)
        })
    }, [category])

    console.log(product)
    return(
        <div className="ItemList">
            {!product ? 'Loading' : product.map(prod => <Item key={prod.id} item={prod} />)}
        </div>
    )
}


export default ItemList