import Lists from "@/components/lists/Lists";
import React, { useEffect } from "react";

const Korlist = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <Lists />;
};

export default Korlist;
