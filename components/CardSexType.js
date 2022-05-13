export default function CardSexType() {
    return (
        <div className="2xl:mx-auto 2xl:container">
            <div className="lg:px-20 md:px-6 px-4">
                <div className="flex justify-center">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-center">
                        <div className="relative flex flex-col cursor-pointer">
                            <img src="https://i.ibb.co/b50f24j/carosel-1.png" alt="two girls" className="w-full" />
                            <img
                                src="https://i.ibb.co/Tb5CKHn/Rectangle-49.png"
                                alt="opacity bg"
                                className="absolute w-full top-0"
                            />
                            <div className="absolute m-6 bottom-0 z-30">
                                <p className="text-sm leading-none text-white">Special collection</p>
                                <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">Women</h1>
                                <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                                    Discover
                                </p>
                            </div>
                        </div>
                        <div className="relative flex flex-col cursor-pointer">
                            <img src="https://i.ibb.co/cvN3gMZ/carousel-2.png" alt="black guy" className="w-full" />
                            <img
                                src="https://i.ibb.co/Tb5CKHn/Rectangle-49.png"
                                alt="opacity bg"
                                className="absolute w-full top-0"
                            />
                            <div className="absolute m-6 bottom-0 z-30">
                                <p className="text-sm leading-none text-white">Special collection</p>
                                <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">Man</h1>
                                <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                                    Discover
                                </p>
                            </div>
                        </div>
                        <div className="relative flex flex-col cursor-pointer">
                            <img src="https://i.ibb.co/4JJnHpc/carousel-3.png" alt="black guy" className="w-full" />
                            <img
                                src="https://i.ibb.co/Tb5CKHn/Rectangle-49.png"
                                alt="opacity bg"
                                className="absolute w-full top-0"
                            />
                            <div className="absolute m-6 bottom-0 z-30">
                                <p className="text-sm leading-none text-white">Special collection</p>
                                <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">Accessories</h1>
                                <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                                    Discover
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
