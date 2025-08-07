
function ProductItem({ name, price, description, image }) {
  return (
    <div className="product-item">
      <img className="product-image" src={image} alt={`Image of ${name}`} />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
}

export default ProductItem;