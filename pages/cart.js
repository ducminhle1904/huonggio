import { Button } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { decreaseQuantity, increaseQuantity, removeItem, getTotals } from "../stores/slices/cart";
import { PlusSmIcon, MinusSmIcon } from "@heroicons/react/outline";
import { IconButton } from "@chakra-ui/react";
import { generateCurrency } from "../helpers";

function Index() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const removeProduct = (item) => {
        dispatch(removeItem(item));
    };

    const increaseAmount = (item) => {
        dispatch(increaseQuantity(item));
    };

    const decreaseAmount = (item) => {
        dispatch(decreaseQuantity(item));
    };

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row shadow-2xl my-10">
                    <div
                        className={`w-full ${
                            cart.cart.length === 0 ? `lg:w-full` : `lg:w-3/4`
                        } bg-white px-5 py-5 lg:px-10 lg:py-10`}
                    >
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">{cart.cart.length} Items</h2>
                        </div>
                        {cart.cart.length === 0 ? (
                            <div className="text-center">
                                <h1 className="text-3xl">Giỏ hàng của bạn đang trống</h1>
                                <Link href="/products">
                                    <Button className="mt-4 mx-auto block" colorScheme="teal" size="lg">
                                        Quay lại mua hàng
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <>
                                <div className="flex mt-10 mb-5">
                                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                                        Product Details
                                    </h3>
                                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                                        Quantity
                                    </h3>
                                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                                        Price
                                    </h3>
                                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                                        Total
                                    </h3>
                                </div>

                                {cart.cart.map((item) => (
                                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={item.id}>
                                        <div className="flex w-2/5">
                                            <div className="min-w-fit">
                                                <Image
                                                    className="h-24"
                                                    width={150}
                                                    height={150}
                                                    objectFit="contain"
                                                    src={item.image[0]}
                                                    alt={item.product_name}
                                                />
                                            </div>
                                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                                <span className="font-bold text-sm">{item.product_name}</span>
                                                {item.category.map((category) => (
                                                    <span className="text-xs text-gray-600" key={category.category_id}>
                                                        {category.category_name}
                                                    </span>
                                                ))}
                                                <span
                                                    className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                                                    onClick={() => removeProduct(item)}
                                                >
                                                    Remove
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex justify-center w-1/5">
                                            <IconButton
                                                aria-label="minus"
                                                icon={<MinusSmIcon />}
                                                size="sm"
                                                onClick={() => decreaseAmount(item)}
                                            />
                                            <span
                                                className="mx-2 border w-8 flex items-center justify-center"
                                                type="text"
                                            >
                                                {item.quantity}
                                            </span>
                                            <IconButton
                                                aria-label="plus"
                                                icon={<PlusSmIcon />}
                                                size="sm"
                                                onClick={() => increaseAmount(item)}
                                            />
                                        </div>
                                        <span className="text-center w-1/5 font-semibold text-sm">
                                            {generateCurrency(item.price)}
                                        </span>
                                        <span className="text-center w-1/5 font-semibold text-sm">
                                            {generateCurrency(item.quantity * item.price)}
                                        </span>
                                    </div>
                                ))}

                                <Link href="/products" passHref>
                                    <a className="flex font-semibold text-indigo-600 text-sm mt-10">
                                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                                        </svg>
                                        Continue Shopping
                                    </a>
                                </Link>
                            </>
                        )}
                    </div>

                    {cart.cart.length > 0 ? (
                        <div id="summary" className="w-full lg:w-1/4 px-8 py-10">
                            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                            <div className="flex justify-between mt-10 mb-5">
                                <span className="font-semibold text-sm uppercase">Items {cart.cart.length}</span>
                                <span className="font-semibold text-sm">{generateCurrency(cart.cartTotalAmount)}</span>
                            </div>
                            <div>
                                <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                                <select className="block p-2 text-gray-600 w-full text-sm">
                                    <option>Standard shipping - 10000đ</option>
                                </select>
                            </div>
                            <div className="py-10">
                                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">
                                    Promo Code
                                </label>
                                <input
                                    type="text"
                                    id="promo"
                                    placeholder="Enter your code"
                                    className="p-2 text-sm w-full"
                                />
                            </div>
                            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                                Apply
                            </button>
                            <div className="border-t mt-8">
                                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                    <span>Total cost</span>
                                    <span>{generateCurrency(cart.cartTotalAmount + 10000)}</span>
                                </div>
                                <Link href="/checkout">
                                    <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                                        Checkout
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Index;
