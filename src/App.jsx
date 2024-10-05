import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Call from "./pages/call/Call";
import Korlist from "./pages/korlist/Korlist";
import Personnel from "./pages/personnel/Personnel";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Price from "./pages/price/Price";
import { FiMoon, FiSun } from "react-icons/fi";
import { useState, useEffect } from "react";
import Aos from "aos";
import "../node_modules/aos/dist/aos.css";
import NotFound from "./components/notfound/NotFound";

function App() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const [darkMode, setDarkMode] = useState(() => {
        const savedDarkMode = localStorage.getItem("darkMode");
        return savedDarkMode === "true" ? true : false;
    });

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            localStorage.setItem("darkMode", !prevMode);
            return !prevMode;
        });
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <>
            <div className={`${darkMode ? "dark" : ""}`}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="" element={<Home />} />
                        <Route path="personnel" element={<Personnel />} />
                        <Route path="price" element={<Price />} />
                        <Route path="lists" element={<Korlist />} />
                        <Route path="contact" element={<Call />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
                <button
                    onClick={toggleDarkMode}
                    className="fixed border flex items-center justify-center z-50 w-8 h-8 top-6 right-16 lg:right-4 min-[1389px]:right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black">
                    {darkMode ? (
                        <FiSun className="text-base" />
                    ) : (
                        <FiMoon className="text-base" />
                    )}
                </button>
            </div>
        </>
    );
}

export default App;
