import './Item.css'
import { NavLink } from 'react-router-dom'


// const products = [
//         {id: 1, category:"Accesorios", title:"Aritos", description:"Colores varios", details:"Neque quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit", price:300, stock:5, pictureUrl:'../../../assets/media/aritos.webp'},
//         {id: 2, category:"Lentes", title:"Anteojos", description:"Antireflejo", details:"Neque quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit", price:500, stock:15, pictureUrl:'../../assets/media/anteojos.webp'},
//         {id: 3, category:"Relojes", title:"Reloj Dama", description:"Sumergible", details:"Neque quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit", price:800, stock:30, pictureUrl:'../../assets/media/reloj-dama.webp'}
//         ]

const Item = ({item}) => {


    if(!item){
        return(<h1>Cargando...</h1>)
    }
    
    return(
        <div className="Card">
            <div className="Card__info">
                <p className="Card__info--title"><strong>{item?.title}</strong></p>
                <img src={item?.pictureUrl} alt="imagen" style={{width: "150px"}}></img>
                <p><strong>{item?.description}</strong></p>
                <p className="Card__info--price">Precio: <strong>${item?.price}</strong></p>
                {/* <button className="Card__btn">Ver detalles</button> */}
                {/* {detail.map(detail => <NavLink to={`/item/${detail.id}`} className="Card__btn">Ver detalles</NavLink>)} */}
                <NavLink to={`/item/${item.id}`} className="Card__btn">Ver detalles</NavLink>
                <p>Stock: {item?.stock}</p>
            </div>
        </div>
    )
}

export default Item