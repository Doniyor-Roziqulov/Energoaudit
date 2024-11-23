import Endtext from "@/components/endtext/Endtext";
import Geo from "@/components/geo/Geo";
import Hvac from "@/components/hvac/Hvac";
import Serves from "@/components/serves/Serves";
import React, { useEffect } from "react";

const Personnel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Serves />
      <Geo />
      <Hvac />
      <Endtext />
    </>
  );
};

export default Personnel;
