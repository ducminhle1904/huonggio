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

export { ApiHelper, ApiProductHelper };
