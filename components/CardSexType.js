import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import { Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function CardSexType() {
    return (
        <>
            <Heading className="text-center">CATEGORIES</Heading>
            <div className="mx-auto container py-12 px-4 md:px-6 2xl:px-0 flex justify-center items-center">
                <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-6 lg:space-y-0">
                    <div className="relative">
                        <img
                            className="hidden lg:block"
                            src="https://i.ibb.co/XXKZ7Pt/Group-1785.png"
                            alt="table-chair"
                        />
                        <img
                            className="hidden sm:block lg:hidden"
                            src="https://i.ibb.co/KK7Vn9n/Group-1785-1.png"
                            alt="table-chair"
                        />
                        <img className="sm:hidden" src="https://i.ibb.co/F0T98KC/Group-1785.png" alt="table-chair" />
                        <div className="absolute bottom-4 sm:bottom-10 inset-x-4 sm:inset-x-10 p-6 bg-white flex flex-col justify-start items-start">
                            <div>
                                <p className="text-2xl font-semibold leading-6 text-gray-800">Dành Cho Nam</p>
                            </div>
                            <div className="mt-2">
                                <p className="text-base leading-6 sm:leading-4 text-gray-600">
                                    Quần áo, phụ kiện dành cho nam
                                </p>
                            </div>
                            <div className="mt-6">
                                <div className="flex justify-between items-center space-x-2">
                                    <a
                                        className="text-base font-medium leading-none hover:underline text-gray-800"
                                        href="/"
                                    >
                                        Khám Phá
                                    </a>
                                    <ArrowNarrowRightIcon className="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            className="hidden lg:block"
                            src="https://i.ibb.co/0qHj658/Group-1786.png"
                            alt="chair-wood-fire"
                        />
                        <img
                            className="hidden sm:block lg:hidden"
                            src="https://i.ibb.co/mGM3xtB/Group-1786-1.png"
                            alt="chair-wood-fire"
                        />
                        <img
                            className="sm:hidden"
                            src="https://i.ibb.co/ZVX8rPm/Group-1786.png"
                            alt="chair-wood-fire"
                        />
                        <div className="absolute bottom-4 sm:bottom-10 inset-x-4 sm:inset-x-10 p-6 bg-white flex flex-col justify-start items-start">
                            <div>
                                <p className="text-2xl font-semibold leading-6 text-gray-800">Dành Cho Nữ</p>
                            </div>
                            <div className="mt-2">
                                <p className="text-base leading-6 sm:leading-4 text-gray-600">
                                    Quần áo, phụ kiện dành cho nữ
                                </p>
                            </div>
                            <div className="mt-6">
                                <div className="flex justify-between items-center space-x-2">
                                    <a
                                        className="text-base font-medium leading-none hover:underline text-gray-800"
                                        href="/"
                                    >
                                        Khám Phá
                                    </a>
                                    <ArrowNarrowRightIcon className="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            className="hidden lg:block"
                            src="https://i.ibb.co/0qHj658/Group-1786.png"
                            alt="chair-wood-fire"
                        />
                        <img
                            className="hidden sm:block lg:hidden"
                            src="https://i.ibb.co/mGM3xtB/Group-1786-1.png"
                            alt="chair-wood-fire"
                        />
                        <img
                            className="sm:hidden"
                            src="https://i.ibb.co/ZVX8rPm/Group-1786.png"
                            alt="chair-wood-fire"
                        />
                        <div className="absolute bottom-4 sm:bottom-10 inset-x-4 sm:inset-x-10 p-6 bg-white flex flex-col justify-start items-start">
                            <div>
                                <p className="text-2xl font-semibold leading-6 text-gray-800">Dành Cho Bé</p>
                            </div>
                            <div className="mt-2">
                                <p className="text-base leading-6 sm:leading-4 text-gray-600">
                                    Quần áo, phụ kiện dành cho trẻ em
                                </p>
                            </div>
                            <div className="mt-6">
                                <div className="flex justify-between items-center space-x-2">
                                    <a
                                        className="text-base font-medium leading-none hover:underline text-gray-800"
                                        href="/"
                                    >
                                        Khám Phá
                                    </a>
                                    <ArrowNarrowRightIcon className="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
