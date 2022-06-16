import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { ApiHelper } from "../helpers";
import { useDispatch } from "react-redux";
import { setLoading } from "../stores/slices/loading";
const ProductGrid = dynamic(() => import("./ProductGrid"));

export default function ProductFilter({ data }) {
    const [dataProduct, setDataProduct] = React.useState(data);
    const [category, setCategory] = React.useState([]);
    const [categoryId, setCategoryId] = React.useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchCategory() {
            await ApiHelper("category/all").then((res) => {
                setCategory(res.all_category);
            });
        }
        fetchCategory();
    }, []);

    async function changeTab(id) {
        dispatch(setLoading(true));
        let url = id
            ? "product/all?page=0&unPaged=false&size=8&sort=price,desc&category="
            : "product/all?page=0&unPaged=false&size=8&sort=price,desc";
        await ApiHelper(url + id).then((results) => {
            setDataProduct(results.product_list);
            dispatch(setLoading(false));
        });
    }

    return (
        <Tabs variant="soft-rounded" colorScheme="green" isLazy>
            <TabList className="flex-wrap">
                <Tab onClick={() => changeTab(null)}>Tất cả sản phẩm</Tab>
                {category.map((item, index) => (
                    <Tab key={index} onClick={() => changeTab(item.category_id)}>
                        {item.category_name}
                    </Tab>
                ))}
            </TabList>
            <TabPanels>
                <TabPanel>
                    <ProductGrid products={dataProduct} />
                </TabPanel>
                <TabPanel>
                    <ProductGrid products={dataProduct} />
                </TabPanel>
                <TabPanel>
                    <ProductGrid products={dataProduct} />
                </TabPanel>
                <TabPanel>
                    <ProductGrid products={dataProduct} />
                </TabPanel>
                <TabPanel>
                    <ProductGrid products={dataProduct} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
