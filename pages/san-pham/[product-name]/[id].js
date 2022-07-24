/* eslint-disable @next/next/no-img-element */
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useDispatch } from "react-redux";
import { generateCurrency } from "../../../helpers";
import { addToCart } from "../../../stores/slices/cart";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
import { ProductJsonLd } from "next-seo";
import ProductViewed from "../../../components/ProductViewed";
import { ApiAddRecently, ApiGetRecently } from "../../../helpers/apiHelper";
import { useRouter } from "next/router";

export default function DetailProduct({ productDetail }) {
    const dispatch = useDispatch();
    const router = useRouter();
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
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const getSize = (value) => {
        setSize(value);
    };
    const getColor = (value) => {
        setColor(value);
    };
    const [productViewed, setProductViewed] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        router.events.on("routeChangeComplete", async () => await ApiAddRecently(productDetail.product_id, token));
    }, [productDetail.product_id, router.events]);

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        ApiGetRecently(token).then((response) => {
            setProductViewed(response.recently_view);
        });
    }, []);

    return (
        <>
            <NextSeo
                title={productDetail.product_name}
                description={productDetail.product_description}
                openGraph={{
                    url: "https://huonggio.vercel.app/",
                    title: "Ken Shopping",
                    description:
                        "Cửa hàng Ken chuyên các mặt hàng thời trang như quần áo, giày dép, phụ kiện trang sức, ...",
                    images: [
                        {
                            url: `${productDetail.image[0]}`,
                            width: 800,
                            height: 600,
                            alt: `{productDetail.product_name}`,
                            type: "image/jpeg",
                        },
                    ],
                }}
            />
            <ProductJsonLd
                productName={productDetail.product_name}
                images={productDetail.images}
                description={productDetail.product_description}
                slogan="Đem đến sản phẩm tốt nhất cho bạn."
                reviews={[]}
                aggregateRating={{
                    ratingValue: `${productDetail.rating}`,
                    reviewCount: "89",
                }}
                offers={[
                    {
                        price: `${productDetail.price}`,
                        priceCurrency: "VND",
                        priceValidUntil: "2025-12-12",
                    },
                ]}
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
                            <strong
                                className={`border ${
                                    productDetail.quantity ? `border-green-600` : `border-red-600`
                                } rounded-full tracking-wide px-3 font-medium py-0.5 text-xs bg-gray-100 ${
                                    productDetail.quantity ? `text-green-600` : `text-red-600`
                                }`}
                            >
                                {productDetail.quantity > 0 ? "Còn hàng" : "Hết hàng"}
                            </strong>

                            <div className="mt-4">
                                <div className="w-full">
                                    <h1 className="text-2xl font-bold">{productDetail.product_name}</h1>
                                    <p className="text-lg font-bold">Giá: {generateCurrency(productDetail.price)}</p>

                                    <p className="mt-0.5 text-sm">Highest Rated Product</p>

                                    <div className="flex mt-2 -ml-0.5">
                                        <Rating
                                            initialRating={productDetail.rating}
                                            emptySymbol={<BsStar fill="#FDCC0D" />}
                                            fullSymbol={<BsStarFill fill="#FDCC0D" />}
                                            readonly
                                        />
                                    </div>
                                </div>
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
                                    <legend className="mb-1 text-sm font-medium">Màu sắc</legend>
                                    <div className="flow-root">
                                        <div className="flex flex-wrap -m-0.5 gap-3">
                                            {productDetail.color.map((item, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        onClick={() => getColor(item)}
                                                        id={item}
                                                        className={
                                                            "font-medium leading-4 text-gray-800 border px-3 py-1 w-20 text-center cursor-pointer text-xs rounded-full " +
                                                            (color === item ? "border-gray-800 " : "border-gray-200 ") +
                                                            (color === item ? "bg-black " : "bg-gray-200 ") +
                                                            (color === item ? "text-white" : "text-gray-700")
                                                        }
                                                    >
                                                        {item}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset className="mt-4">
                                    <legend className="mb-1 text-sm font-medium">Size</legend>

                                    <div className="flow-root">
                                        <div className="flex flex-wrap -m-0.5 gap-3">
                                            {productDetail.size?.map((item, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        onClick={() => getSize(item)}
                                                        id={item}
                                                        className={
                                                            "font-medium leading-4 text-gray-800 border px-3 py-1 w-20 text-center cursor-pointer text-xs rounded-full " +
                                                            (size === item ? "border-gray-500 " : "border-gray-200 ") +
                                                            (size === item ? "bg-black " : "bg-gray-200 ") +
                                                            (size === item ? "text-white" : "text-gray-700")
                                                        }
                                                    >
                                                        {item}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </fieldset>

                                <div className="flex mt-8">
                                    <button
                                        type="submit"
                                        className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
                                        onClick={() => handleAddToCart(productDetail, event)}
                                    >
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {productViewed ? <ProductViewed data={productViewed} /> : null}
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps({ params: { id } }) {
    const baseUrl = "http://ken-shop.herokuapp.com/api/v1/";
    const url = baseUrl + "product/" + id;
    const product = await fetch(url).then((results) => results.json());
    return {
        props: {
            productDetail: product.product,
        },
    };
}
