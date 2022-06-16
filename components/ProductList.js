/* eslint-disable @next/next/no-img-element */
import { Button, Progress } from "@chakra-ui/react";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import { BsStar, BsStarFill } from "react-icons/bs";
import Rating from "react-rating";
import { useDispatch, useSelector } from "react-redux";
import { generateCurrency } from "../helpers";
import { addToCart } from "../stores/slices/cart";

export default function ProductList({ products }) {
    const isLoading = useSelector((state) => state.loading.loading);
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    return (
        <div className="bg-white">
            <div className="mx-auto lg:max-w-7xl">
                {isLoading ? (
                    <Progress size="xs" isIndeterminate />
                ) : (
                    <div className="mt-6">
                        {products.map((product) => (
                            <div
                                className="flex gap-5 shadow-md rounded-xl overflow-hidden p-4 my-6 md:p-8"
                                key={product.product_id}
                            >
                                <figure className="w-[30%]">
                                    <img
                                        src={product?.image[0]}
                                        alt={product.product_name}
                                        className="w-full object-contain"
                                    />
                                </figure>
                                <div className="card-body w-[70%] flex flex-col justify-around">
                                    <Link href={`/product/${product.product_id}`}>
                                        <h2 className="font-bold text-lg cursor-pointer">{product.product_name}</h2>
                                    </Link>
                                    <Rating
                                        initialRating={product.rating}
                                        emptySymbol={<BsStar fill="#FDCC0D" />}
                                        fullSymbol={<BsStarFill fill="#FDCC0D" />}
                                        readonly
                                    />
                                    <span className="text-sm">Giá: {generateCurrency(product.price)}</span>
                                    <p className="text-sm line-clamp">{ReactHtmlParser(product.product_description)}</p>
                                    <div className="mt-4">
                                        <Button colorScheme="teal" onClick={() => handleAddToCart(product)}>
                                            Thêm vào giỏ hàng
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
