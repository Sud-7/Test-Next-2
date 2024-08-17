import Product22 from "./product";
import image from "../../../public/vercel.svg";
import Image from "next/image";

async function productlist() {
  let data = await fetch("https://dummyjson.com/products");
  //   console.log(data.products);
  data = await data.json();
  return data.products;
}

export default async function Product() {
  let product = await productlist();
  return (
    <div>
      <h1>Product List</h1>
      <Image src={image} height={200} width={200} />
      <Image
        src="https://images.freeimages.com/image/previews/477/sweet-flat-candy-png-5690113.png"
        width={200}
        height={200}
      />
      {product.map((item) => (
        <div>
          <h3 key={item.id}>Name: {item.title}</h3>
          <p>{item.description}</p>
          <Product22 price={item.price} />
        </div>
      ))}
    </div>
  );
}
