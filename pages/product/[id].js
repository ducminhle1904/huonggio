/* eslint-disable @next/next/no-img-element */
import { StarIcon } from "@heroicons/react/solid";
import { NextSeo } from "next-seo";
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useDispatch } from "react-redux";
import { generateCurrency } from "../../helpers";
import { addToCart } from "../../stores/slices/cart";

export default function DetailProduct({ productDetail }) {
    const dispatch = useDispatch();
    const handleAddToCart = (product, event) => {
        event.preventDefault();
        dispatch(addToCart(product));
    };
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const handleLightbox = (index) => {
        setIsOpen(true);
        setPhotoIndex(index);
    };
    return (
        <>
            <NextSeo
                title={productDetail.product_name}
                description="Cửa hàng Ken chuyên các mặt hàng thời trang như quần áo, giày dép, phụ kiện trang sức, ..."
                openGraph={{
                    url: "https://ken-shop.vercel.app/",
                    title: "Ken Shopping",
                    description:
                        "Cửa hàng Ken chuyên các mặt hàng thời trang như quần áo, giày dép, phụ kiện trang sức, ...",
                }}
            />
            {isOpen && (
                <Lightbox
                    mainSrc={productDetail.image[photoIndex]}
                    nextSrc={productDetail.image[(photoIndex + 1) % productDetail.image.length]}
                    prevSrc={
                        productDetail.image[(photoIndex + productDetail.image.length - 1) % productDetail.image.length]
                    }
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + productDetail.image.length - 1) % productDetail.image.length)
                    }
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % productDetail.image.length)}
                />
            )}
            <div>
                <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
                    <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                            <div className="aspect-w-1 aspect-h-1" onClick={() => handleLightbox(0)}>
                                <img
                                    alt="Mobile Phone Stand"
                                    className="object-cover rounded-xl"
                                    src={productDetail.image[0]}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4 lg:mt-4">
                                {productDetail.image
                                    .filter((_, index) => index > 0)
                                    .map((image, index) => (
                                        <div
                                            className="aspect-w-1 aspect-h-1"
                                            key={index}
                                            onClick={() => handleLightbox(index + 1)}
                                        >
                                            <img
                                                alt="Mobile Phone Stand"
                                                className="object-cover rounded-xl"
                                                src={image}
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <div className="sticky top-[80px]">
                            <strong className="border border-blue-600 rounded-full tracking-wide px-3 font-medium py-0.5 text-xs bg-gray-100 text-blue-600">
                                {" "}
                                Pre Order{" "}
                            </strong>

                            <div className="flex justify-between mt-8">
                                <div className="max-w-[35ch]">
                                    <h1 className="text-2xl font-bold">{productDetail.product_name}</h1>

                                    <p className="mt-0.5 text-sm">Highest Rated Product</p>

                                    <div className="flex mt-2 -ml-0.5">
                                        <StarIcon className="h-5 w-5 flex-shrink-0" />
                                        <StarIcon className="h-5 w-5 flex-shrink-0" />
                                        <StarIcon className="h-5 w-5 flex-shrink-0" />
                                        <StarIcon className="h-5 w-5 flex-shrink-0" />
                                        <StarIcon className="h-5 w-5 flex-shrink-0" />
                                    </div>
                                </div>

                                <p className="text-lg font-bold">{generateCurrency(productDetail.price)}</p>
                            </div>

                            <details className="relative mt-4 group">
                                <summary className="block">
                                    <div>
                                        <div className="max-w-none">
                                            <span>{ReactHtmlParser(productDetail.product_description)}</span>
                                        </div>
                                    </div>
                                </summary>
                            </details>

                            <form className="mt-8">
                                <fieldset>
                                    <legend className="mb-1 text-sm font-medium">Color</legend>
                                    <div className="flow-root">
                                        <div className="flex flex-wrap -m-0.5">
                                            {productDetail.color.map((c) => {
                                                return (
                                                    <label htmlFor={c} className="cursor-pointer p-0.5" key={c}>
                                                        <input type="radio" name={c} id={c} className="sr-only peer" />
                                                        <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                                                            {c}
                                                        </span>
                                                    </label>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset className="mt-4">
                                    <legend className="mb-1 text-sm font-medium">Size</legend>

                                    <div className="flow-root">
                                        <div className="flex flex-wrap -m-0.5">
                                            <label htmlFor="size_xs" className="cursor-pointer p-0.5">
                                                <input type="radio" name="size" id="size_xs" className="sr-only peer" />

                                                <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                                                    XS
                                                </span>
                                            </label>

                                            <label htmlFor="size_s" className="cursor-pointer p-0.5">
                                                <input type="radio" name="size" id="size_s" className="sr-only peer" />

                                                <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                                                    S
                                                </span>
                                            </label>

                                            <label htmlFor="size_m" className="cursor-pointer p-0.5">
                                                <input type="radio" name="size" id="size_m" className="sr-only peer" />

                                                <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                                                    M
                                                </span>
                                            </label>

                                            <label htmlFor="size_l" className="cursor-pointer p-0.5">
                                                <input type="radio" name="size" id="size_l" className="sr-only peer" />

                                                <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                                                    L
                                                </span>
                                            </label>

                                            <label htmlFor="size_xl" className="cursor-pointer p-0.5">
                                                <input type="radio" name="size" id="size_xl" className="sr-only peer" />

                                                <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                                                    XL
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>

                                <div className="flex mt-8">
                                    <div>
                                        <label htmlFor="quantity" className="sr-only">
                                            Qty
                                        </label>

                                        {/*<input*/}
                                        {/*    type="number"*/}
                                        {/*    id="quantity"*/}
                                        {/*    min="1"*/}
                                        {/*    value="1"*/}
                                        {/*    className="w-12 py-3 text-xs text-center border-gray-200 rounded no-spinners"*/}
                                        {/*/>*/}
                                    </div>

                                    <button
                                        type="submit"
                                        className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
                                        onClick={() => handleAddToCart(productDetail, event)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps({ params: { id }, req, res }) {
    const baseUrl = "http://ken-shop.herokuapp.com/api/v1/";
    const url = baseUrl + "product/" + id;
    const product = await fetch(url).then((results) => results.json());
    return {
        props: {
            productDetail: product.product,
        },
    };
}
