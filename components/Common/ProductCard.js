import { Button, useDisclosure } from "@chakra-ui/react";
import ModalPopup from "./Modal";
import ProductQuickView from "../ProductQuickView";
import Image from "next/image";

export default function ProductCard({ product }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className="group relative cursor-pointer">
            <div className="w-full aspect-w-1 rounded-md overflow-hidden group group-hover:opacity-75 transition ease-in-out duration-500 lg:aspect-none relative text-center">
                <Image
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-center object-contain lg:w-full lg:h-full"
                    width={300}
                    height={300}
                />
            </div>

            <Button
                variant="outline"
                size="md"
                width={"60%"}
                bgColor="gray.100"
                className="opacity-100 bottom-[10%] left-1/2 transform -translate-x-1/2 z-50 lg:opacity-0 group-hover:opacity-100 duration-500"
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
            <div className="mt-4 flex flex-col">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.title}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm font-medium text-gray-500">
                        <span>Category: </span>
                        {product.category}
                    </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                    <span>Price: </span>
                    {product.price}
                </p>
            </div>
        </div>
    );
}
