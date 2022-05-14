// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper";

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
                    <img
                        src="https://technext.github.io/cozastore/images/slide-03.jpg"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://technext.github.io/cozastore/images/slide-01.jpg"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://technext.github.io/cozastore/images/slide-02.jpg"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://images.unsplash.com/photo-1651827383918-8cf74580942a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
