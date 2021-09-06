import './ItemListContainer.css'

const ItemListContainer = ({greeting}) =>{
    return(
        <div>
            <p className="greeting">Hola: {greeting}!</p>
        </div>
    )
}

export default ItemListContainer