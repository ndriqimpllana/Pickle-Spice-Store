import ProductItem from "./ProductItem";
function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductList;