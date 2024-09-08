import Worker from "@/components/worker/Worker";
import React, { useEffect } from "react";

const Personnel = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <Worker />;
};

export default Personnel;
