import './Item.css'
import img from '../../assets/media/reloj-dama.jpg'

const Item = ({id, title, price, detail}) => {

    const idProduct = parseInt(id);
    const priceProduct = parseInt(price);

    return(
        <div className="Card">
            <div>
                <img src={img} alt="img" style={{width: "300px"}}></img>
            </div>
            <div className="Card__info">
                <p className="Card__info--title">{title}</p>
                <p className="Card__info--description"><strong>Descripcion: </strong>{detail}</p>
                <p className="Card__info--price">Precio: ${priceProduct}</p>
            </div>
            
            {/* USAR EN ITEM LIST CONTAINER */}
            {/* <div>
                <button className="Card__btn">Ver detalles</button>
            </div> */}
        </div>
    )
}

export default Item