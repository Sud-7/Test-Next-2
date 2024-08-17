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
        <h3 key={item.id}>
          Name: {item.title}, Price: {item.price}
        </h3>
      ))}
    </div>
  );
}
