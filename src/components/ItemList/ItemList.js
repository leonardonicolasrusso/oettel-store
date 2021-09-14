import Item from '../Item/Item'
import './ItemList.css'



const ItemList = () => {


//     const productos = [
//         {id: 1, title: "Accesorios", price: 100},
//         {id: 2, title: "Lente", price: 200},
//         {id: 3, title: "Reloj", price: 300}
//     ]

//     function Item() {
//         return new Promise ((resolve, reject) =>{
//                 setTimeout(() => resolve(productos), 2000)
//         })
//     }


//     function itemList(){
//         const list = Item()

//         list.then(list => {
//             list.map(articulos => <Item id={articulos.id} title={articulos.title} price={articulos.price} />)

//         }, err =>{
//             console.log(err)
//         }).catch(err => 
//             console.log(err)
//         )
    

//     itemList()


    return(
        <div className="ItemList">
            <Item />
        </div>
    )
}


export default ItemList