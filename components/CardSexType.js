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
                        <Image
                            className="w-full h-full object-cover"
                            src="https://res.cloudinary.com/kenvo/image/upload/v1653575537/category/579_47_20211221134222432_gqesez.jpg"
                            alt="table-chair"
                            width={500}
                            height={500}
                            objectFit="cover"
                        />
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
                                    <Link href="/danh-muc/Nam" passHref>
                                        <a className="text-base font-medium leading-none hover:underline text-gray-800">
                                            Khám Phá
                                        </a>
                                    </Link>
                                    <ArrowNarrowRightIcon className="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <Image
                            className=""
                            src="https://res.cloudinary.com/kenvo/image/upload/v1653575606/category/product-05_a5mqjk.jpg"
                            alt="chair-wood-fire"
                            width={500}
                            height={500}
                            objectFit="cover"
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
                                    <Link href="/danh-muc/Nữ" passHref>
                                        <a className="text-base font-medium leading-none hover:underline text-gray-800">
                                            Khám Phá
                                        </a>
                                    </Link>
                                    <ArrowNarrowRightIcon className="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                            className=""
                            src="https://res.cloudinary.com/kenvo/image/upload/v1653575683/category/img_8056_6b1171ba8df344dd94ba13ea8b0616e6_master_gpwhw1.webp"
                            alt="chair-wood-fire"
                            width={500}
                            height={500}
                            objectFit="cover"
                        />
                        <div className="absolute bottom-4 sm:bottom-10 inset-x-4 sm:inset-x-10 p-6 bg-white flex flex-col justify-start items-start">
                            <div>
                                <p className="text-2xl font-semibold leading-6 text-gray-800">Phụ Kiện</p>
                            </div>
                            <div className="mt-2">
                                <p className="text-base leading-6 sm:leading-4 text-gray-600">Phụ kiện</p>
                            </div>
                            <div className="mt-6">
                                <div className="flex justify-between items-center space-x-2">
                                    <Link href="/danh-muc/Phụ kiện" passHref>
                                        <a className="text-base font-medium leading-none hover:underline text-gray-800">
                                            Khám Phá
                                        </a>
                                    </Link>
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
