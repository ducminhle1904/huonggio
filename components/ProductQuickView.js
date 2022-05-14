import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Banner from "./Banner";

const ProductQuickView = ({ data }) => {
    const [color, setColor] = useState("White");
    const [size, setSize] = useState("");
    const [slide, setSlide] = useState(true);

    const slideToggle = () => setSlide(!slide);

    const getColor = (value) => {
        setColor(value);
    };

    const getSize = (value) => {
        setSize(value);
    };

    return (
        <div>
            <div className="2xl:container 2xl:mx-auto relative flex justify-start w-full item-start flex-col lg:flex-row lg:space-x-8 pb-8 bg-white">
                <div className="w-full lg:w-1/2">
                    <div className="relative">
                        <div>
                            <Banner />
                        </div>
                        <div className=" transition duration-150 absolute bottom-0 w-full h-full flex justify-between items-center px-4">
                            <button
                                onClick={slideToggle}
                                aria-label="previous"
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center"
                            >
                                <ChevronLeftIcon className="text-gray-500 h-10 w-h-10" />
                            </button>
                            <button
                                onClick={slideToggle}
                                aria-label="Next"
                                className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center"
                            >
                                <ChevronRightIcon className="text-gray-500 h-10 w-h-10" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-6 md:mt-8 lg:mt-0 flex justify-start items-start w-full lg:w-1/2 flex-col">
                    <h2 className=" lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 font-semibold">
                        {data.title}
                    </h2>
                    <div className=" flex justify-start items-center mt-4">
                        <p className="font-normal text-lg leading-6 text-gray-600 mr-4">Price: ${data.price}</p>
                        <div className="cursor-pointer flex space-x-2 mr-3">
                            <StarIcon className="text-gray-500 h-6 w-6" />
                            <StarIcon className="text-gray-500 h-6 w-6" />
                            <StarIcon className="text-gray-500 h-6 w-6" />
                            <StarIcon className="text-gray-500 h-6 w-6" />
                            <StarIcon className="text-gray-500 h-6 w-6" />
                        </div>
                        <p className=" font-normal text-sm leading-3 hover:text-gray-700 duration-100 cursor-pointer text-gray-500 underline">
                            18 reviews
                        </p>
                    </div>
                    <div className="  mt-10">
                        <p id="text" className=" font-semibold text-base leading-4 text-gray-800">
                            {color}
                        </p>
                        <div className=" flex space-x-2 mt-4">
                            <div
                                tabIndex="0"
                                onClick={() => getColor("White")}
                                className="focus:outline-none ring-1 ring-offset-2 ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-gray-50"
                            ></div>
                            <div
                                tabIndex="0"
                                onClick={() => getColor("Red")}
                                className="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-red-700"
                            ></div>
                            <div
                                tabIndex="0"
                                onClick={() => getColor("Yellow")}
                                className="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-yellow-300"
                            ></div>
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
                            <div
                                onClick={() => getSize("XS")}
                                id="XS"
                                className={
                                    "font-medium text-base leading-4 text-gray-800 border  py-3 w-20 text-center cursor-pointer " +
                                    (size === "XS" ? "border-gray-500" : "border-gray-200")
                                }
                            >
                                XS
                            </div>
                            <div
                                onClick={() => getSize("S")}
                                id="S"
                                className={
                                    "font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " +
                                    (size === "S" ? "border-gray-500" : "border-gray-200")
                                }
                            >
                                S
                            </div>
                            <div
                                onClick={() => getSize("M")}
                                id="M"
                                className={
                                    "font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " +
                                    (size === "M" ? "border-gray-500" : "border-gray-200")
                                }
                            >
                                M
                            </div>
                            <div
                                onClick={() => getSize("L")}
                                id="L"
                                className={
                                    "font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " +
                                    (size === "L" ? "border-gray-500" : "border-gray-200")
                                }
                            >
                                L
                            </div>
                            <div
                                onClick={() => getSize("XL")}
                                id="XL"
                                className={
                                    "font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " +
                                    (size === "XL" ? "border-gray-500" : "border-gray-200")
                                }
                            >
                                XL
                            </div>
                        </div>
                    </div>
                    <p className=" mt-4 mb-4 font-normal text-sm leading-3 text-gray-500 hover:text-gray-600 duration-100 underline cursor-pointer">
                        Find the perfect size?
                    </p>

                    <div className="flex flex-col w-full mt-auto gap-2 md:items-center">
                        <button className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:w-96 w-full hover:bg-black text-base font-medium leading-4 bg-gray-800 py-4 text-white">
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
