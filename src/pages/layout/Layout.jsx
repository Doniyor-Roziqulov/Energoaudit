import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <main className="pt-[120px] relative dark:bg-[#1A1B1D] overflow-x-scroll">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
