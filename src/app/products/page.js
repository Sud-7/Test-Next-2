"use client";

import React, { useEffect, useState } from "react";

const Page = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch("https://dummyjson.com/products");
      console.log(data.products);
      data = await data.json();

      setProduct(data.products);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {product.map((item) => (
        <h3 key={item.id}>
          Name: {item.title}, Price: {item.price}
        </h3>
      ))}
    </div>
  );
};

export default Page;
