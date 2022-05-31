import {NextSeo} from "next-seo";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTotals} from "../stores/slices/cart";
import {Form, Formik} from "formik";
import {
    InputControl, NumberInputControl,
    SelectControl, SubmitButton
} from "formik-chakra-ui";
import * as Yup from "yup";

export default function Index() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const initialValues = {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        phone: ""
    }
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required("Required"),
        lastName: Yup.string()
            .required("Required"),
        address: Yup.string()
            .required("Required"),
        city: Yup.string()
            .required("Required"),
        district: Yup.string()
            .required("Required"),
        phone: Yup.string()
            .matches(phoneRegExp, 'Phone number is not valid').required("Required")
    });

    const onSubmit = (values, actions) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
        }, 1000)
    }

    return (
        <>
            <NextSeo
                title="Checkout"
                description="Cửa hàng Ken chuyên các mặt hàng thời trang như quần áo, giày dép, phụ kiện trang sức, ..."
                openGraph={{
                    url: "https://ken-shop.vercel.app/",
                    title: "Ken Shopping",
                    description:
                        "Cửa hàng Ken chuyên các mặt hàng thời trang như quần áo, giày dép, phụ kiện trang sức, ...",
                }}
            />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {({handleSubmit, values, errors}) => (
                    <div className="overflow-y-hidden">
                        <div
                            className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
                            <div
                                className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                                <div
                                    className="flex w-full  flex-col justify-start items-start">
                                    <div>
                                        <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                                            Check out
                                        </p>
                                    </div>
                                    <div className="mt-2">
                                        <Link href="/cart" passHref>
                                            <a className="text-base leading-4 underline  hover:text-gray-800 text-gray-600">
                                                Back to my bag
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="mt-12">
                                        <p className="text-xl font-semibold leading-5 text-gray-800">Shipping
                                            Details</p>
                                    </div>
                                    <Form
                                        className="mt-8 flex flex-col justify-start items-start w-full space-y-8 "
                                        onSubmit={handleSubmit}>
                                        <InputControl name="firstName"
                                                      label="First Name"/>
                                        <InputControl name="lastName"
                                                      label="Last Name"/>
                                        <InputControl name="address"
                                                      label="Address"/>
                                        <div
                                            className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                            <div className="relative w-full">
                                                <SelectControl
                                                    name="city"
                                                    selectProps={{placeholder: "Select city"}}
                                                >
                                                    <option
                                                        value="option1">Option 1
                                                    </option>
                                                    <option
                                                        value="option2">Option 2
                                                    </option>
                                                    <option
                                                        value="option3">Option 3
                                                    </option>
                                                </SelectControl>
                                            </div>
                                            <div className="relative w-full">
                                                <SelectControl
                                                    name="district"
                                                    selectProps={{placeholder: "Select district"}}
                                                >
                                                    <option
                                                        value="option3">Option 3
                                                    </option>
                                                    <option
                                                        value="option4">Option 4
                                                    </option>
                                                    <option
                                                        value="option5">Option 5
                                                    </option>
                                                </SelectControl>
                                            </div>
                                        </div>
                                        <InputControl name="phone"
                                                      label="Phone"
                                                      type="tel"
                                        />
                                        <SubmitButton className="mt-8">Proceed
                                            to
                                            payment</SubmitButton>
                                    </Form>

                                </div>
                                <div
                                    className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
                                    <div>
                                        <h1 className="text-2xl font-semibold leading-6 text-gray-800">Order
                                            Summary</h1>
                                    </div>
                                    <div
                                        className="flex mt-7 flex-col items-end w-full space-y-6">
                                        <div
                                            className="flex justify-between w-full items-center">
                                            <p className="text-lg leading-4 text-gray-600">Total
                                                items</p>
                                            <p className="text-lg font-semibold leading-4 text-gray-600">{cart.cart.length}</p>
                                        </div>
                                        <div
                                            className="flex justify-between w-full items-center">
                                            <p className="text-lg leading-4 text-gray-600">Total
                                                Charges</p>
                                            <p className="text-lg font-semibold leading-4 text-gray-600">
                                                ${cart.cartTotalAmount}
                                            </p>
                                        </div>
                                        <div
                                            className="flex justify-between w-full items-center">
                                            <p className="text-lg leading-4 text-gray-600">Shipping
                                                charges</p>
                                            <p className="text-lg font-semibold leading-4 text-gray-600">$10</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex justify-between w-full items-center mt-32">
                                        <p className="text-xl font-semibold leading-4 text-gray-800">Estimated
                                            Total </p>
                                        <p className="text-lg font-semibold leading-4 text-gray-800">
                                            ${(cart.cartTotalAmount + 10).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Formik>

        </>
    );
}
