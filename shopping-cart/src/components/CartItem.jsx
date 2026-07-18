import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {

    const { removeItem } = useContext(CartContext);

    return (

        <div className="cart-item">

            <h3>Product ID: {item.productId}</h3>

            <p><strong>Price:</strong> ₹{item.price}</p>

            <p><strong>Quantity:</strong> {item.quantity}</p>

            <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
            >
                Remove
            </button>

        </div>

    );

}

export default CartItem;