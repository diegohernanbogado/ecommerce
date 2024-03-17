import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {
    const [ cart, setCart] = useState([]);

    console.log(cart);

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}]);
        }else{
            console.error("ya fue agregado")
        }        
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    function totalQuantity() {
        let quantity = 0;
        cart.map(i => quantity += i.quantity);
        return quantity;
    }

    function total() {
        let total = 0;
        cart.map ( (i) => total += i.price * i.quantity);
        return total;
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total}}>
            { children }
        </CartContext.Provider>
    )
}