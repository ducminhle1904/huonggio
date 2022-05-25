import { Progress } from "@chakra-ui/react";
import ProductCard from "./Common/ProductCard";

export default function ProductList({ products, isLoading }) {
    return (
        <div className="bg-white">
            <div className="mx-auto lg:max-w-7xl">
                {isLoading ? <Progress size="xs" isIndeterminate /> : null}
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
