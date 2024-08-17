import Product22 from "./product";

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
