import React from "react";
import Image from "next/image";

export default function Heros() {
    return (
        <div className="overflow-y-hidden">
            <div className="relative flex justify-center items-center md:justify-start w-full">
                <Image
                    className="w-full"
                    src="https://res.cloudinary.com/kenvo/image/upload/v1653575079/banner/img-banner-index_rcvnnw.webp"
                    alt="randeer"
                    width={1500}
                    height={600}
                    objectFit="cover"
                />
            </div>
        </div>
    );
}
