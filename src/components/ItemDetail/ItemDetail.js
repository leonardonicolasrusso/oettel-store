import "./ItemDetail.css"

const ItemDetail = ({item}) => {

    console.log(item)
    
    return(
        <div className="CardDetail">
            <div className="CardDetail__img">
                <img src={item?.pictureUrl} alt="img" style={{width: 300}} className=""></img>
            </div>
            <div className="CardDetail__info">
                <p className="CardDetail__info--title">{item?.title}</p>
                <p className="CardDetail__info--description"><strong>Detalles: </strong></p>
                <p className="CardDetail__info--text">{item?.details}</p>
                <p className="CardDetail__info--price">Precio <strong>${item?.price}</strong></p>
                <p className="CardDetail__info--price">Stock disponible: {item?.stock}</p>
            </div>
        </div> 
    )
}

export default ItemDetail