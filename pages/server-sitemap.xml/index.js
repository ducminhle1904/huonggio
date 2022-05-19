import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    console.log(products);
    const fields = products.map((product) => ({
        loc: `https://fakestoreapi.com/products/${product.id}`,
        lastmod: new Date().toISOString(),
    }));

    return getServerSideSitemap(ctx, fields);
};
export default function Site() {}
