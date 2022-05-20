import { Button, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { NextSeo } from "next-seo";

function Index() {
    const [show, setShow] = useState(false);
    return (
        <>
            <NextSeo
                title="Shopping Cart"
                description="Cửa hàng Ken chuyên các mặt hàng thời trang như quần áo, giày dép, phụ kiện trang sức, ..."
                openGraph={{
                    url: "https://ken-shop.vercel.app/",
                    title: "Ken Shopping",
                    description:
                        "Cửa hàng Ken chuyên các mặt hàng thời trang như quần áo, giày dép, phụ kiện trang sức, ...",
                }}
            />
            <div>
                <div className="max-w-7xl mx-auto h-full" id="chec-div">
                    <div
                        className="w-full z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
                        id="checkout"
                    >
                        <div className="flex md:flex-row flex-col justify-end" id="cart">
                            <div
                                className="lg:w-1/2 w-full md:pl-10 px-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                                id="scroll"
                            >
                                <div
                                    className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
                                    onClick={() => setShow(!show)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-chevron-left"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="15 6 9 12 15 18" />
                                    </svg>
                                    <p className="text-sm pl-2 leading-none">Back</p>
                                </div>
                                <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Bag</p>
                                <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                                    <div className="w-1/4">
                                        <img
                                            src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png"
                                            alt="true"
                                            className="w-full h-full object-center object-cover"
                                        />
                                    </div>
                                    <div className="md:pl-3 md:w-3/4">
                                        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
                                        <div className="flex items-center justify-between w-full pt-1">
                                            <p className="text-base font-black leading-none text-gray-800">
                                                North wolf bag
                                            </p>
                                            <Stack direction="row" spacing={4} alignItems="center">
                                                <Button colorScheme="red" variant="solid">
                                                    <MinusIcon width={20} />
                                                </Button>
                                                <span>1</span>
                                                <Button colorScheme="teal" variant="solid">
                                                    <PlusIcon width={20} />
                                                </Button>
                                            </Stack>
                                        </div>
                                        <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                                        <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                                        <p className="w-96 text-xs leading-3 text-gray-600">
                                            Composition: 100% calf leather
                                        </p>
                                        <div className="flex items-center justify-between pt-5 pr-6">
                                            <div className="flex items-center gap-3">
                                                <Button colorScheme="blue" size="xs">
                                                    Add to Favorite
                                                </Button>
                                                <Button colorScheme="red" size="xs">
                                                    Remove
                                                </Button>
                                            </div>
                                            <p className="text-base font-black leading-none text-gray-800">$9,000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:flex items-center py-8 border-t border-gray-200">
                                    <div className="w-1/4">
                                        <img
                                            src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller2.png"
                                            alt="true"
                                            className="w-full h-full object-center object-cover"
                                        />
                                    </div>
                                    <div className="md:pl-3 md:w-3/4 w-full">
                                        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
                                        <div className="flex items-center justify-between w-full pt-1">
                                            <p className="text-base font-black leading-none text-gray-800">
                                                Luxe Signature Ring
                                            </p>
                                            <Stack direction="row" spacing={4} alignItems="center">
                                                <Button colorScheme="red" variant="solid">
                                                    <MinusIcon width={20} />
                                                </Button>
                                                <span>1</span>
                                                <Button colorScheme="teal" variant="solid">
                                                    <PlusIcon width={20} />
                                                </Button>
                                            </Stack>
                                        </div>
                                        <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                                        <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                                        <p className="w-96 text-xs leading-3 text-gray-600">
                                            Composition: 100% calf leather
                                        </p>
                                        <div className="flex items-center justify-between pt-5 pr-6">
                                            <div className="flex items-center gap-3">
                                                <Button colorScheme="blue" size="xs">
                                                    Add to Favorite
                                                </Button>
                                                <Button colorScheme="red" size="xs">
                                                    Remove
                                                </Button>
                                            </div>
                                            <p className="text-base font-black leading-none text-gray-800">$9,000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:flex items-center py-8 border-t border-b border-gray-200">
                                    <div className="h-full w-1/4">
                                        <img
                                            src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller1.png"
                                            alt="true"
                                            className="w-full h-full object-center object-cover"
                                        />
                                    </div>
                                    <div className="md:pl-3 md:w-3/4 w-full">
                                        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
                                        <div className="flex items-center justify-between w-full pt-1">
                                            <p className="text-base font-black leading-none text-gray-800">
                                                Luxe Signature Shoes
                                            </p>
                                            <Stack direction="row" spacing={4} alignItems="center">
                                                <Button colorScheme="red" variant="solid">
                                                    <MinusIcon width={20} />
                                                </Button>
                                                <span>1</span>
                                                <Button colorScheme="teal" variant="solid">
                                                    <PlusIcon width={20} />
                                                </Button>
                                            </Stack>
                                        </div>
                                        <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                                        <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                                        <p className="w-96 text-xs leading-3 text-gray-600">
                                            Composition: 100% calf leather
                                        </p>
                                        <div className="flex items-center justify-between pt-5 pr-6">
                                            <div className="flex items-center gap-3">
                                                <Button colorScheme="blue" size="xs">
                                                    Add to Favorite
                                                </Button>
                                                <Button colorScheme="red" size="xs">
                                                    Remove
                                                </Button>
                                            </div>
                                            <p className="text-base font-black leading-none text-gray-800">$9,000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:w-1/2 w-full bg-gray-100 h-full">
                                <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                    <div>
                                        <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                                        <div className="flex items-center justify-between pt-16">
                                            <p className="text-base leading-none text-gray-800">Subtotal</p>
                                            <p className="text-base leading-none text-gray-800">$9,000</p>
                                        </div>
                                        <div className="flex items-center justify-between pt-5">
                                            <p className="text-base leading-none text-gray-800">Shipping</p>
                                            <p className="text-base leading-none text-gray-800">$30</p>
                                        </div>
                                        <div className="flex items-center justify-between pt-5">
                                            <p className="text-base leading-none text-gray-800">Tax</p>
                                            <p className="text-base leading-none text-gray-800">$35</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                            <p className="text-2xl leading-normal text-gray-800">Total</p>
                                            <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                                                $10,240
                                            </p>
                                        </div>
                                        <Link href="/checkout">
                                            <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                Checkout
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style>
        </>
    );
}

export default Index;
