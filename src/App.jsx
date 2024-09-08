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
import Price from "./pages/price/Price";
import Work from "./pages/work/Work";
// import "./styles.css";
// import { Watermark } from "antd";

function App() {
    return (
        <>
            {/* <Watermark content="Energoaudit">
            </Watermark> */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Home />} />
                    <Route path="work" element={<Work />} />
                    <Route path="personnel" element={<Personnel />} />
                    <Route path="price" element={<Price />} />
                    <Route path="lists" element={<Korlist />} />
                    <Route path="contact" element={<Call />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
