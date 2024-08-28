import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
// import { Watermark } from "antd";

function App() {
    return (
        <>
            {/* <Watermark content="Energoaudit">
            </Watermark> */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Home />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
