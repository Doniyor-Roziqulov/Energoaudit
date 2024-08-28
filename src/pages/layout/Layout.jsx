import Header from "@/components/header/Header";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <>
            <Header />
            <main
                onClick={() => {
                    setOpenMenu(!openMenu);
                }}
                className="mt-[90px]">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
