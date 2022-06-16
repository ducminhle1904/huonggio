import Link from "next/link";
import { useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import Rating from "react-rating";
import { useDispatch } from "react-redux";
import { generateCurrency } from "../helpers";
import { addToCart } from "../stores/slices/cart";
import Slider from "./Common/Slider";

const ProductQuickView = ({ data }) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    const getColor = (value) => {
        setColor(value);
    };

    const getSize = (value) => {
        setSize(value);
    };

    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div>
            <div className="2xl:container 2xl:mx-auto relative flex justify-start w-full item-start flex-col lg:flex-row lg:space-x-8 pb-8 bg-white">
                <div className="w-full lg:w-1/2">
                    <div className="relative">
                        <div className="w-full h-[50vh] text-center">
                            <Slider data={data.image} objectFit="contain" />
                        </div>
                    </div>
                </div>
                <div className="mt-6 md:mt-8 lg:mt-0 flex justify-start items-start w-full lg:w-1/2 flex-col">
                    <Link href={`/product/${data.product_id}`}>
                        <h2 className=" lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 font-semibold cursor-pointer">
                            {data.product_name}
                        </h2>
                    </Link>
                    <div className="cursor-pointer flex space-x-2 mr-3">
                        <Rating
                            initialRating={data.rating}
                            emptySymbol={<BsStar fill="#FDCC0D" />}
                            fullSymbol={<BsStarFill fill="#FDCC0D" />}
                            readonly
                        />
                    </div>
                    <div className=" flex justify-start items-center mt-4">
                        <p className="font-normal text-lg leading-6 text-gray-600 mr-4">
                            Price: {generateCurrency(data.price)}
                        </p>

                        <p className=" font-normal text-sm leading-3 hover:text-gray-700 duration-100 cursor-pointer text-gray-500 underline">
                            18 reviews
                        </p>
                    </div>
                    <div className="  mt-10">
                        <p id="text" className=" font-semibold text-base leading-4 text-gray-800">
                            Màu sắc: {color}
                        </p>
                        <div className=" flex space-x-2 mt-4">
                            {data.color?.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => getColor(item)}
                                    id={item}
                                    className={
                                        "font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " +
                                        (color === item ? "border-gray-500 " : "border-gray-200 ") +
                                        (color === item ? "bg-black " : "bg-gray-200 ") +
                                        (color === item ? "text-white" : "text-gray-700")
                                    }
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=" mt-10 w-full">
                        <div className=" flex justify-between">
                            <p className="font-semibold text-base leading-4 text-gray-800">Size</p>
                            <p className="cursor-pointer hover:text-gray-800 font-medium text-base leading-4 text-gray-500 underline">
                                Size guide
                            </p>
                        </div>
                        <div className=" grid grid-cols-3 gap-7 sm:flex sm:flex-wrap md:gap-4 sm:justify-between lg:justify-start mt-4">
                            {data.size?.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => getSize(item)}
                                    id={item}
                                    className={
                                        "font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " +
                                        (size === item ? "border-gray-500 " : "border-gray-200 ") +
                                        (size === item ? "bg-black " : "bg-gray-200 ") +
                                        (size === item ? "text-white" : "text-gray-700")
                                    }
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className=" mt-4 mb-4 font-normal text-sm leading-3 text-gray-500 hover:text-gray-600 duration-100 underline cursor-pointer">
                        Find the perfect size?
                    </p>

                    <div className="flex flex-col w-full mt-auto gap-2 md:items-center">
                        <button
                            className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:w-96 w-full hover:bg-black text-base font-medium leading-4 bg-gray-800 py-4 text-white"
                            onClick={() => handleAddToCart(data)}
                        >
                            Add to Bag
                        </button>
                        <button className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:w-96 w-full hover:bg-gray-300 text-base font-medium leading-4 text-gray-800 py-4 bg-white">
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductQuickView;
