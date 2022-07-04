import { Progress } from "@chakra-ui/react";
import ProductCard from "./Common/ProductCard";
import { useSelector } from "react-redux";

export default function ProductGrid({ products }) {
    const isLoading = useSelector((state) => state.loading.loading);
    return (
        <div className="bg-white">
            <div className="mx-auto lg:max-w-7xl">
                {isLoading ? (
                    <Progress size="xs" isIndeterminate />
                ) : (
                    <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                        {products?.map((product) => (
                            <ProductCard key={product.product_id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
