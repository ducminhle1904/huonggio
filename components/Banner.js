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
        <div className="h-[75vh] z-10">
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
                        src="https://res.cloudinary.com/kenvo/image/upload/v1653574224/banner/slideshow_4_qglaxq.webp"
                        className="w-full h-full object-cover"
                        layout="fill"
                        priority
                        alt="banner"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="https://res.cloudinary.com/kenvo/image/upload/v1653574220/banner/slideshow_2_o4pnk6.webp"
                        className="w-full h-full object-cover"
                        layout="fill"
                        priority
                        alt="banner"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="https://res.cloudinary.com/kenvo/image/upload/v1653574219/banner/slideshow_3_qclcgv.webp"
                        className="w-full h-full object-cover"
                        layout="fill"
                        priority
                        alt="banner"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
