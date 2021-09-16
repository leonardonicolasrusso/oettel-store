// import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

import './ItemListContainer.css'

const ItemListContainer = () =>{
    return(
        <div>
            <h1>Items - clase 6</h1>
            <ItemList />
            {/* <ItemCount nombre="RELOJ" stock="10" initial="1"/> */}
        </div>
    )
}

export default ItemListContainer