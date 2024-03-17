import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity() === 0) {
        return (         
                <div className="container text-center">
                    <div className="row">
                        <h3>No hay items en el carrito</h3>
                        <Link to="/">
                            <button className="btn btn-success">Productos</button>
                        </Link>
                    </div>
                </div>
        )
    }

    return(            
            <div className="container text-center">
                <div className="row">
                    <table className="table table-success table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio x Unidad</th>
                                <th scope="col">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            { cart.map(p => <CartItem key={p.id} {...p}/>)}
                        </tbody>
                    </table>
                </div>
                <div className="row">                    
                    <h2>Total: ${total()}</h2>
                </div>                   
                <div className="row">                    
                    <button onClick={() => clearCart()} className="btn btn-success">Limpiar carrito</button>
                </div>
                <div><br /></div>           
                <div className="row">
                    <Link to="/checkout">
                        <button className="btn btn-success">Checkout</button>
                    </Link>
                </div>
            </div>
    )
}

export default Cart;