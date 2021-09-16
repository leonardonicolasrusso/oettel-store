import { useState, useEffect } from "react"
import Item from "../Item/Item"

const ItemDetail = () => {

    const details = [
        {id: 1, title: "Accesorios", price: 100, detail: "Colores varios"},
        {id: 2, title: "Lentes", price: 200, detail: "Vidrio antireflex"},
        {id: 3, title: "Reloj", price: 300, detail: "Sumergible"}
    ]
    
    function getDetails(){
        return new Promise((resolve, reject) => {
            setTimeout(()=> resolve(details), 3000)
        })
    }

    const [listaDetails, setListaDetails] = useState([])

    useEffect(()=> {
        const mostrarDetails = getDetails()

        mostrarDetails.then(details => {
            setListaDetails(details)
        })
    }, [])


    return(
        <div style={{display:"flex"}}>
            {listaDetails.map(d => <Item key={d.id} title={d.title} price={d.price} detail={d.detail}/>)}
        </div>
    )
}

export default ItemDetail