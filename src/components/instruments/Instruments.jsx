import React, { useEffect } from "react";
import Perimg from "../perimg/Perimg";
import Kamera from "../kamera/Kamera";

const Instruments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Perimg />
      <Kamera />
    </div>
  );
};

export default Instruments;
