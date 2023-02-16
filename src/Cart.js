import React from "react";
import CartItems from "./CartItems";

const Cart = (props) => {
  //<CartItems qty={1} price={576} title={"Watch"} />
  const { products } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItems
            product={product}
            key={product.id}
            increaseQty={props.increaseQty}
            decreaseQty={props.decreaseQty}
            deleteItem={props.deleteItem}
          />
        );
      })}
    </div>
  );
};

export default Cart;
