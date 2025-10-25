import ProductCard from "./ProductCard";

export default function ProductsContainer({
  products,
  handleAddQuantity,
  handleRemoveQuantity,
  handleAddTocart,
}) {
  return (
    <div className="ProductsContainer">
      {products.map((prod) => (
        <ProductCard
          key={prod.id}
          {...prod}
          handleAddQuantity={handleAddQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
          handleAddTocart={handleAddTocart}
        />
      ))}
    </div>
  );
}
