import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="container nav">
            <Link to='/' className="nav__title">Eat <span className="nav__title-span">IT</span></Link>
            <div className="nav__links">
                <NavLink to='/' className='nav__link'>Home</NavLink>
                <NavLink to='features' className='nav__link'>Features</NavLink>
                <NavLink to='help' className='nav__link'>Help</NavLink>
                <NavLink to='products' className='nav__link'>Products</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;