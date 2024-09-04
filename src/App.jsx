import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Lists from "./components/lists/Lists";
// import { Watermark } from "antd";

function App() {
    return (
        <>
            {/* <Watermark content="Energoaudit">
            </Watermark> */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Home />} />
                    <Route path="lists" element={<Lists />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
