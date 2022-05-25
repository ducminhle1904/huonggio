import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
const ProductList = dynamic(() => import("./ProductList"));

export default function ProductFilter({ data }) {
    const [dataProduct, setDataProduct] = React.useState(data);
    const [loading, setLoading] = React.useState(false);
    async function changeTab(idx) {
        let url = "https://fakestoreapi.com/products/category/";
        switch (idx) {
            case 1:
                url = url + "women's clothing";
                break;
            case 2:
                url = url + "men's clothing";
                break;
            case 3:
                url = url + "electronics";
                break;
            case 4:
                url = url + "jewelery";
                break;
            default:
                url = "https://fakestoreapi.com/products?limit=8";
                break;
        }
        await fetch(url)
            .then((results) => results.json(), setLoading(true))
            .then((data) => {
                setDataProduct(data);
                setLoading(false);
            });
    }

    return (
        <Tabs variant="soft-rounded" colorScheme="green" isLazy onChange={(index) => changeTab(index)}>
            <TabList className="flex-wrap">
                <Tab>All Products</Tab>
                <Tab>Women</Tab>
                <Tab>Men</Tab>
                <Tab>Electronics</Tab>
                <Tab>Jewelery</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <ProductList products={dataProduct} isLoading={loading} />
                </TabPanel>
                <TabPanel>
                    <ProductList products={dataProduct} isLoading={loading} />
                </TabPanel>
                <TabPanel>
                    <ProductList products={dataProduct} isLoading={loading} />
                </TabPanel>
                <TabPanel>
                    <ProductList products={dataProduct} isLoading={loading} />
                </TabPanel>
                <TabPanel>
                    <ProductList products={dataProduct} isLoading={loading} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
