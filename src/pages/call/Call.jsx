import Contact from "@/components/contact/Contact";
import React, { useEffect } from "react";

const Call = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <Contact />;
};

export default Call;
