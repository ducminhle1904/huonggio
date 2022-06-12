import { Button, Center, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ApiHelper } from "../helpers";

const Heros = dynamic(() => import("../components/Heros"));
const ProductFilter = dynamic(() => import("../components/ProductFilter"));
const CardSexType = dynamic(() => import("../components/CardSexType"));
const Highlights = dynamic(() => import("../components/Highlights"));
const Partners = dynamic(() => import("../components/Partners"));

export default function Home({ data }) {
    return (
        <>
            <NextSeo
                title="Ken Shopping"
                description="Cửa hàng Ken chuyên các mặt hàng thời trang như quần áo, giày dép, phụ kiện trang sức, ..."
                openGraph={{
                    url: "https://ken-shop.vercel.app/",
                    title: "Ken Shopping",
                    description:
                        "Cửa hàng Ken chuyên các mặt hàng thời trang như quần áo, giày dép, phụ kiện trang sức, ...",
                }}
            />
            <Banner />
            <Highlights />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="pt-20 pb-12">
                    <CardSexType />
                </section>

                <section className="pb-12">
                    <Heros />
                </section>

                {/** Product Overview */}
                <section className="pb-12">
                    <Heading className="pb-4">SẢN PHẨM BÁN CHẠY</Heading>
                    <ProductFilter data={data} />
                    <Center>
                        <Link href="/products">
                            <Button className="mt-4 mx-auto block" colorScheme="teal" size="lg">
                                Load More
                            </Button>
                        </Link>
                    </Center>
                </section>
            </div>
            <Partners />
        </>
    );
}

export const getStaticProps = async () => {
    const allProductPath = "product/all?page=0&size=8";
    const data = await ApiHelper(allProductPath).then((res) => res);
    return {
        props: {
            data: data.product_list,
        },
        revalidate: 30 * 60,
    };
};
