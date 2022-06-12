/* eslint-disable @next/next/no-img-element */
export default function Partners() {
    return (
        <div className="bg-gray-50">
            <div className="py-12 flex flex-col justify-center items-center space-y-10">
                <div className="flex flex-col justify-center items-center space-y-2">
                    <h1 className="text-base md:text-4xl font-semibold leading-none text-gray-600">
                        CHÚNG TÔI CÓ MẶT Ở
                    </h1>
                    <div className="w-9 h-0.5 bg-gray-300" />
                </div>
                <div className="flex justify-center items-center gap-20">
                    <div className="w-16 h-6 lg:w-44 lg:h-16">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png"
                            alt="shopee"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="w-16 h-6 lg:w-44 lg:h-16">
                        <img
                            src="https://fastwayvn.com/wp-content/uploads/2020/10/mua-hang-lazada.png"
                            alt="lazada"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="w-16 h-6 lg:w-44 lg:h-16">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Facebook_Logo_%282015%29_light.svg/2560px-Facebook_Logo_%282015%29_light.svg.png"
                            alt="facebook"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
