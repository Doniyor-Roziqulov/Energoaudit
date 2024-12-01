import Img from "@/components/img/Img";
import Kamera from "@/components/kamera/Kamera";
import Perimg from "@/components/perimg/Perimg";
import Text from "@/components/text/Text";
import React, { useEffect } from "react";

const Korlist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Img />
      <Text />
      <Perimg />
      <Kamera />
    </>
  );
};

export default Korlist;
