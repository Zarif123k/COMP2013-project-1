import QuantityCounter from "./QuantityCounter";

export default function CartCard({
  item,
  handleAddQuantity,
  handleRemoveQuantity,
  handleRemoveFromCart,
}) {
  const totalPrice = (
    item.cartQuantity * parseFloat(item.price.replace("$", ""))
  ).toFixed(2);
  return (
    <div className="CartCard">
      <div className="CartCardInfo">
        <img src={item.image} alt="" />
        <p>{item.productName}</p>
        <p> {item.price}</p>
        <QuantityCounter
          quantity={item.cartQuantity}
          productId={item.id}
          handleAddQuantity={handleAddQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
        />
      </div>
      <div>
        <h4>Total: ${totalPrice}</h4>
        <button
          style={{ backgroundColor: "red", color: "wheat" }}
          onClick={() => handleRemoveFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
