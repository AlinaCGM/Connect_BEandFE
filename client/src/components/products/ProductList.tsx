import React, { useEffect, useState } from "react";
import axios from "axios";
import { Products } from "../../../../types/type";
import ProductItem from "./ProductItem";
import { Box } from "@mui/material";

export default function ProductList() {
  const url = "http://localhost:8001/products";

  const [product, setProduct] = useState<Products[]>([]);

  function fetchData() {
    axios.get(url).then((res) => {
      setProduct(res.data);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      style={{
        width: "90%",
        marginInline: "auto",
        marginBottom: "100px",
      }}
    >
      {product.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </Box>
  );
}
