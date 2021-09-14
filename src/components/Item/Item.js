import './Item.css'

const Item = ({id, title, price}) => {

    const idProduct = parseInt(id);
    const priceProduct = parseInt(price);

    return(
        <div className="Card">
            <div>
                <img alt="img"></img>
            </div>
            <div>
                <p>{title}</p>
                <p>Id: {idProduct}</p>
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