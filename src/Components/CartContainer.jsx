import CartCard from "./CartCard";

export default function CartContainer({
  cart,
  handleRemoveQuantity,
  handleAddQuantity,
  handleRemoveFromCart,
}) {
  return (
    <div className="CartContainer">
      {cart.map((item) => (
        <CartCard
          key={item.id}
          item={item}
          handleRemoveQuantity={handleRemoveQuantity}
          handleAddQuantity={handleAddQuantity}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}
    </div>
  );
}
