import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeItem, getTotals } from "../stores/slices/cart";
import Link from "next/link";
import Router from "next/router";
import { PlusSmIcon, MinusSmIcon } from "@heroicons/react/outline";
import { IconButton } from "@chakra-ui/react";

export default function CartSlideOver() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const increaseAmount = (item) => {
        dispatch(increaseQuantity(item));
    };

    const decreaseAmount = (item) => {
        dispatch(decreaseQuantity(item));
    };

    const removeProduct = (item) => {
        dispatch(removeItem(item));
    };
    return (
        <>
            {cart.cart.length === 0 ? (
                <Alert status="error">
                    <AlertIcon />
                    <AlertTitle>Uhh Oh !!!</AlertTitle>
                    <AlertDescription>Giỏ hàng của bạn đang trống</AlertDescription>
                </Alert>
            ) : (
                <>
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div>
                            <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                    {cart.cart.map((product) => (
                                        <li key={product.product_id} className="flex py-6">
                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden">
                                                <Image
                                                    src={product.image[0]}
                                                    alt={product.title}
                                                    width={150}
                                                    height={150}
                                                    objectFit="contain"
                                                />
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>
                                                            <a href={product.href}> {product.product_name} </a>
                                                        </h3>
                                                        <p className="ml-4">
                                                            {product.price.toLocaleString("it-IT", {
                                                                style: "currency",
                                                                currency: "VND",
                                                            })}
                                                        </p>
                                                    </div>
                                                    <div className="flex my-2">
                                                        <IconButton
                                                            aria-label="minus"
                                                            icon={<MinusSmIcon />}
                                                            size="xs"
                                                            onClick={() => decreaseAmount(product)}
                                                        />
                                                        <span
                                                            className="w-8 flex items-center justify-center"
                                                            type="text"
                                                        >
                                                            {product.quantity}
                                                        </span>
                                                        <IconButton
                                                            aria-label="plus"
                                                            icon={<PlusSmIcon />}
                                                            size="xs"
                                                            onClick={() => increaseAmount(product)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                    <p className="text-gray-500 font-bold">
                                                        Số lượng: {product.quantity}
                                                    </p>

                                                    <div className="flex">
                                                        <button
                                                            type="button"
                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                            onClick={() => removeProduct(product)}
                                                        >
                                                            Xóa bỏ
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Tạm tính</p>
                            <p>
                                {cart.cartTotalAmount.toLocaleString("it-IT", {
                                    style: "currency",
                                    currency: "VND",
                                })}
                            </p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Tiền ship sẽ tính ở trang thanh toán.</p>
                        <div className="mt-6">
                            <Link href="/checkout" passHref>
                                <a className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                    Đến tranh thanh toán
                                </a>
                            </Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                hoặc{" "}
                                <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                    onClick={() => Router.push("/products")}
                                >
                                    Tiếp tục mua sắm<span aria-hidden="true"> &rarr;</span>
                                </button>
                            </p>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
