import React, { useEffect } from "react";
import Img from "../img/Img";
import Text from "../text/Text";

const Employees = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Img />
      <Text />
    </div>
  );
};

export default Employees;
