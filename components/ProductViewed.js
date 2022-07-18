import { useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";

export default function ProductViewed({ data }) {
    return (
        <div className="mt-20">
            <p className="text-center text-2xl font-bold">SẢN PHẨM XEM GẦN ĐÂY</p>
            <ProductGrid products={data} />
        </div>
    );
}
