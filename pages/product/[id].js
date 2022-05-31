import {StarIcon} from "@heroicons/react/solid";
import {NextSeo} from "next-seo";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addToCart} from "../../stores/slices/cart";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
    'https://images.unsplash.com/photo-1627844541143-a561a1a9b72a',
    'https://images.unsplash.com/photo-1627844541143-a561a1a9b72a',
    'https://images.unsplash.com/photo-1627844541143-a561a1a9b72a',
    'https://images.unsplash.com/photo-1627844541143-a561a1a9b72a',
    'https://images.unsplash.com/photo-1627844541143-a561a1a9b72a'
]
export default function DetailProduct({productDetail}) {
    const dispatch = useDispatch();
    const handleAddToCart = (product, event) => {
        event.preventDefault();
        dispatch(addToCart(product));
    };
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    return (
        <>
            <NextSeo
                title={productDetail.title}
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
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}
            <div>
                <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
                    <div
                        className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                            <div className="aspect-w-1 aspect-h-1"
                                 onClick={() => setIsOpen(true)}
                            >
                                <img
                                    alt="Mobile Phone Stand"
                                    className="object-cover rounded-xl"
                                    src="https://images.unsplash.com/photo-1627844541143-a561a1a9b72a"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4 lg:mt-4">
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        alt="Mobile Phone Stand"
                                        className="object-cover rounded-xl"
                                        src="https://images.unsplash.com/photo-1627844541143-a561a1a9b72a"
                                    />
                                </div>

                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        alt="Mobile Phone Stand"
                                        className="object-cover rounded-xl"
                                        src="https://images.unsplash.com/photo-1627844541143-a561a1a9b72a"
                                    />
                                </div>

                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        alt="Mobile Phone Stand"
                                        className="object-cover rounded-xl"
                                        src="https://images.unsplash.com/photo-1627844541143-a561a1a9b72a"
                                    />
                                </div>

                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        alt="Mobile Phone Stand"
                                        className="object-cover rounded-xl"
                                        src="https://images.unsplash.com/photo-1627844541143-a561a1a9b72a"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sticky top-[80px]">
                            <strong
                                className="border border-blue-600 rounded-full tracking-wide px-3 font-medium py-0.5 text-xs bg-gray-100 text-blue-600"> Pre
                                Order </strong>

                            <div className="flex justify-between mt-8">
                                <div className="max-w-[35ch]">
                                    <h1 className="text-2xl font-bold">
                                        {productDetail.title}
                                    </h1>

                                    <p className="mt-0.5 text-sm">
                                        Highest Rated Product
                                    </p>

                                    <div className="flex mt-2 -ml-0.5">
                                        <StarIcon
                                            className="h-5 w-5 flex-shrink-0"/>
                                        <StarIcon
                                            className="h-5 w-5 flex-shrink-0"/>
                                        <StarIcon
                                            className="h-5 w-5 flex-shrink-0"/>
                                        <StarIcon
                                            className="h-5 w-5 flex-shrink-0"/>
                                        <StarIcon
                                            className="h-5 w-5 flex-shrink-0"/>
                                    </div>
                                </div>

                                <p className="text-lg font-bold">
                                    ${productDetail.price}
                                </p>
                            </div>

                            <details className="relative mt-4 group">
                                <summary className="block">
                                    <div>
                                        <div
                                            className="prose max-w-none group-open:hidden">
                                            <p>
                                                {productDetail.description}
                                            </p>
                                        </div>
                                    </div>
                                </summary>
                            </details>

                            <form className="mt-8">
                                <fieldset>
                                    <legend
                                        className="mb-1 text-sm font-medium">Color
                                    </legend>

                                    <div className="flow-root">
                                        <div className="flex flex-wrap -m-0.5">
                                            <label htmlFor="color_tt"
                                                   className="cursor-pointer p-0.5">
                                                <input type="radio" name="color"
                                                       id="color_tt"
                                                       className="sr-only peer"/>

                                                <span
                                                    className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    Texas Tea
                  </span>
                                            </label>

                                            <label htmlFor="color_fr"
                                                   className="cursor-pointer p-0.5">
                                                <input type="radio" name="color"
                                                       id="color_fr"
                                                       className="sr-only peer"/>

                                                <span
                                                    className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    Fiesta Red
                  </span>
                                            </label>

                                            <label htmlFor="color_cb"
                                                   className="cursor-pointer p-0.5">
                                                <input type="radio" name="color"
                                                       id="color_cb"
                                                       className="sr-only peer"/>

                                                <span
                                                    className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    Cobalt Blue
                  </span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset className="mt-4">
                                    <legend
                                        className="mb-1 text-sm font-medium">Size
                                    </legend>

                                    <div className="flow-root">
                                        <div className="flex flex-wrap -m-0.5">
                                            <label htmlFor="size_xs"
                                                   className="cursor-pointer p-0.5">
                                                <input type="radio" name="size"
                                                       id="size_xs"
                                                       className="sr-only peer"/>

                                                <span
                                                    className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    XS
                  </span>
                                            </label>

                                            <label htmlFor="size_s"
                                                   className="cursor-pointer p-0.5">
                                                <input type="radio" name="size"
                                                       id="size_s"
                                                       className="sr-only peer"/>

                                                <span
                                                    className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    S
                  </span>
                                            </label>

                                            <label htmlFor="size_m"
                                                   className="cursor-pointer p-0.5">
                                                <input type="radio" name="size"
                                                       id="size_m"
                                                       className="sr-only peer"/>

                                                <span
                                                    className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    M
                  </span>
                                            </label>

                                            <label htmlFor="size_l"
                                                   className="cursor-pointer p-0.5">
                                                <input type="radio" name="size"
                                                       id="size_l"
                                                       className="sr-only peer"/>

                                                <span
                                                    className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    L
                  </span>
                                            </label>

                                            <label htmlFor="size_xl"
                                                   className="cursor-pointer p-0.5">
                                                <input type="radio" name="size"
                                                       id="size_xl"
                                                       className="sr-only peer"/>

                                                <span
                                                    className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    XL
                  </span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>

                                <div className="flex mt-8">
                                    <div>
                                        <label htmlFor="quantity"
                                               className="sr-only">Qty</label>

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
            {/*<div className="bg-white">*/}
            {/*    <div className="pt-6">*/}
            {/*        <nav aria-label="Breadcrumb">*/}
            {/*            <ol*/}
            {/*                role="list"*/}
            {/*                className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"*/}
            {/*            >*/}
            {/*                {product.breadcrumbs.map((breadcrumb) => (*/}
            {/*                    <li key={breadcrumb.id}>*/}
            {/*                        <div className="flex items-center">*/}
            {/*                            <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">*/}
            {/*                                {breadcrumb.name}*/}
            {/*                            </a>*/}
            {/*                            <svg*/}
            {/*                                width={16}*/}
            {/*                                height={20}*/}
            {/*                                viewBox="0 0 16 20"*/}
            {/*                                fill="currentColor"*/}
            {/*                                xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                aria-hidden="true"*/}
            {/*                                className="w-4 h-5 text-gray-300"*/}
            {/*                            >*/}
            {/*                                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />*/}
            {/*                            </svg>*/}
            {/*                        </div>*/}
            {/*                    </li>*/}
            {/*                ))}*/}
            {/*                <li className="text-sm">*/}
            {/*                    <a*/}
            {/*                        href={product.href}*/}
            {/*                        aria-current="page"*/}
            {/*                        className="font-medium text-gray-500 hover:text-gray-600"*/}
            {/*                    >*/}
            {/*                        {productDetail.title}*/}
            {/*                    </a>*/}
            {/*                </li>*/}
            {/*            </ol>*/}
            {/*        </nav>*/}

            {/*        /!* Image gallery *!/*/}
            {/*        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">*/}
            {/*            <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">*/}
            {/*                <Image*/}
            {/*                    src={productDetail.image}*/}
            {/*                    alt={productDetail.title}*/}
            {/*                    className="w-full h-full object-center object-cover"*/}
            {/*                    layout="fill"*/}
            {/*                    objectFit="contain"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        /!* Product info *!/*/}
            {/*        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">*/}
            {/*            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">*/}
            {/*                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">*/}
            {/*                    {productDetail.title}*/}
            {/*                </h1>*/}
            {/*            </div>*/}

            {/*            /!* Options *!/*/}
            {/*            <div className="mt-4 lg:mt-0 lg:row-span-3">*/}
            {/*                <h2 className="sr-only">Product information</h2>*/}
            {/*                <p className="text-3xl text-gray-900">${productDetail.price}</p>*/}

            {/*                /!* Reviews *!/*/}
            {/*                <div className="mt-6">*/}
            {/*                    <h3 className="sr-only">Reviews</h3>*/}
            {/*                    <div className="flex items-center">*/}
            {/*                        <div className="flex items-center">*/}
            {/*                            {[0, 1, 2, 3, 4].map((rating) => (*/}
            {/*                                <StarIcon*/}
            {/*                                    key={rating}*/}
            {/*                                    className={classNames(*/}
            {/*                                        reviews.average > rating ? "text-gray-900" : "text-gray-200",*/}
            {/*                                        "h-5 w-5 flex-shrink-0"*/}
            {/*                                    )}*/}
            {/*                                    aria-hidden="true"*/}
            {/*                                />*/}
            {/*                            ))}*/}
            {/*                        </div>*/}
            {/*                        <p className="sr-only">{reviews.average} out of 5 stars</p>*/}
            {/*                        <a*/}
            {/*                            href={reviews.href}*/}
            {/*                            className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"*/}
            {/*                        >*/}
            {/*                            {reviews.totalCount} reviews*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <form className="mt-10">*/}
            {/*                    /!* Colors *!/*/}
            {/*                    <div>*/}
            {/*                        <h3 className="text-sm text-gray-900 font-medium">Color</h3>*/}

            {/*                        <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">*/}
            {/*                            <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>*/}
            {/*                            <div className="flex items-center space-x-3">*/}
            {/*                                {product.colors.map((color) => (*/}
            {/*                                    <RadioGroup.Option*/}
            {/*                                        key={color.name}*/}
            {/*                                        value={color}*/}
            {/*                                        className={({ active, checked }) =>*/}
            {/*                                            classNames(*/}
            {/*                                                color.selectedClass,*/}
            {/*                                                active && checked ? "ring ring-offset-1" : "",*/}
            {/*                                                !active && checked ? "ring-2" : "",*/}
            {/*                                                "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"*/}
            {/*                                            )*/}
            {/*                                        }*/}
            {/*                                    >*/}
            {/*                                        <RadioGroup.Label as="span" className="sr-only">*/}
            {/*                                            {color.name}*/}
            {/*                                        </RadioGroup.Label>*/}
            {/*                                        <span*/}
            {/*                                            aria-hidden="true"*/}
            {/*                                            className={classNames(*/}
            {/*                                                color.class,*/}
            {/*                                                "h-8 w-8 border border-black border-opacity-10 rounded-full"*/}
            {/*                                            )}*/}
            {/*                                        />*/}
            {/*                                    </RadioGroup.Option>*/}
            {/*                                ))}*/}
            {/*                            </div>*/}
            {/*                        </RadioGroup>*/}
            {/*                    </div>*/}

            {/*                    /!* Sizes *!/*/}
            {/*                    <div className="mt-10">*/}
            {/*                        <div className="flex items-center justify-between">*/}
            {/*                            <h3 className="text-sm text-gray-900 font-medium">Size</h3>*/}
            {/*                            <a*/}
            {/*                                href="#"*/}
            {/*                                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"*/}
            {/*                            >*/}
            {/*                                Size guide*/}
            {/*                            </a>*/}
            {/*                        </div>*/}

            {/*                        <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">*/}
            {/*                            <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>*/}
            {/*                            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">*/}
            {/*                                {product.sizes.map((size) => (*/}
            {/*                                    <RadioGroup.Option*/}
            {/*                                        key={size.name}*/}
            {/*                                        value={size}*/}
            {/*                                        disabled={!size.inStock}*/}
            {/*                                        className={({ active }) =>*/}
            {/*                                            classNames(*/}
            {/*                                                size.inStock*/}
            {/*                                                    ? "bg-white shadow-sm text-gray-900 cursor-pointer"*/}
            {/*                                                    : "bg-gray-50 text-gray-200 cursor-not-allowed",*/}
            {/*                                                active ? "ring-2 ring-indigo-500" : "",*/}
            {/*                                                "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"*/}
            {/*                                            )*/}
            {/*                                        }*/}
            {/*                                    >*/}
            {/*                                        {({ active, checked }) => (*/}
            {/*                                            <>*/}
            {/*                                                <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>*/}
            {/*                                                {size.inStock ? (*/}
            {/*                                                    <span*/}
            {/*                                                        className={classNames(*/}
            {/*                                                            active ? "border" : "border-2",*/}
            {/*                                                            checked*/}
            {/*                                                                ? "border-indigo-500"*/}
            {/*                                                                : "border-transparent",*/}
            {/*                                                            "absolute -inset-px rounded-md pointer-events-none"*/}
            {/*                                                        )}*/}
            {/*                                                        aria-hidden="true"*/}
            {/*                                                    />*/}
            {/*                                                ) : (*/}
            {/*                                                    <span*/}
            {/*                                                        aria-hidden="true"*/}
            {/*                                                        className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"*/}
            {/*                                                    >*/}
            {/*                                                        <svg*/}
            {/*                                                            className="absolute inset-0 w-full h-full text-gray-200 stroke-2"*/}
            {/*                                                            viewBox="0 0 100 100"*/}
            {/*                                                            preserveAspectRatio="none"*/}
            {/*                                                            stroke="currentColor"*/}
            {/*                                                        >*/}
            {/*                                                            <line*/}
            {/*                                                                x1={0}*/}
            {/*                                                                y1={100}*/}
            {/*                                                                x2={100}*/}
            {/*                                                                y2={0}*/}
            {/*                                                                vectorEffect="non-scaling-stroke"*/}
            {/*                                                            />*/}
            {/*                                                        </svg>*/}
            {/*                                                    </span>*/}
            {/*                                                )}*/}
            {/*                                            </>*/}
            {/*                                        )}*/}
            {/*                                    </RadioGroup.Option>*/}
            {/*                                ))}*/}
            {/*                            </div>*/}
            {/*                        </RadioGroup>*/}
            {/*                    </div>*/}
            {/*                    <Link href={`/cart`}>*/}
            {/*                        <button*/}
            {/*                            className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"*/}
            {/*                            onClick={() => handleAddToCart(productDetail)}*/}
            {/*                        >*/}
            {/*                            Add to bag*/}
            {/*                        </button>*/}
            {/*                    </Link>*/}
            {/*                </form>*/}
            {/*            </div>*/}

            {/*            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">*/}
            {/*                /!* Description and details *!/*/}
            {/*                <div>*/}
            {/*                    <h3 className="sr-only">Description</h3>*/}

            {/*                    <div className="space-y-6">*/}
            {/*                        <p className="text-base text-gray-900">{productDetail.description}</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <div className="mt-10">*/}
            {/*                    <h3 className="text-sm font-medium text-gray-900">Highlights</h3>*/}

            {/*                    <div className="mt-4">*/}
            {/*                        <ul role="list" className="pl-4 list-disc text-sm space-y-2">*/}
            {/*                            {product.highlights.map((highlight) => (*/}
            {/*                                <li key={highlight} className="text-gray-400">*/}
            {/*                                    <span className="text-gray-600">{highlight}</span>*/}
            {/*                                </li>*/}
            {/*                            ))}*/}
            {/*                        </ul>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <div className="mt-10">*/}
            {/*                    <h2 className="text-sm font-medium text-gray-900">Details</h2>*/}

            {/*                    <div className="mt-4 space-y-6">*/}
            {/*                        <p className="text-sm text-gray-600">{product.details}</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
}

export async function getServerSideProps({params: {id}, req, res}) {
    const baseUrl = "https://fakestoreapi.com/";
    const url = baseUrl + "products/" + id;
    const product = await fetch(url).then((results) => results.json());
    return {
        props: {
            productDetail: product,
        },
    };
}
