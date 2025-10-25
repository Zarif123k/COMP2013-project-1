import NavBar from "./NavBar";
import products from "../data/products";
import { useState } from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
export default function GroceriesAppContainer() {
  const [productList, setProductList] = useState(
    products.map((prod) => {
      return { ...prod, currentQuantity: 0 };
    })
  );

  const [cart, setCart] = useState([]);
  console.log(cart);

  const handleAddQuantity = (productId) => {
    const newProducts = productList.map((prod) => {
      if (prod.id === productId) {
        return { ...prod, currentQuantity: prod.currentQuantity + 1 };
      } else {
        return prod;
      }
    });
    setProductList(newProducts);
  };

  const handleRemoveQuantity = (productId) => {
    const newProducts = productList.map((prod) => {
      if (prod.id === productId) {
        return {
          ...prod,
          currentQuantity:
            prod.currentQuantity > 0 ? prod.currentQuantity - 1 : 0,
        };
      } else {
        return prod;
      }
    });
    setProductList(newProducts);
  };

  const handleAddTocart = (someId) => {
    const addedProduct = productList.find((prod) => prod.id === someId);
    console.log("Id", someId);
    console.log(addedProduct);
    if (!addedProduct) return;
    if (addedProduct.currentQuantity === 0) {
      alert("Quantity should be more than 0");
      return;
    }
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === someId);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === someId
            ? {
                ...item,
                cartQuantity: item.cartQuantity + addedProduct.currentQuantity,
              }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            ...addedProduct,
            cartQuantity: addedProduct.currentQuantity,
          },
        ];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };
  return (
    <div className="GroceriesApp">
      <NavBar />
      <ProductsContainer
        products={productList}
        handleAddQuantity={handleAddQuantity}
        handleRemoveQuantity={handleRemoveQuantity}
        handleAddTocart={handleAddTocart}
      />
      <CartContainer
        cart={cart}
        handleAddQuantity={handleAddQuantity}
        handleRemoveQuantity={handleRemoveQuantity}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
}
