export function ApiHelper(url) {
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
