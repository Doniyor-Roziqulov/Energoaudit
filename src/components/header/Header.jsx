import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { headerlist } from "@/static";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const list = headerlist.map((e, inx) => (
        <li className="border-b border-black font-semibold" key={inx}>
            <NavLink>{e}</NavLink>
        </li>
    ));
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <header className="py-7 site-header border-b relative">
            <div className="container max-w-[1240px] mx-auto px-5">
                <div className="flex items-center justify-between">
                    <Link className="text-2xl italic font-bold" to={"/"}>
                        LOGO
                    </Link>
                    <nav
                        className={
                            openMenu
                                ? "block lg:block min-[500px]:px-16 md:px-20 lg:p-0 lg:left-0 lg:h-auto lg:top-0 lg:relative absolute top-[90px] transition-[0.5s] pl-12 pr-12 pt-3  left-0 z-10 bg-white h-screen"
                                : "block lg:block min-[500px]:px-16 md:px-20 lg:p-0 lg:left-0 lg:h-auto lg:top-0 lg:relative absolute top-[90px] transition-[0.5s] pl-5 left-[-300px] z-10 bg-white h-screen"
                        }>
                        <ul className="flex flex-col md:flex-row items-start gap-x-6 gap-y-3">
                            {list}
                        </ul>
                    </nav>
                    <button
                        onClick={() => {
                            setOpenMenu(!openMenu);
                        }}
                        className="lg:hidden">
                        <GiHamburgerMenu className="text-xl" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
