import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({ products }) => {
    console.log('products from ItemList.js');
    console.log(products);
    return(         
            <div className="columns is-multiline is-centered">                
                { products.map(prod => <Item key={prod.id} {...prod} />) }                
            </div>                
    )
}

export default ItemList;