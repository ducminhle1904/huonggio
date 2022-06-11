/* eslint-disable @next/next/no-img-element */
import { Button, useDisclosure } from "@chakra-ui/react";
import ModalPopup from "./Modal";
import ProductQuickView from "../ProductQuickView";
import Image from "next/image";
import Link from "next/link";
import { generateCurrency } from "../../helpers";

export default function ProductCard({ product }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className="group relative cursor-pointer">
            <div className="w-full rounded-md overflow-hidden group group-hover:opacity-75 transition ease-in-out duration-500 relative text-center">
                <img src={product.image[0]} alt={product.product_name} className="w-full h-full object-contain" />
            </div>

            <Button
                variant="outline"
                size="md"
                width={"60%"}
                bgColor="gray.100"
                className="opacity-0 bottom-[40%] left-1/2 transform -translate-x-1/2 z-10 lg:opacity-0 lg:group-hover:opacity-100 duration-500"
                onClick={onOpen}
            >
                Quick View
            </Button>
            <ModalPopup
                isOpen={isOpen}
                onClose={onClose}
                modalTitle="Product Quick View"
                childContent={<ProductQuickView data={product} />}
            />
            <div className="flex flex-col">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link href={`/product/${product.product_id}`} passHref>
                            <a>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.product_name}
                            </a>
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm font-medium text-gray-500">
                        <span>Danh mục: </span>
                        {product.category.map((category) => (
                            <span key={category.category_id}>
                                <Link href={`/category/${category.category_id}`} passHref>
                                    <a>{category.category_name}</a>
                                </Link>
                                <span>&nbsp;</span>
                            </span>
                        ))}
                    </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                    <span>Giá: </span>
                    {generateCurrency(product.price)}
                </p>
            </div>
        </div>
    );
}
