import React from "react";

const CartItems = (props) => {
  const { price, title, qty, img } = props.product;

  return (
    <div className="cart-Item">
      <div className="left-block">
        <img style={styles.image} src={img} alt="" />
      </div>
      <div className="right-block">
        <h2>{title}</h2>
        <p>Rs. {price}</p>
        <p>
          Quantity : <span>{qty}</span>
        </p>
        <div className="cart-actions">
          <img
            className="actions"
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            alt="minus button"
            onClick={() => props.decreaseQty(props.product)}
          />
          <img
            className="actions"
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            alt="plus button"
            onClick={() => props.increaseQty(props.product)}
          />
          <img
            className="actions"
            src="https://cdn-icons-png.flaticon.com/512/2907/2907762.png"
            alt="delete button"
            onClick={() => props.deleteItem(props.product)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
    background: "#ccc",
  },
};

export default CartItems;
