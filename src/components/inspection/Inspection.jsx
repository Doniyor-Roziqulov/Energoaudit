import React, { useEffect } from "react";
import Audit from "../audit/Audit";

const Inspection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Audit />
    </div>
  );
};

export default Inspection;
