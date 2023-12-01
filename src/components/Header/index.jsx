import React from "react";
import SocialMedia from '../SocialMedia';

export default function Header(params) {
    return (
        <div className="w-full h-20 text-white flex items-center px-5 justify-center font-medium flex-col drop-shadow-lg">
            <span className="text-xl flex gap-2">
                {/* matheus<p className="bg-gradient-to-r from-sky-400 to-purple-600 bg-clip-text text-transparent font-semibold">sousa</p> */}
                matheus sousa
            </span>
            <SocialMedia/>
        </div>
    )
}