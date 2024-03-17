
const CartItem = ({ id, name, price, quantity }) => {    

    return(
            <tr>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>${price}</td>    
                <td>${price * quantity}</td>
            </tr>              
    )
}

export default CartItem;