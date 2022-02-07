import React, { useEffect, useState } from "react";
import "./App.css";
import Web from "./components/web";
import NoMatch from "./components/nomatch";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./actions/productActions";

/** Redux Provider */
import { Provider } from "react-redux";

/** Store */
import store from "./store";
import axios from "axios";

function App() {
  // const dispatch = useDispatch();
  // const [product, setProduct] = useState([]);
  // const posts = useSelector((state) => state.cartState.products);
  // // posts.map((e) => {
  // //   return console.log("data from map", e);
  // // });
  // const url = "http://localhost:5000/api/v1/products";
  // async function Userdata() {
  //   try {
  //     const data = await axios.get(url);
  //     // setProduct(data.data.products);
  //     dispatch(addToCart(data.data.products));
  //     console.log("user data", data.data.products.reviews);
  //   } catch (error) {
  //     console.log("there is an error", error);
  //   }
  // }
  // useEffect(() => {
  //   Userdata();
  // }, []);

  // console.log("data from store", posts);
  // console.log("all product data", product);
  return (
    // <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Web} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </div>
    // </Provider>
  );
}

export default App;
