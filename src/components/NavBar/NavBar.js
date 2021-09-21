import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className="Navbar">
            <div>
                <Link to="/"><h1>Oettel Store</h1></Link>
            </div>
            <div>
                <NavLink to="/accesorios" activeClassName='navLink'>Accesorios</NavLink>
                <NavLink to="/lentes" activeClassName='navLink'>Lentes</NavLink>
                <NavLink to="/relojes" activeClassName='navLink'>Relojes</NavLink>
            </div>
            <CartWidget />
        </nav> 
    )
}

export default NavBar