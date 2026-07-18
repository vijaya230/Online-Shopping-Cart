import { createContext, useEffect, useState } from "react";
import {
    getCart,
    addToCart,
    removeFromCart
} from "../service";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    // Load cart items
    const loadCart = async () => {
        try {
            const response = await getCart();
            setCartItems(response.data);
        } catch (error) {
            console.error("Error loading cart:", error);
        }
    };

    useEffect(() => {
        loadCart();
    }, []);

    // Add product to cart
    const addItemToCart = async (product) => {
        try {

            const cartItem = {
                productId: product.id,
                quantity: 1
            };

            await addToCart(cartItem);
            loadCart();

        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    // Remove item
    const removeItem = async (id) => {
        try {
            await removeFromCart(id);
            loadCart();
        } catch (error) {
            console.error("Error removing item:", error);
        }
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addItemToCart,
                removeItem,
                loadCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};