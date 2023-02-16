import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Watch",
          price: 90,
          qty: 1,
          img: "https://images.pexels.com/photos/2861929/pexels-photo-2861929.jpeg?auto=compress&cs=tinysrgb&w=600",
          id: 1,
        },
        {
          title: "Laptop",
          price: 590,
          qty: 1,
          img: "data:image/jpeg;base64,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",
          id: 2,
        },
        {
          title: "Mobile",
          price: 490,
          qty: 1,
          img: "data:image/jpeg;base64,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",
          id: 3,
        },
      ],
    };
  }

  increaseQty = (product) => {
    console.log("Heyy please inc the qty of ", product);
    const { products } = this.state;
    const i = products.indexOf(product);
    if (products[i].qty < 20) products[i].qty += 1;

    this.setState({
      products,
    });
  };

  decreaseQty = (product) => {
    const { products } = this.state;
    const i = products.indexOf(product);
    if (products[i].qty > 0) products[i].qty -= 1;

    this.setState({
      products,
    });
  };
  deleteItem = (product) => {
    const { products } = this.state;
    const i = products.indexOf(product);

    products.splice(i, 1);
    this.setState({
      products,
    });
  };
  total = () => {
    let total = 0;
    const { products } = this.state;

    products.forEach((pro) => {
      total += pro.qty * pro.price;
    });

    return total;
  };
  count = () => {
    let count = 0;
    const { products } = this.state;
    products.forEach((pro) => {
      count += pro.qty;
    });

    return count;
  };
  render() {
    const { products } = this.state;
    return (
      <div>
        <Navbar count={this.count()} />
        <Cart
          products={products}
          increaseQty={this.increaseQty}
          decreaseQty={this.decreaseQty}
          deleteItem={this.deleteItem}
        />
        <h3 className="total">Total: Rs {this.total()}</h3>
      </div>
    );
  }
}

export default App;
