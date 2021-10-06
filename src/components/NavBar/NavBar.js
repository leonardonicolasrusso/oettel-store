import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const NavBar = ({products, cartProducts}) => {

    const [productQuantity, setProductQuantity] = useState(0)

    useEffect(() => {
        if(cartProducts.lenght === 0){
            setProductQuantity(0)
        } else {
            cartProducts.forEach(prod => {
                setProductQuantity(productQuantity + prod.quantity)
            })
        }
    }, [cartProducts])


    return (
        <nav className="Navbar">
            <Link to="/" className="brand">Oettel Store</Link>
            {/* <NavLink to="/accesorios" activeClassName="NavLink">Accesorios</NavLink>
            <NavLink to="/lentes" activeClassName="NavLink">Lentes</NavLink>
            <NavLink to="/relojes" activeClassName="NavLink">Relojes</NavLink> */}
            {products.map(cat => <NavLink key={cat.id} to={`/category/${cat.category}`} className="link">{cat.category}</NavLink>)}
            <Link to={'/cart'} style={{textDecoration:"none"}} ><CartWidget quantity={productQuantity}/></Link> 
        </nav> 
    )
}

export default NavBar