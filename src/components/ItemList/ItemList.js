import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return(         
            <div className="row gy-3 mt-3">
                <div class="col"></div>                          
                { products.map(prod => <Item key={prod.id} {...prod} />) } 
                <div class="col"></div>
            </div>                
    )
}

export default ItemList;