import "./ItemDetail.css";
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity);
    }

    return (     
            <div className="col-sm">
                    <div className="card card-style h-100 text-bg-light border-success">
                        <div className="card-body">
                            <div className="card-title">
                                <h2>{name}</h2>
                            </div>
                        </div>
                        <div className="card-img-top">                           
                            <img src={img} alt={name} />
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Categoria: {category}
                            </p>
                            <p className="card-text">
                                Descripcion: {description}
                            </p>
                            <p className="card-text">
                                Precio: ${price}
                            </p>   
                        </div>
                        <div class="card-footer">
                            {
                                quantityAdded > 0 ? (
                                    <Link to="/cart">
                                        <button className="btn btn-success">                                                                    
                                            Terminar compra
                                        </button>
                                    </Link>
                                ) : (
                                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                                )
                            }        
                        </div>                     
                    </div>
            </div>                
    )
}

export default ItemDetail;