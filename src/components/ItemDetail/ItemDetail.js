import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
                <div className='column is-3'>
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
                                    Categoria: {category}
                                </p>
                                <p>
                                    Descripcion: {description}
                                </p>
                                <p>
                                    Precio: ${price}
                                </p>
                            </div>
                        </div>
                        <div className="card-footer">        
                            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada',quantity)} />          
                        </div>
                    </div>
                </div>
    )
}

export default ItemDetail;