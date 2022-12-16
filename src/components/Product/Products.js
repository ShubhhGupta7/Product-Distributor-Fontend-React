import Product from "./Product";

const products = [
  {
    productName: "Shubh",
    productPrice: "10000000000",
    productDescription: "Developer",
  },
  {
    productName: "Shubh Gupta",
    productPrice: "10000000000",
    productDescription: "CEO, Product Manager",
  },
  {
    productName: "DevGupta",
    productPrice: "10000000000",
    productDescription: "Enterprenuer",
  },
];

function Products() {
  return (
    <div>
      <h1>This is the list of Products</h1>
      <ul>
        {products.map((product) => {
          return <Product key={product.productName} productName={product.productName}
          productPrice={product.productPrice}
          productDescription={product.productDescription} />;
        })}
      </ul>
    </div>
  );
}

export default Products;
