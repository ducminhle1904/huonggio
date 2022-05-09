// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade  } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import 'swiper/css/effect-fade';

export default function Banner() {
    return (
        <div className="h-[90vh] pt-20">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
                modules={[Navigation, Autoplay, EffectFade]}
                className="h-full"
                autoplay={{delay: 3000, disableOnInteraction: false}}
                loop={true}
            >
                <SwiperSlide>
                    <img
                        src="https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://images.unsplash.com/photo-1651772939278-42e1e1f0d4e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://images.unsplash.com/photo-1651796348282-0d16a5b22640?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
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
