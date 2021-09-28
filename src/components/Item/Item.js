import './Item.css'

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
                <button className="Card__btn">Ver detalles</button>
                <p>Stock: {item?.stock}</p>
            </div>
        </div>
    )
}

export default Item