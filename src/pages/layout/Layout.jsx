import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <main className="mt-[90px] relative">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
