import './Item.css';
import { Link } from "react-router-dom";

const Item = ({id, name, img, price, stock}) =>{
    return (
                <div className='column is-2'>
                    <div className="card large">
                        <div className="card-header">
                            <h2>
                                {name}
                            </h2>
                        </div>
                        <div className="card-image">
                            <figure className="image is-16by9">
                                <img src={img} alt={name} />
                            </figure>       
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <p>
                                    Precio: ${price}
                                </p>
                                <p>
                                    Stock disponible: {stock}
                                </p>
                            </div>
                        </div>
                        <div className="card-footer">
                            <Link to={`/item/${id}`}>
                                <button className='button is-primary'>Ver detalle</button>
                            </Link>                    
                        </div>
                    </div>
                </div>
    )
}

export default Item;