function ApiHelper(url) {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_PATH_API}${url}`, {
        method: "GET",
        withCredentials: true,
    })
        .then((response) => response.json())
        .then(
            (data) => data,
            (error) => {
                console.log(error);
            }
        );
}

function ApiProductHelper(page, size, property, direction, category) {
    return fetch(
        `${
            process.env.NEXT_PUBLIC_BASE_PATH_API
        }product/all?page=${page}&size=${size}&property=${property}&direction=${direction}${
            category ? `&category=${category}` : ""
        }`,
        {
            method: "GET",
            withCredentials: true,
        }
    )
        .then((response) => response.json())
        .then(
            (data) => data,
            (error) => {
                console.log(error);
            }
        );
}

function ApiLogin(payload) {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_PATH_API}auth/sign-in`, {
        method: "POST",
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })
        .then((response) => response.json())
        .then(
            (data) => data,
            (error) => {
                console.log(error);
            }
        );
}

function ApiGetUser(token) {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_PATH_API}user/profile`, {
        method: "GET",
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    })
        .then((response) => response.json())
        .then(
            (data) => data,
            (error) => {
                console.log(error);
            }
        );
}

function ApiGetCart(token) {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_PATH_API}cart`, {
        method: "GET",
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    })
        .then((response) => response.json())
        .then(
            (data) => data,
            (error) => {
                console.log(error);
            }
        );
}

function ApiHandleCart(isUpdate, token, data) {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_PATH_API}cart`, {
        method: isUpdate ? "PUT" : "POST",
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then(
            (data) => data,
            (error) => {
                console.log(error);
            }
        );
}

function ApiAddRecently(productId, token) {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_PATH_API}product/recently/${productId}`, {
        method: "POST",
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    })
        .then((response) => response.json())
        .then(
            (data) => data,
            (error) => {
                console.log(error);
            }
        );
}

function ApiGetRecently(token) {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_PATH_API}product/recently`, {
        method: "GET",
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    })
        .then((response) => response.json())
        .then(
            (data) => data,
            (error) => {
                console.log(error);
            }
        );
}

function ApiMakeOrder(username, address, phone, productList, token) {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_PATH_API}order`, {
        method: "POST",
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify({
            username: username,
            address: address,
            phone: phone,
            product_list: productList,
        }),
    })
        .then((response) => response.json())
        .then(
            (data) => data,
            (error) => {
                console.log(error);
            }
        );
}

function ApiGetOrder(token) {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_PATH_API}order/all-order`, {
        method: "GET",
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    })
        .then((response) => response.json())
        .then(
            (data) => data,
            (error) => {
                console.log(error);
            }
        );
}

export {
    ApiHelper,
    ApiProductHelper,
    ApiLogin,
    ApiGetUser,
    ApiGetCart,
    ApiHandleCart,
    ApiAddRecently,
    ApiGetRecently,
    ApiMakeOrder,
    ApiGetOrder,
};
