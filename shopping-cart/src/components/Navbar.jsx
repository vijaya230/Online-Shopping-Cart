import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {

    const { cartItems } = useContext(CartContext);

    return (
        <nav className="navbar">

            <div className="logo">
                🛒 Shopping Cart
            </div>

            <ul className="nav-links">

                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/cart">
                        Cart ({cartItems.length})
                    </Link>
                </li>

                <li>
                    <Link to="/checkout">
                        Checkout
                    </Link>
                </li>

            </ul>

        </nav>
    );
}

export default Navbar;