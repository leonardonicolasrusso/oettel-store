import './Item.css'
import img from '../../assets/media/reloj-dama.jpg'

const Item = ({id, title, price, detail}) => {

    const idProduct = parseInt(id);
    const priceProduct = parseInt(price);

    return(
        <div className="Card">
            <div>
                <img src={img} alt="img" style={{width: "100px"}}></img>
            </div>
            <div>
                <p>{title}</p>
                <p>Descripcion: {detail}</p>
            </div>
            <div>
                <button className="Card__btn">Ver detalles</button>
            </div>
            <div>
                <p>Precio: ${priceProduct}</p>
            </div>
        </div>
    )
}

export default Item