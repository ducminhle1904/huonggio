import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from "@heroicons/react/outline";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useDisclosure } from "@chakra-ui/react";
import Search from "./Search";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import AvatarComponent from "./Avatar";
import { useDispatch } from "react-redux";
import toast from "./Common/Toast";
import { getMe } from "../stores/slices/user";
import { getCart } from "../stores/slices/cart";
import { unwrapResult } from "@reduxjs/toolkit";
import Router from "next/router";

const ModalPopup = dynamic(() => import("./Common/Modal"));

const navigation = {
    categories: [
        {
            id: "men",
            name: "Nam",
            featured: [
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
                    imageAlt: "Models sitting back to back, wearing Basic Tee in black and bone.",
                },
                {
                    name: "Basic Tees",
                    href: "#",
                    imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
                    imageAlt: "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
                },
            ],
            sections: [
                {
                    id: "top",
                    name: "ÁO",
                    items: [
                        { name: "ÁO SƠ MI", href: "#" },
                        { name: "ÁO THUN", href: "#" },
                        { name: "Áo POLO", href: "#" },
                        { name: "ÁO KHOÁC", href: "#" },
                    ],
                },
                {
                    id: "bottom",
                    name: "Quần",
                    items: [
                        { name: "QUẦN JEAN", href: "#" },
                        { name: "QUẦN JOGGER", href: "#" },
                        { name: "QUẦN SHORT", href: "#" },
                        { name: "QUẦN KAKI", href: "#" },
                        { name: "QUẦN TÂY", href: "#" },
                    ],
                },
                {
                    id: "accessories",
                    name: "Phụ kiện",
                    items: [
                        { name: "GIÀY DÉP", href: "#" },
                        { name: "BALO", href: "#" },
                        { name: "NÓN", href: "#" },
                        { name: "VỚ", href: "#" },
                        { name: "THẮT LƯNG", href: "#" },
                    ],
                },
            ],
        },
        {
            id: "women",
            name: "Nữ",
            featured: [
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
                    imageAlt: "Drawstring top with elastic loop closure and textured interior padding.",
                },
                {
                    name: "Artwork Tees",
                    href: "#",
                    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
                    imageAlt:
                        "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
                },
            ],
            sections: [
                {
                    id: "top",
                    name: "ÁO",
                    items: [
                        { name: "ÁO SƠ MI", href: "#" },
                        { name: "ÁO THUN", href: "#" },
                        { name: "Áo KIỂU", href: "#" },
                        { name: "ÁO KHOÁC", href: "#" },
                    ],
                },
                {
                    id: "bottom",
                    name: "Quần",
                    items: [
                        { name: "QUẦN JEAN", href: "#" },
                        { name: "QUẦN SHORT", href: "#" },
                        { name: "CHÂN VÁY", href: "#" },
                        { name: "ĐẦM", href: "#" },
                    ],
                },
                {
                    id: "accessories",
                    name: "Phụ kiện",
                    items: [
                        { name: "GIÀY DÉP", href: "#" },
                        { name: "BALO", href: "#" },
                        { name: "NÓN", href: "#" },
                        { name: "VỚ", href: "#" },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: "Company", href: "#" },
        { name: "Stores", href: "#" },
    ],
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Header({ openCart }) {
    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);
    const router = useRouter();
    const dispatch = useDispatch();
    const { data: session } = useSession();
    const isMobile = width <= 768;

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    function handleSignOut() {
        if (user.current.user_detail) {
            localStorage.removeItem("access_token");
            Router.reload(window.location.pathname);
        } else {
            return signOut();
        }
    }

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    useEffect(() => {
        try {
            const getMeResult = dispatch(getMe());
            unwrapResult(getMeResult); // MUST HAVE THIS LINE TO CATCH ERROR
        } catch (error) {
            toast({ type: "error", message: "Có lỗi xảy ra" });
        }
    }, [dispatch]);

    useEffect(() => {
        try {
            const getCartResult = dispatch(getCart());
            unwrapResult(getCartResult); // MUST HAVE THIS LINE TO CATCH ERROR
        } catch (error) {
            toast({ type: "error", message: "Có lỗi xảy ra" });
        }
    }, [dispatch]);

    useEffect(() => {
        onClose();
    }, [onClose, router.asPath]);

    return (
        <>
            <div className="bg-white sticky top-0 z-50">
                {/* Mobile menu */}
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex z-40">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                                    <div className="px-4 pt-5 pb-2 flex">
                                        <button
                                            type="button"
                                            className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Links */}
                                    <Tab.Group as="div" className="mt-2">
                                        <div className="border-b border-gray-200">
                                            <Tab.List className="-mb-px flex px-4 space-x-8">
                                                {navigation.categories.map((category) => (
                                                    <Tab
                                                        key={category.name}
                                                        className={({ selected }) =>
                                                            classNames(
                                                                selected
                                                                    ? "text-indigo-600 border-indigo-600"
                                                                    : "text-gray-900 border-transparent",
                                                                "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                                                            )
                                                        }
                                                    >
                                                        {category.name}
                                                    </Tab>
                                                ))}
                                            </Tab.List>
                                        </div>
                                        <Tab.Panels as={Fragment}>
                                            {navigation.categories.map((category) => (
                                                <Tab.Panel key={category.name} className="pt-10 pb-8 px-4 space-y-10">
                                                    <div className="grid grid-cols-2 gap-x-4">
                                                        {category.featured.map((item) => (
                                                            <div key={item.name} className="group relative text-sm">
                                                                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                    <img
                                                                        src={item.imageSrc}
                                                                        alt={item.imageAlt}
                                                                        className="object-center object-cover"
                                                                    />
                                                                </div>
                                                                <Link href={item.href} passHref>
                                                                    <a className="mt-6 block font-medium text-gray-900">
                                                                        <span
                                                                            className="absolute z-10 inset-0"
                                                                            aria-hidden="true"
                                                                        />
                                                                        {item.name}
                                                                    </a>
                                                                </Link>
                                                                <p aria-hidden="true" className="mt-1">
                                                                    Shop now
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {category.sections.map((section) => (
                                                        <div key={section.name}>
                                                            <p
                                                                id={`${category.id}-${section.id}-heading-mobile`}
                                                                className="font-medium text-gray-900"
                                                            >
                                                                {section.name}
                                                            </p>
                                                            <ul
                                                                role="list"
                                                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                                className="mt-6 flex flex-col space-y-6"
                                                            >
                                                                {section.items.map((item) => (
                                                                    <li key={item.name} className="flow-root">
                                                                        <Link href={item.href} passHref>
                                                                            <a className="-m-2 p-2 block text-gray-500">
                                                                                {item.name}
                                                                            </a>
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </Tab.Panel>
                                            ))}
                                        </Tab.Panels>
                                    </Tab.Group>

                                    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                        {navigation.pages.map((page) => (
                                            <div key={page.name} className="flow-root">
                                                <Link href={page.href} passHref>
                                                    <a className="-m-2 p-2 block font-medium text-gray-900">
                                                        {page.name}
                                                    </a>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                        <div className="flow-root">
                                            {session || user.current.user_detail ? (
                                                <a
                                                    className="-m-2 p-2 block font-medium text-gray-900"
                                                    onClick={() => handleSignOut()}
                                                >
                                                    Đăng xuất
                                                </a>
                                            ) : (
                                                <Link href="/login" passHref>
                                                    <a className="-m-2 p-2 block font-medium text-gray-900">
                                                        Đăng nhập
                                                    </a>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <header className="relative bg-white">
                    <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="border-b border-gray-200">
                            <div className="h-16 flex items-center">
                                <button
                                    type="button"
                                    className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                                    onClick={() => setOpen(true)}
                                >
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Logo */}
                                <div className="ml-4 flex lg:ml-0">
                                    <Link href="/" passHref>
                                        <a>
                                            <span className="sr-only">Workflow</span>
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                                                alt=""
                                            />
                                        </a>
                                    </Link>
                                </div>

                                {/* Flyout menus */}
                                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                    <div className="h-full flex space-x-8">
                                        {navigation.categories.map((category) => (
                                            <Popover key={category.name} className="flex">
                                                {({ open }) => (
                                                    <>
                                                        <div className="relative flex">
                                                            <Popover.Button
                                                                className={classNames(
                                                                    open
                                                                        ? "border-indigo-600 text-indigo-600"
                                                                        : "border-transparent text-gray-700 hover:text-gray-800",
                                                                    "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                                                                )}
                                                            >
                                                                {category.name}
                                                            </Popover.Button>
                                                        </div>

                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-200"
                                                            enterFrom="opacity-0"
                                                            enterTo="opacity-100"
                                                            leave="transition ease-in duration-150"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                        >
                                                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500 z-50">
                                                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                                <div
                                                                    className="absolute inset-0 top-1/2 bg-white shadow"
                                                                    aria-hidden="true"
                                                                />

                                                                <div className="relative bg-white">
                                                                    <div className="max-w-7xl mx-auto px-8">
                                                                        <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                                {category.featured.map((item) => (
                                                                                    <div
                                                                                        key={item.name}
                                                                                        className="group relative text-base sm:text-sm"
                                                                                    >
                                                                                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                                            <img
                                                                                                src={item.imageSrc}
                                                                                                alt={item.imageAlt}
                                                                                                className="object-center object-cover"
                                                                                            />
                                                                                        </div>
                                                                                        <Link href={item.href} passHref>
                                                                                            <a className="mt-6 block font-medium text-gray-900">
                                                                                                <span
                                                                                                    className="absolute z-10 inset-0"
                                                                                                    aria-hidden="true"
                                                                                                />
                                                                                                {item.name}
                                                                                            </a>
                                                                                        </Link>
                                                                                        <p
                                                                                            aria-hidden="true"
                                                                                            className="mt-1"
                                                                                        >
                                                                                            Shop now
                                                                                        </p>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                            <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                                                                {category.sections.map((section) => (
                                                                                    <div key={section.name}>
                                                                                        <p
                                                                                            id={`${section.name}-heading`}
                                                                                            className="font-medium text-gray-900"
                                                                                        >
                                                                                            {section.name}
                                                                                        </p>
                                                                                        <ul
                                                                                            role="list"
                                                                                            aria-labelledby={`${section.name}-heading`}
                                                                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                        >
                                                                                            {section.items.map(
                                                                                                (item) => (
                                                                                                    <li
                                                                                                        key={item.name}
                                                                                                        className="flex"
                                                                                                    >
                                                                                                        <Link
                                                                                                            href={
                                                                                                                item.href
                                                                                                            }
                                                                                                            passHref
                                                                                                        >
                                                                                                            <a className="hover:text-gray-800">
                                                                                                                {
                                                                                                                    item.name
                                                                                                                }
                                                                                                            </a>
                                                                                                        </Link>
                                                                                                    </li>
                                                                                                )
                                                                                            )}
                                                                                        </ul>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Popover.Panel>
                                                        </Transition>
                                                    </>
                                                )}
                                            </Popover>
                                        ))}

                                        {navigation.pages.map((page) => (
                                            <Link href={page.href} key={page.name} passHref>
                                                <a className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                                                    {page.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </Popover.Group>

                                <div className="ml-auto flex items-center">
                                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                        {session || user.current.user_detail ? (
                                            <a
                                                className="-m-2 p-2 block font-medium text-gray-900 cursor-pointer"
                                                onClick={() => handleSignOut()}
                                            >
                                                Đăng xuất
                                            </a>
                                        ) : (
                                            <Link href="/login" passHref>
                                                <a className="-m-2 p-2 block font-medium text-gray-900">Đăng nhập</a>
                                            </Link>
                                        )}
                                    </div>

                                    {/* Search */}
                                    <div className="flex lg:ml-6">
                                        <p className="p-2 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Tìm kiếm sản phẩm</span>
                                            <SearchIcon
                                                className="w-6 h-6 cursor-pointer"
                                                aria-hidden="true"
                                                onClick={onOpen}
                                            />
                                            <ModalPopup
                                                isOpen={isOpen}
                                                onClose={onClose}
                                                modalTitle="Tìm kiếm sản phẩm"
                                                childContent={<Search />}
                                                size={isMobile ? "full" : "md"}
                                            />
                                        </p>
                                    </div>

                                    {/* Cart */}
                                    <div className="ml-4 flow-root lg:ml-6" onClick={openCart}>
                                        <span className="group -m-2 p-2 flex items-center cursor-pointer">
                                            <ShoppingBagIcon
                                                className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true"
                                            />
                                            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                                                {cart.cart.length}
                                            </span>
                                            <span className="sr-only">items in cart, view bag</span>
                                        </span>
                                    </div>

                                    {session || user.current.user_detail ? (
                                        <div className="ml-4 lg:ml-6">
                                            <AvatarComponent
                                                user={
                                                    session
                                                        ? session.user
                                                        : user.current
                                                        ? user.current.user_detail
                                                        : null
                                                }
                                            />
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    );
}
