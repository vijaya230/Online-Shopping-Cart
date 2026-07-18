import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// ---------------- Products ----------------

export const getProducts = () => API.get("/products");

// ---------------- Cart ----------------

export const getCart = () => API.get("/cart");

export const addToCart = (cartItem) =>
    API.post("/cart", cartItem);

export const removeFromCart = (id) =>
    API.delete(`/cart/${id}`);

// ---------------- Checkout ----------------

export const checkout = (order) =>
    API.post("/checkout", order);

export default API;