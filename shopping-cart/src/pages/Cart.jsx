import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/CartContext";

function Cart() {

    const { cartItems } = useContext(CartContext);

    return (

        <div className="cart-page">

            <h1>Shopping Cart</h1>

            {cartItems.length === 0 ? (

                <h3>Your cart is empty.</h3>

            ) : (

                <>
                    {cartItems.map((item) => (

                        <CartItem
                            key={item.id}
                            item={item}
                        />

                    ))}

                    <Link to="/checkout">
                        <button className="checkout-btn">
                            Proceed to Checkout
                        </button>
                    </Link>

                </>

            )}

        </div>

    );

}

export default Cart;