import { Heading } from "@chakra-ui/react";
import React from "react";
import Banner from "../components/Banner";
import CardSexType from "../components/CardSexType";
import ProductFilter from "../components/Common/ProductFilter";

export default function Home({ data }) {
    return (
        <>
            <Banner />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="pt-20 pb-12">
                    <CardSexType />
                </section>

                {/** Product Overview */}
                <section className="pb-12">
                    <Heading className="pb-4">PRODUCT OVERVIEW</Heading>
                    <ProductFilter data={data} />
                </section>
            </div>
        </>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    const baseUrl = "https://fakestoreapi.com/";
    const allProductPath = "/products";
    const allProductUrl = `${baseUrl}${allProductPath}`;

    const data = await fetch(allProductUrl).then((res) => res.json());
    return { props: { data } };
}
