import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Call from "./pages/call/Call";
// import Korlist from "./pages/korlist/Korlist";
// import Personnel from "./pages/personnel/Personnel";
// import Price from "./pages/price/Price";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { FiMoon, FiSun } from "react-icons/fi";
import { useState, useEffect } from "react";
import Aos from "aos";
import "../node_modules/aos/dist/aos.css";
import NotFound from "./components/notfound/NotFound";
import "./App.css";
import Employees from "./components/employees/Employees";
import Workdone from "./components/workdone/Workdone";
import Instruments from "./components/instruments/Instruments";
import Audit from "./components/audit/Audit";
import Otm from "./components/otm/Otm";
import Unity from "./components/unity/Unity";
import Regime from "./components/regime/Regime";
import Geo from "./components/geo/Geo";
import Hvac from "./components/hvac/Hvac";
import Endtext from "./components/endtext/Endtext";
import Inspection from "./components/inspection/Inspection";
import Natural from "./components/natural/Natural";
import Sun from "./components/sun/Sun";
import Calculyator from "./components/calculyator/Calculyator";

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
            <Route path="employees" element={<Employees />} />
            <Route path="workdone" element={<Workdone />} />
            <Route path="instruments" element={<Instruments />} />
            {/* <Route path="lists" element={<Korlist />} /> */}
            <Route path="audit" element={<Audit />} />
            <Route path="otm" element={<Otm />} />
            <Route path="unity" element={<Unity />} />
            <Route path="regime" element={<Regime />} />
            <Route path="chemical" element={<Geo />} />
            <Route path="hvac" element={<Hvac />} />
            <Route path="agtksh" element={<Endtext />} />
            {/* <Route path="personnel" element={<Personnel />} /> */}
            <Route path="inspection" element={<Inspection />} />
            <Route path="natural" element={<Natural />} />
            <Route path="sun" element={<Sun />} />
            <Route path="calculyator" element={<Calculyator />} />
            {/* <Route path="price" element={<Price />} /> */}
            <Route path="contact" element={<Call />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <button
          onClick={toggleDarkMode}
          className="fixed border flex items-center justify-center z-50 w-8 h-8 top-4 lg:top-16 right-16 lg:right-4 min-[1389px]:right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black"
        >
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
