import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { getDocs, Timestamp, collection, documentId, writeBatch, query, where, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = ({ products }) => {
    const [orderId, setOrderId] = useState("");
    const [loading, setLoading] = useState(false);

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db);

            const outOfStock = [];

            const ids = cart.map(prod => prod.id);

            const productsRef = collection(db, "Items");

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)));

            const { docs } = productsAddedFromFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity});
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc});
                }
                
            });

            if(outOfStock.length === 0) {
                await batch.commit();

                const orderRef = collection(db, "Orders");

                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart();
            }
        }
        catch(error){
            console.error(error);
        }
        finally{
            setLoading(false);
        }
    }

    if(loading) {
        return (
            <div>
            <div className="container text-center">
                <div className="row">
                    <h1 className="title">Se esta generando su order...</h1>
                </div>
            </div>
        </div>
        )
    }

    if(orderId) {
        return (                        
                <div className="container text-center">
                    <div className="row">
                        <h1 className="title">El id de su orden es: {orderId}</h1>
                    </div>
                </div>            
        )
    }

    return(
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h1 className="title">Checkout</h1>
                        <CheckoutForm onConfirm={createOrder}/>
                    </div>                    
                </div>
            </div>
    )
}

export default Checkout;