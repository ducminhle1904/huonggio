/* eslint-disable @next/next/no-img-element */
import { Input, InputGroup, InputLeftElement, InputRightElement, Spinner } from "@chakra-ui/react";
import { debounce } from "lodash";
import React, { useCallback, useState } from "react";
import { ApiHelper } from "../helpers";
import { setSearchLoading } from "../stores/slices/loading";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { Kbd } from "@chakra-ui/react";

export default function Search() {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loading.searchLoading);
    const [keyword, setKeyword] = useState("");
    const [dropdownOptions, setDropdownOptions] = useState([]);
    const [haveNoProduct, sethaveNoProduct] = useState(false);

    async function fetchDropdownOptions(key) {
        let url = "product/search?name=";
        if (key) {
            dispatch(setSearchLoading(true));
            let data = await ApiHelper(url + key).then((response) => response);
            if (data.product_list.length > 0) {
                sethaveNoProduct(false);
                setDropdownOptions(data.product_list);
            } else {
                sethaveNoProduct(true);
            }
            setTimeout(() => {
                dispatch(setSearchLoading(false));
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
            sethaveNoProduct(false);
            setDropdownOptions([]);
        }
    }
    return (
        <>
            <InputGroup>
                <InputLeftElement>
                    <span role="img" aria-label="search">
                        <BsSearch />
                    </span>
                </InputLeftElement>
                <Input type="text" placeholder="" value={keyword} onChange={handleInputOnchange} />
                <InputRightElement>{isLoading ? <Spinner color="green.500" /> : null}</InputRightElement>
            </InputGroup>

            <section>
                <div className="space-y-8 lg:divide-y lg:divide-gray-100">
                    {dropdownOptions.map((product) => (
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

                    {dropdownOptions.length === 0 && !keyword && <Kbd>Sản phẩm bạn tìm kiếm sẽ hiện thị ở đây</Kbd>}
                    {haveNoProduct && <Kbd>Chúng tôi không tìm thấy sản phẩm bạn đang tìm kiếm</Kbd>}
                </div>
            </section>
        </>
    );
}
