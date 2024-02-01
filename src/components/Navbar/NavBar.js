import CardWidget from "../CardWidget/CardWidget";
import titulo from "./assets/titulo.jpg";

const NavBar = () => {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <img src={titulo} alt="titulo"/>
                </div>               
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <div className="navbar-item">
                        <a className="navbar-link" href="#">Belleza</a>
                        <a className="navbar-link">Bebes</a>
                        <a className="navbar-link">Salud y Farmacia</a>
                    </div>
                   
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <CardWidget className="navbar-link" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;