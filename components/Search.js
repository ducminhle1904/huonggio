/* eslint-disable @next/next/no-img-element */
import { Input, InputGroup, InputLeftElement, InputRightElement, Spinner } from "@chakra-ui/react";
import { debounce } from "lodash";
import React, { useCallback, useState } from "react";
import { ApiHelper } from "../helpers";
import { setLoading } from "../stores/slices/loading";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

export default function Search() {
    const [visible, setVisible] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [dropdownOptions, setDropdownOptions] = useState([]);
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loading.loading);

    async function fetchDropdownOptions(key) {
        let url = "product/search?name=";
        if (key) {
            dispatch(setLoading(true));
            let data = await ApiHelper(url + key).then((response) => response);
            setVisible(true);
            setDropdownOptions(data.product_list);
            setTimeout(() => {
                dispatch(setLoading(false));
            }, 500);
        }
    }
    const debounceDropDown = useCallback(
        debounce((nextValue) => fetchDropdownOptions(nextValue), 500),
        []
    );
    function handleInputOnchange(e) {
        const { value } = e.target;
        setKeyword(value);
        debounceDropDown(value);
        if (value === "") {
            setVisible(false);
            setDropdownOptions([]);
        }
    }
    return (
        <>
            <InputGroup>
                <InputLeftElement>
                    <span role="img" aria-label="search">
                        🔍
                    </span>
                </InputLeftElement>
                <Input type="text" placeholder="" value={keyword} onChange={handleInputOnchange} />
                <InputRightElement>{isLoading ? <Spinner color="green.500" /> : null}</InputRightElement>
            </InputGroup>

            <section>
                <div className="space-y-8 lg:divide-y lg:divide-gray-100">
                    {visible &&
                        dropdownOptions.map((product) => (
                            <div className="pt-8 sm:flex group" key={product.product_id}>
                                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                                    <img
                                        className="w-full rounded-md h-32 lg:w-32 object-cover"
                                        src={product?.image[0]}
                                        alt="text"
                                    />
                                </div>
                                <div>
                                    <p className="mt-3 text-lg font-medium leading-6">
                                        <Link href={`/product/${product.product_id}`} passHref>
                                            <a className="text-lg text-gray-800 group-hover:text-gray-500 lg:text-xl">
                                                {product.product_name}
                                            </a>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        </>
    );
}
