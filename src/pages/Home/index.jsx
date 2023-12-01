import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import ParticlesCont from "../../components/Particles";

export default function Home() {
    return (
        <div className="body-page-home">
            <div className="absolute z-10 w-full h-full">
                {/* <Banner /> */}
                <Header />
            </div>
            {/* <ParticlesCont /> */}
        </div>
    )
}