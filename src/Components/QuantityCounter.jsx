export default function QuantityCounter({
  quantity,
  handleAddQuantity,
  productId,
  handleRemoveQuantity,
}) {
  return (
    <div className="ProductQuantityDiv">
      <button onClick={() => handleRemoveQuantity(productId)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => handleAddQuantity(productId)}>+</button>
    </div>
  );
}
