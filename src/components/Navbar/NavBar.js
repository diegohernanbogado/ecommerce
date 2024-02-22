import { NavLink } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";
import titulo from "./assets/titulo.jpg";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <NavLink to={`/`} className="navbar-item">
                        <img src={titulo} alt="titulo" />
                    </NavLink>
                </div>
                <div id="navbarMenu" className="navbar-menu">
                    <div className="navbar-start">
                        <NavLink to={`/category/belleza`} className="navbar-link">Belleza</NavLink>
                        <NavLink to={`/category/bebes`} className="navbar-link">Bebes</NavLink>
                        <NavLink to={`/category/saludyfarmacia`} className="navbar-link">Salud y Farmacia</NavLink>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <CardWidget className="navbar-link" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;