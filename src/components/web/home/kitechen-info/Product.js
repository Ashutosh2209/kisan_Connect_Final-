import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./kitechen.css";
import { addItemsToCart } from "../../../../actions/cartActions";
import { useSelector, useDispatch } from "react-redux";

const Product = ({ props }) => {
  //console.log("props", props);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  // const post = useSelector((state) => state.cart.cartItems);
  //console.log("post data", post);

  const addToCartHandler = (id) => {
    //console.log("props", props._id);
    dispatch(addItemsToCart(id, quantity));
    //alert.success("Item Added To Cart");
  };
  useEffect(() => {}, []);

  return (
    <div className="col-md-3 pro-1">
      <div className="col-m">
        <Link
          to="#"
          data-toggle="modal"
          data-target="#myModal2"
          className="offer-img"
        >
          <img src={props.images[0].url} className="img-responsive" alt="" />
        </Link>
        <div className="mid-1">
          <div className="women">
            <h6>
              <Link to="/"> {props.name}</Link>(250 g)
            </h6>
          </div>
          <div className="mid-2">
            <p>
              <label>$5.00</label>
              <em className="item_price">Rs.{props.price}</em>
            </p>
            <div className="block">
              <div className="starbox small ghosting"> </div>
            </div>
            <div className="clearfix" />
          </div>
          <div className="add">
            <button
              className="btn btn-danger my-cart-btn my-cart-b"
              //onClick={addToCartHandler}//() => {console.log(props); addToCartHandler(props)}}

              onClick={() => addToCartHandler(props._id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
