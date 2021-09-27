// import { useState,useEffect} from 'react'
// import { useParams } from 'react-router'
// import Item from '../Item/Item'

// const Products = () => {

//     function getProducts(){
//         return new Promise ((resolve, reject) => {
//         const products = [
//         {id: 1, category:"Accesorios", title:"Aritos", description:"Colores varios", price:300, stock:5, pictureUrl:'../../assets/media/aritos.webp'},
//         // {id: 2, category:"Accesorios", title:"Pulseras", description:"Importadas", price:400, stock:10, pictureUrl:'../../assets/media/aritos.webp'},
//         {id: 3, category:"Lentes", title:"Anteojos", description:"Antireflejo", price:500, stock:15, pictureUrl:'../../assets/media/anteojos.webp'},
//         // {id: 4, category:"Lentes", title:"Lentes de sol", description:"Bluelightcut", price:600, stock:20, pictureUrl:'../../assets/media/anteojos.webp'},
//         // {id: 5, category:"Relojes", title:"Reloj Hombre", description:"Acero", price:700, stock:25, pictureUrl:'../../assets/media/reloj-dama.webp'},
//         {id: 6, category:"Relojes", title:"Reloj Dama", description:"Sumergible", price:800, stock:30, pictureUrl:'../../assets/media/reloj-dama.webp'}
//         ]    
//             setTimeout(() => resolve(products), 2000)
//         })
//     }


//     const { category } = useParams()
//     const [product, setProduct] = useState(undefined)

//     useEffect(() => {
//         const listProducts = getProducts()
//         listProducts.then( result => {
//             const product = result.filter(prod => prod.category === category)
//             setProduct(product)
//         })
//         return(() =>{
//             setProduct(undefined)
//         })
//     }, [category])
    
//     return(
//         <div>
//             <Item item={product} />
//         </div>
//     )
// }


// export default Products