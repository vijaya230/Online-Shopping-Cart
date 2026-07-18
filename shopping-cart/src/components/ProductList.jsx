import { useEffect, useState } from "react";
import { getProducts } from "../service";
import ProductCard from "./ProductCard";

function ProductList() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const response = await getProducts();
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h2>Loading products...</h2>;
    }

    return (
        <div className="product-list">

            {products.length === 0 ? (
                <h2>No Products Available</h2>
            ) : (
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))
            )}

        </div>
    );
}

export default ProductList;