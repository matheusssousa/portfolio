import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookBookmark, House, TextAlignCenter, User, X } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import './styles.css';

export default function Sidebar() {
    const [navbarOpen, setNavbarOpen] = useState(true);

    const menus = [
        { name: "Home", link: "/home", icon: House },
        { name: "Projetos", link: "/projects", icon: BookBookmark },
        { name: "Sobre Mim", link: "/about", icon: User },
    ]

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    const handleClickOutside = (event) => {
        if (event.target.closest(".buttonNavbarOpenToClose") === null) {
            setNavbarOpen(true);
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
            <div className="w-full flex justify-center">
                <motion.nav
                    className="navbar"
                    initial={false}
                    animate={{ width: navbarOpen ? 50 : 200, height: navbarOpen ? 50 : 100 }}
                >
                    <div className={`${!navbarOpen ? 'items-start':'items-center'} w-full h-full rounded-full flex justify-center`}>
                        {!navbarOpen &&
                            <div className="CircleContainer">
                                {menus.map((menu, i) => (
                                    <NavLink
                                        key={i}
                                        to={menu.link}
                                        className={({isActive, isPending}) => `link ${isPending ? "link-pending" : ""} ${isActive ? "link-active" : ""}`}
                                        >
                                        <div className="link-icon">{React.createElement(menu?.icon, { size: "25" })}</div>
                                    </NavLink>
                                ))}
                            </div>
                        }
                        {navbarOpen ? <TextAlignCenter size={25} onClick={toggleNavbar} className="buttonNavbarOpenToClose" /> : <X size={25} onClick={toggleNavbar} className="buttonNavbarOpenToClose text-white" />}
                    </div>
                </motion.nav>
            </div>
    )
}
