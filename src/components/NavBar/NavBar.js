import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = ({products}) => {
    return (
        <nav className="Navbar">
            <Link to="/" className="brand">Oettel Store</Link>
            {/* <NavLink to="/accesorios" activeClassName="NavLink">Accesorios</NavLink>
            <NavLink to="/lentes" activeClassName="NavLink">Lentes</NavLink>
            <NavLink to="/relojes" activeClassName="NavLink">Relojes</NavLink> */}
            {products.map(cat => <NavLink key={cat.id} to={`/category/${cat.category}`} className="link">{cat.category}</NavLink>)}
            <CartWidget />
        </nav> 
    )
}

export default NavBar