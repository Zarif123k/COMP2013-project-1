import QuantityCounter from "./QuantityCounter";
export default function ProductCard({
  id,
  productName,
  brand,
  image,
  price,
  currentQuantity,
  handleAddQuantity,
  handleRemoveQuantity,
  handleAddTocart,
}) {
  //   console.log("This id is:", id);
  return (
    <div className="ProductCard">
      <h3>{productName}</h3>
      <img src={image} alt="" />
      <p>{brand}</p>
      <QuantityCounter
        quantity={currentQuantity}
        handleAddQuantity={handleAddQuantity}
        productId={id}
        handleRemoveQuantity={handleRemoveQuantity}
      />
      <p>{price}</p>
      <button onClick={() => handleAddTocart(id)}>Add to cart</button>
    </div>
  );
}
