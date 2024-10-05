import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { headerlist } from "@/static";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
    const list = headerlist.map((e, inx) => (
        <li
            className=" text-neutral-600  dark:text-neutral-300 border-neutral-600 font-semibold hover:opacity-70 transition-all"
            key={inx}>
            <NavLink
                className="border-b border-white dark:border-slate-900"
                to={e.link}
                onClick={() => {
                    setOpenMenu(!openMenu);
                }}>
                {e.title}
            </NavLink>
        </li>
    ));
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <header className="fixed dark:bg-gray-900 py-6 bg-white site-header border-b shadow-md left-0 top-0 z-40 w-full">
            <div className="container max-w-[1240px] mx-auto px-5">
                <div className="flex items-center justify-between">
                    <Link
                        className="text-2xl dark:text-white italic font-bold"
                        to={"/"}>
                        LOGO
                    </Link>
                    <nav
                        className={
                            openMenu
                                ? "block border-t lg:border-t-0 border-black dark:border-white lg:block min-[500px]:px-16 md:px-20 lg:p-0 lg:left-[-35px] lg:h-auto lg:top-0 lg:relative absolute top-[80px] transition-[0.5s] pl-12 pr-12 pt-3 dark:bg-slate-900  left-0 z-10 bg-white  h-screen"
                                : "block lg:block min-[500px]:px-16 md:px-20 lg:p-0 lg:left-[-35px] lg:h-auto lg:top-0 lg:relative absolute top-[80px] transition-[0.5s] pl-5 left-[-3000px] dark:bg-slate-900 z-10 bg-white h-screen"
                        }>
                        <ul className="flex flex-col lg:flex-row items-start gap-x-6 gap-y-3">
                            {list}
                        </ul>
                    </nav>
                    <div
                        onClick={() => setOpenMenu(false)}
                        className={
                            openMenu === false
                                ? "hidden"
                                : "fixed left-0 top-[88px] w-full lg:hidden h-screen bg-[#0009]"
                        }></div>
                    <button
                        onClick={() => {
                            setOpenMenu(!openMenu);
                        }}
                        className="lg:hidden">
                        {openMenu ? (
                            <IoCloseSharp className="text-2xl dark:text-white" />
                        ) : (
                            <GiHamburgerMenu className="text-xl dark:text-white" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
