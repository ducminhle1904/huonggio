import {
    Button,
    Checkbox,
    CheckboxGroup,
    IconButton,
    Menu,
    MenuButton,
    MenuItemOption,
    MenuList,
    MenuOptionGroup,
    Stack,
} from "@chakra-ui/react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import {
    ChevronDownIcon,
    FilterIcon,
    MinusSmIcon,
    PlusSmIcon,
    ViewGridIcon,
    ViewListIcon,
} from "@heroicons/react/solid";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProductList from "../../components/ProductList";
import { ApiHelper, ApiProductHelper } from "../../helpers/apiHelper";
import { setLoading } from "../../stores/slices/loading";

const ProductGrid = dynamic(() => import("../../components/ProductGrid"));

export default function AllProduct({ data, categoryName }) {
    const [products, setProducts] = useState(data);
    const [viewMode, setViewMode] = useState(true);
    const dispatch = useDispatch();

    const sortProduct = async (sortBy) => {
        let data = [];
        dispatch(setLoading(true));
        if (sortBy === "lowtohigh") {
            data = await ApiProductHelper(0, 100, "price", "ASC").then((response) => response);
        }
        if (sortBy === "hightolow") {
            data = await ApiProductHelper(0, 100, "price", "DESC").then((response) => response);
        }
        if (sortBy === "created") {
            data = await ApiProductHelper(0, 100, "created_at", "DESC").then((response) => response);
        }
        if (sortBy === "rating") {
            data = await ApiProductHelper(0, 100, "product_review_point", "DESC").then((response) => response);
        }
        if (sortBy === "sold_quantity") {
            data = await ApiProductHelper(0, 100, "sold_quantity", "DESC").then((response) => response);
        }
        dispatch(setLoading(false));
        setProducts(data.product_list);
    };
    return (
        <>
            <NextSeo title={`Sản phẩm dành cho ${categoryName}`} />
            <div className="bg-white">
                <div>
                    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative z-10 flex items-baseline justify-between pt-12 pb-6 border-b border-gray-200">
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                                Danh mục sản phẩm: {categoryName}
                            </h1>

                            <div className="flex items-center gap-3">
                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        rightIcon={
                                            <ChevronDownIcon
                                                className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true"
                                            />
                                        }
                                    >
                                        Sắp xếp
                                    </MenuButton>
                                    <MenuList>
                                        <MenuOptionGroup
                                            onChange={(value) => sortProduct(value)}
                                            defaultValue="sold_quantity"
                                        >
                                            <MenuItemOption value="sold_quantity">Phổ Biến</MenuItemOption>
                                            <MenuItemOption value="rating">Đánh Giá Cao</MenuItemOption>
                                            <MenuItemOption value="created">Mới Nhất</MenuItemOption>
                                            <MenuItemOption value="lowtohigh">Giá: Thấp đến cao</MenuItemOption>
                                            <MenuItemOption value="hightolow">Giá: Cao đến thấp</MenuItemOption>
                                        </MenuOptionGroup>
                                    </MenuList>
                                </Menu>

                                <IconButton
                                    aria-label="Search database"
                                    icon={
                                        viewMode ? (
                                            <ViewListIcon className="w-5 h-5" aria-hidden="true" />
                                        ) : (
                                            <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
                                        )
                                    }
                                    onClick={() => setViewMode(!viewMode)}
                                />
                                <button
                                    type="button"
                                    className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                                    onClick={() => setMobileFiltersOpen(true)}
                                >
                                    <span className="sr-only">Filters</span>
                                    <FilterIcon className="w-5 h-5" aria-hidden="true" />
                                </button>
                            </div>
                        </div>

                        <section aria-labelledby="products-heading" className="pt-3 pb-24">
                            <h2 id="products-heading" className="sr-only">
                                Products
                            </h2>

                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                                {/* Product grid */}
                                <div className="lg:col-span-4">
                                    {/* Replace with your content */}
                                    {viewMode ? (
                                        <ProductGrid products={products} />
                                    ) : (
                                        <ProductList products={products} />
                                    )}

                                    {/* /End replace */}
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}

export const getServerSideProps = async ({ params: { name } }) => {
    const data = await ApiProductHelper(0, 100, "price", "DESC", name).then((res) => res);
    return {
        props: {
            data: data.product_list,
            categoryName: name,
        },
    };
};
