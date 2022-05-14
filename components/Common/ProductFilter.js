import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";
import ProductList from "./ProductList";

export default function ProductFilter({ data }) {
    const [dataProduct, setDataProduct] = React.useState(data);
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
                url = "https://fakestoreapi.com/products";
                break;
        }
        await fetch(url)
            .then((results) => results.json())
            .then((data) => {
                setDataProduct(data);
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
                    <ProductList products={dataProduct} />
                </TabPanel>
                <TabPanel>
                    <ProductList products={dataProduct} />
                </TabPanel>
                <TabPanel>
                    <ProductList products={dataProduct} />
                </TabPanel>
                <TabPanel>
                    <ProductList products={dataProduct} />
                </TabPanel>
                <TabPanel>
                    <ProductList products={dataProduct} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
