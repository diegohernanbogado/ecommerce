import { useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db,"Items",itemId);

        getDoc(docRef)
            .then(response => {
                const data = response.data();
                const productAdapted = { id: response.id, ...data};
                setProduct(productAdapted);
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    },[itemId])

    return(            
            <div className="container text-center">
                <div className="row gy-3 mt-3">
                    <div class="col"></div>
                    <div class="col">
                        <ItemDetail {...product} />
                    </div>
                    <div class="col"></div> 
                </div>
            </div>
    )
}

export default ItemDetailContainer;