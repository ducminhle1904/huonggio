import React from "react";
import Banner from "../components/Banner";
import CardSexType from "../components/CardSexType";

export default function Home() {
    return (
        <>
            <Banner />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="pt-20 pb-12">
                    <CardSexType />
                </section>
            </div>
        </>
    );
}
