import { useState, useEffect } from "react"
import Item from "../Item/Item"
import "./ItemDetail.css"

const ItemDetail = () => {

    const details = [
        {id: 1, title: "RELOJ VINTAGE B-640WMR-5A", price: 3000, detail: "Cronómetro de 1/100 segundos. Temporizador. Alarma. Resistente al agua 50m. Popular diseño retro. Pantalla LED de fondo. Malla de acero tejida."},
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
        <div style={{display:"flex"}} className="itemDetail">
            {listaDetails.map(d => 
                <Item key={d.id} title={d.title} price={d.price} detail={d.detail} className="itemDetail__card"/>)}
        </div>
    )
}

export default ItemDetail