import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
    return (
        <div className="bg-white">
            <div className="mx-auto lg:max-w-7xl">
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
