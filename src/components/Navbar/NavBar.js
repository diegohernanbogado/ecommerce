import { NavLink } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";
import titulo from "./assets/titulo.jpg";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <NavLink to={`/`}>
                        <img src={titulo} alt="titulo" />
                    </NavLink>
                </div>
                <div id="navbarMenu" className="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to={`/category/belleza`} className="nav-link">Belleza</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/category/bebes`} className="nav-link">Bebes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/category/saludyfarmacia`} className="nav-link">Salud y Farmacia</NavLink>
                        </li>
                    </ul>                   
                    <div className="d-flex">
                        <CardWidget className="navbar-link" />
                    </div>                    
                </div>
            </div>
        </nav>
    )
}

export default NavBar;