import React from "react";
import { Link, NavLink } from "react-router-dom";
import { headerlist } from "@/static";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const list = headerlist.map((e, inx) => (
        <li key={inx}>
            <NavLink>{e}</NavLink>
        </li>
    ));
    return (
        <header className="py-7 site-header border-b">
            <div className="container max-w-[1240px] mx-auto px-5">
                <div className="flex items-center justify-between">
                    <Link className="text-2xl italic font-bold" to={"/"}>
                        LOGO
                    </Link>
                    <nav className="hidden lg:block">
                        <ul className="flex items-center gap-x-6">{list}</ul>
                    </nav>
                    <button className="lg:hidden">
                        <GiHamburgerMenu className="text-xl" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
