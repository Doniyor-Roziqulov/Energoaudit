import Works from "@/components/works/Works";
import React, { useEffect } from "react";

const Work = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <Works />;
};

export default Work;
