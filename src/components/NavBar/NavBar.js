import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className="Navbar">
            <div>
                <h1>Oettel Store</h1>
            </div>
            <div>
                <button>Accesorios</button>
                <button>Lentes</button>
                <button>Relojes</button>
            </div>
            <CartWidget />
        </nav> 
    )
}

export default NavBar