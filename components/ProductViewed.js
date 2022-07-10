import { useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";

export default function ProductViewed() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const productViewed = localStorage.getItem("productViewed");
        const uniqueProduct = new Set(productViewed);
        setProducts(uniqueProduct);
        console.log(products);
    }, []);
    return (
        <div>
            <p>SẢN PHẨM XEM GẦN ĐÂY</p>
            <ProductGrid products={products} />
        </div>
    );
}
