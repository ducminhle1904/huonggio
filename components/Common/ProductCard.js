/* eslint-disable @next/next/no-img-element */
import { Button, Text, Tooltip, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import { generateCurrency, convertToSlug } from "../../helpers";
import Rating from "react-rating";
import { BsStar, BsStarFill, BsCartPlus } from "react-icons/bs";
import { VscEye } from "react-icons/vsc";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../stores/slices/cart";

const ModalPopup = dynamic(() => import("./Modal"), {
    ssr: false,
});
const ProductQuickView = dynamic(() => import("../ProductQuickView"));

export default function ProductCard({ product }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: false,
    });
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md">
            <Image
                className="p-3 rounded-t-lg"
                src={product?.image[0]}
                alt={product.product_name}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
            />
            <div className="px-3 pb-3 mt-2">
                <Link href={`/san-pham/${convertToSlug(product.product_name)}/${product.product_id}`} passHref>
                    <a>
                        <Text noOfLines={1} className="text-sm font-semibold tracking-tight text-gray-900">
                            {product.product_name}
                        </Text>
                    </a>
                </Link>
                <div className="flex items-center mt-2.5 mb-5">
                    <Rating
                        initialRating={product.rating}
                        emptySymbol={<BsStar fill="#FDCC0D" />}
                        fullSymbol={<BsStarFill fill="#FDCC0D" />}
                        readonly
                    />
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        {product.rating}.0
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-900">Giá: {generateCurrency(product.price)}</span>
                    {isMobile ? (
                        <div>
                            <Button onClick={() => handleAddToCart()}>
                                <BsCartPlus />
                            </Button>
                        </div>
                    ) : (
                        <Tooltip hasArrow label="Xem nhanh" bg="teal.600">
                            <Button onClick={onOpen}>
                                <VscEye />
                            </Button>
                        </Tooltip>
                    )}
                </div>
                <ModalPopup
                    isOpen={isOpen}
                    onClose={onClose}
                    modalTitle="Xem nhanh sản phẩm"
                    childContent={<ProductQuickView data={product} />}
                    size="6xl"
                />
            </div>
        </div>
    );
}
