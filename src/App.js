import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { firestore } from "./firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    // //fetching all the products from the cloud firestore
    // firestore
    //   //query for fecthing the product which we want as per our query
    //   .collection("products") //getting all the products
    //   // .where('price','>=', 999) // after fetching db we should write query
    //   .onSnapshot((snapshot) => {
    //     // const products = snapshot.docs.map((doc) => {
    //     //   const data = doc.data();
    //     //   data["id"] = doc.id;
    //     //   return data;
    //   });
    // //   this.setState({
    // //     products: products,
    // //     loading: false,
    // //   });
    // // });

    // firestore
    //   .collection("products")
    //   .get()
    //   .then((snapshot) => {
    //     // console.log(snapshot.docs);

    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data["id"] = doc.id;
    //       return data;
    //     });

    //     this.setState({
    //       products,
    //       loading: false,
    //     });
    //   });

    //using onsSnapshot listener
    firestore
      .collection("products")
      .orderBy("price")
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });

        this.setState({
          products,
          loading: false,
        });
      });
  }

  increaseQty = (product) => {
    const { products } = this.state;
    const i = products.indexOf(product);
    // if (products[i].qty < 20) products[i].qty += 1;

    const docRef = firestore.collection("products").doc(products[i].id);
    docRef
      .update({
        qty: products[i].qty + 1,
      })
      .then(() => {
        console.log("products updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  decreaseQty = (product) => {
    const { products } = this.state;
    const i = products.indexOf(product);
    if (products[i].qty > 0) {
      const docRef = firestore.collection("products").doc(products[i].id);
      docRef
        .update({
          qty: products[i].qty - 1,
        })
        .then(() => {
          console.log("products updated");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  deleteItem = (product) => {
    const { products } = this.state;
    const i = products.indexOf(product);

    const docRef = firestore.collection("products").doc(products[i].id);
    docRef
      .delete()
      .then(() => {
        console.log("deleted successfully");
      })
      .catch((err) => {
        console.log(err);
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
  addProduct = () => {
    firestore
      .collection("products")
      .add({
        img: "https://cdn1.smartprix.com/rx-i6gTE5YIQ-w1200-h1200/6gTE5YIQ.jpg",
        price: 900,
        title: "Washing Machine",
        qty: 1,
      })
      .then((docRef) => {
        console.log("Added successfully", docRef);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  render() {
    const { products, loading } = this.state;
    return (
      <div>
        <Navbar count={this.count()} />
        <button onClick={this.addProduct} style={{ padding: 10, fontSize: 14 }}>
          Add a product
        </button>
        <Cart
          products={products}
          increaseQty={this.increaseQty}
          decreaseQty={this.decreaseQty}
          deleteItem={this.deleteItem}
        />
        {
          loading && <h2>Loading Cart</h2> //adding a loading cart loader
        }
        <h3 className="total">Total: Rs {this.total()}</h3>
      </div>
    );
  }
}

export default App;
