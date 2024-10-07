import Calls from "@/components/call/Calls";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <main className="pt-[88px] relative dark:bg-[#1A1B1D]">
                <Outlet />
                <Calls />
            </main>
            <Footer className="overflow-x-hidden" />
        </>
    );
};

export default Layout;
