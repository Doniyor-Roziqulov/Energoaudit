import Product from "@/components/product/Product";
import React, { useEffect } from "react";

const Price = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Product />;
};

export default Price;
