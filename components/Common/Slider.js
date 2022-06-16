// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export default function Slider({ data, objectFit }) {
    return (
        <div className="h-full z-10">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                modules={[Navigation, Autoplay, EffectFade]}
                className="h-full"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image src={item} alt={`image${index}`} layout="fill" objectFit={objectFit} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
