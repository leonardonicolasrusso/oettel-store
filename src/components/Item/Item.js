import './Item.css'

const Item = ({name, price, img}) => {

    return(
        <div className="Card">
            <div>
                <img src={img} alt="img" style={{width: "150px"}}></img>
            </div>
            <div>
                <p><strong>{name}</strong></p>
            </div>
            <div>
                <button className="Card__btn">Ver detalles</button>
            </div>
            <div>
                <p>Precio: ${price}</p>
            </div>
        </div>
    )
}

export default Item