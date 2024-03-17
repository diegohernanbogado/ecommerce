import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({id, name, img, price, stock}) =>{
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
                                Precio: ${price}
                            </p>
                            <p className="card-text">
                                Stock disponible: {stock}
                            </p>                           
                        </div>
                        <div class="card-footer">
                            <Link to={`/item/${id}`}>
                                <button className="btn btn-success">Ver detalle</button>
                            </Link>      
                        </div>         
                    </div>
                </div>             
    )
}

export default Item;