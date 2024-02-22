import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;
        
        asyncFunc(categoryId)
            .then(response => {
                console.log(response);
                setProducts(response);
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <h1 className="title">{greeting}</h1>
                </div>            
            </section>
            <div className="section">
                <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer;