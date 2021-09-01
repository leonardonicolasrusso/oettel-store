import './NavBar.css'

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
            <div>
                <button>Carrito</button>
            </div>
        </nav>
    )
}

export default NavBar