import { useContext } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CardWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart" style={{display: totalQuantity() > 0 ? "block" : "none"}}>
            <GiShoppingCart />
            {totalQuantity()}
        </Link>
    )
}

export default CardWidget;