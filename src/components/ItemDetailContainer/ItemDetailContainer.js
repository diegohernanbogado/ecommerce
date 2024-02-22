import { useEffect, useState} from 'react';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[itemId])

    return(
        <div>
            <section className="hero is-primary">
                <div className="hero-body">                   
                </div>            
            </section>
            <div className="section">
                <div className='columns is-multiline is-centered'>
                    <ItemDetail {...product} />
                </div>
            </div>
        </div> 
    )
}

export default ItemDetailContainer;