import React from "react";
import LineHistory from "../../components/LineHistory";
import Banner from "../../components/Banner";

export default function About(params) {
    return (
        <div className="body-page-about flex">
            <div className="w-1/2 h-full flex flex-col items-center justify-around">
                <h2 className="font-cheorcy text-8xl text-white">Sobre Mim</h2>
                {/* <Banner/> */}
            </div>
            <div className="w-1/2 h-full flex items-center justify-center">
                <LineHistory />
            </div>
        </div>
    )
}