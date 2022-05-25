// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export default function Banner() {
    return (
        <div className="h-[70vh] z-10">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                modules={[Navigation, Autoplay, EffectFade]}
                className="h-full"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
            >
                <SwiperSlide>
                    <Image
                        src="https://technext.github.io/cozastore/images/slide-03.jpg"
                        className="w-full h-full object-cover"
                        layout="fill"
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="https://technext.github.io/cozastore/images/slide-01.jpg"
                        className="w-full h-full object-cover"
                        layout="fill"
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="https://technext.github.io/cozastore/images/slide-02.jpg"
                        className="w-full h-full object-cover"
                        layout="fill"
                        priority
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
