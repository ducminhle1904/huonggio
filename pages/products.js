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
import ProductList from "../components/ProductList";
import { ApiHelper } from "../helpers";
import { setLoading } from "../stores/slices/loading";

const ProductGrid = dynamic(() => import("../components/ProductGrid"));
const filters = [
    {
        id: "color",
        name: "Màu sắc",
        options: [
            { value: "white", label: "White", checked: false },
            { value: "beige", label: "Beige", checked: false },
            { value: "blue", label: "Blue", checked: true },
            { value: "brown", label: "Brown", checked: false },
            { value: "green", label: "Green", checked: false },
            { value: "purple", label: "Purple", checked: false },
        ],
    },
    {
        id: "size",
        name: "Size",
        options: [
            { value: "SMALL", label: "S", checked: false },
            { value: "MEDIUM", label: "M", checked: false },
            { value: "LARGE", label: "L", checked: false },
            { value: "XLARGE", label: "XL", checked: false },
            { value: "X2_LARGE", label: "2XL", checked: false },
            { value: "X3_LARGE", label: "3XL", checked: true },
        ],
    },
];

export default function AllProduct({ data }) {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [products, setProducts] = useState(data);
    const [viewMode, setViewMode] = useState(true);
    const [category, setCategory] = React.useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchCategory() {
            await ApiHelper("category/all").then((res) => {
                setCategory(res.all_category);
            });
        }
        fetchCategory();
    }, []);

    const sortProduct = async (sortBy) => {
        let url = "";
        let data = [];
        dispatch(setLoading(true));
        if (sortBy === "lowtohigh") {
            url = "product/all?page=0&size=100&sort=price&direction=DESC";
            data = await ApiHelper(url).then((response) => response);
        }
        if (sortBy === "hightolow") {
            url = "product/all?page=0&size=100&sort=price&direction=DESC";
            data = await ApiHelper(url).then((response) => response);
        }
        if (sortBy === "created") {
            url = "product/all?page=0&size=100&sort=created_at&direction=DESC";
            data = await ApiHelper(url).then((response) => response);
        }
        if (sortBy === "rating") {
            url = "product/all?page=0&size=100&sort=product_review_point&direction=DESC";
            data = await ApiHelper(url).then((response) => response);
        }
        if (sortBy === "sold_quantity") {
            url = "product/all?page=0&size=100&sort=sold_quantity&direction=DESC";
            data = await ApiHelper(url).then((response) => response);
        }
        dispatch(setLoading(false));
        setProducts(data.product_list);
    };
    return (
        <>
            <NextSeo title="All Products" />
            <div className="bg-white">
                <div>
                    {/* Mobile filter dialog */}
                    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                            <Transition.Child
                                as={Fragment}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 flex z-40">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transition ease-in-out duration-300 transform"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transition ease-in-out duration-300 transform"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                                        <div className="px-4 flex items-center justify-between">
                                            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                            <button
                                                type="button"
                                                className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                                                onClick={() => setMobileFiltersOpen(false)}
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>

                                        {/* Filters */}
                                        <form className="mt-4 border-t border-gray-200">
                                            <h3 className="sr-only">Categories</h3>
                                            <CheckboxGroup
                                                colorScheme="green"
                                                defaultValue={["All"]}
                                                onChange={(value) => console.log(value)}
                                            >
                                                <Stack
                                                    spacing={[1, 5]}
                                                    direction={["column"]}
                                                    paddingX="1rem"
                                                    paddingY="1.5rem"
                                                >
                                                    {category.map((item) => (
                                                        <Checkbox value={item.category_name} key={item.category_id}>
                                                            {item.category_name}
                                                        </Checkbox>
                                                    ))}
                                                </Stack>
                                            </CheckboxGroup>

                                            {filters.map((section) => (
                                                <Disclosure
                                                    as="div"
                                                    key={section.id}
                                                    className="border-t border-gray-200 px-4 py-6"
                                                >
                                                    {({ open }) => (
                                                        <>
                                                            <h3 className="-mx-2 -my-3 flow-root">
                                                                <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                                                    <span className="font-medium text-gray-900">
                                                                        {section.name}
                                                                    </span>
                                                                    <span className="ml-6 flex items-center">
                                                                        {open ? (
                                                                            <MinusSmIcon
                                                                                className="h-5 w-5"
                                                                                aria-hidden="true"
                                                                            />
                                                                        ) : (
                                                                            <PlusSmIcon
                                                                                className="h-5 w-5"
                                                                                aria-hidden="true"
                                                                            />
                                                                        )}
                                                                    </span>
                                                                </Disclosure.Button>
                                                            </h3>
                                                            <Disclosure.Panel className="pt-6">
                                                                <div className="space-y-6">
                                                                    {section.options.map((option, optionIdx) => (
                                                                        <div
                                                                            key={option.value}
                                                                            className="flex items-center"
                                                                        >
                                                                            <input
                                                                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                                name={`${section.id}[]`}
                                                                                defaultValue={option.value}
                                                                                type="checkbox"
                                                                                defaultChecked={option.checked}
                                                                                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                                            />
                                                                            <label
                                                                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                                className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                            >
                                                                                {option.label}
                                                                            </label>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </Disclosure.Panel>
                                                        </>
                                                    )}
                                                </Disclosure>
                                            ))}
                                        </form>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition.Root>

                    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative z-10 flex items-baseline justify-between pt-12 pb-6 border-b border-gray-200">
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">New Arrivals</h1>

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
                                        Sort
                                    </MenuButton>
                                    <MenuList>
                                        <MenuOptionGroup
                                            onChange={(value) => sortProduct(value)}
                                            defaultValue="popular"
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

                        <section aria-labelledby="products-heading" className="pt-6 pb-24">
                            <h2 id="products-heading" className="sr-only">
                                Products
                            </h2>

                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                                {/* Filters */}
                                <form className="hidden lg:block">
                                    <h3 className="sr-only">Categories</h3>
                                    <CheckboxGroup
                                        colorScheme="green"
                                        defaultValue={["All"]}
                                        onChange={(value) => console.log(value)}
                                    >
                                        <Stack spacing={[1, 5]} direction={["column"]}>
                                            {category.map((item) => (
                                                <Checkbox value={item.category_name} key={item.category_id}>
                                                    {item.category_name}
                                                </Checkbox>
                                            ))}
                                        </Stack>
                                    </CheckboxGroup>

                                    {filters.map((section) => (
                                        <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                                            {({ open }) => (
                                                <>
                                                    <h3 className="-my-3 flow-root">
                                                        <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                                            <span className="font-medium text-gray-900">
                                                                {section.name}
                                                            </span>
                                                            <span className="ml-6 flex items-center">
                                                                {open ? (
                                                                    <MinusSmIcon
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <PlusSmIcon
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-4">
                                                            {section.options.map((option, optionIdx) => (
                                                                <div key={option.value} className="flex items-center">
                                                                    <Checkbox
                                                                        colorScheme="teal"
                                                                        defaultChecked={option.checked}
                                                                        id={`filter-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}[]`}
                                                                        defaultValue={option.value}
                                                                    >
                                                                        {option.label}
                                                                    </Checkbox>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </form>

                                {/* Product grid */}
                                <div className="lg:col-span-3">
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

export const getStaticProps = async () => {
    const allProductPath = "product/all";
    const data = await ApiHelper(allProductPath).then((res) => res);
    return {
        props: {
            data: data.product_list,
        },
        // revalidate in 15 minutes
        revalidate: 15 * 60,
    };
};
