import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import laptop from "../assets/images/laptop.jpg";
import mouse from "../assets/images/mouse.jpg";
import keyboard from "../assets/images/keyboard.jpg";
import headphones from "../assets/images/headphones.jpg";
import watch from "../assets/images/watch.jpg";
import pendrive from "../assets/images/pendrive.jpg";
import monitor from "../assets/images/monitor.jpg";
import speaker from "../assets/images/speaker.jpg";

const imageMap = {
    "laptop.jpg": laptop,
    "mouse.jpg": mouse,
    "keyboard.jpg": keyboard,
    "headphones.jpg": headphones,
    "watch.jpg": watch,
    "pendrive.jpg": pendrive,
    "monitor.jpg": monitor,
    "speaker.jpg": speaker,
};

function ProductCard({ product }) {

    const { addItemToCart } = useContext(CartContext);

    return (
        <div className="product-card">

            <img
                src={imageMap[product.image]}
                alt={product.name}
                className="product-image"
            />

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <p>
                <strong>Category:</strong> {product.category}
            </p>

            <p>
                <strong>Price:</strong> ₹{product.price}
            </p>

            <p>
                <strong>Stock:</strong> {product.stock}
            </p>

            <button
                className="add-btn"
                onClick={() => addItemToCart(product)}
            >
                Add to Cart
            </button>

        </div>
    );
}

export default ProductCard;