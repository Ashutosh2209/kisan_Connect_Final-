import React from "react";
import { Grid, Card } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  productQuantity,
  clearProduct,
} from "../../../actions/productQuantity";
import "./cart.css";
import { useState } from "react";
import { addItemsToCart, removeItemsFromCart } from "../../../actions/cartActions";

const Cart = () => {
  let productsInCart = [];
  // Object.keys(cartProps.products).forEach(function (item) {
  //     if (cartProps.products[item].inCart) {
  //         productsInCart.push(cartProps.products[item])
  //     }
  // })

  const dispatch = useDispatch();
  const post = useSelector((state) => state.cart.cartItems);
  console.log("cart data", post);
  // if(cartItem[0] === undefined) {
  //     console.log("name",cartItem[0].name);
  //   }

 
  const [quantity, setQuantity] = useState(1);
  
    
  const increaseQuantity = (i) => {
      if (post.Stock <= quantity) return;
      // console.log("quantity",quantity);
      const qty = quantity + 1;
      setQuantity(qty);
    };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const deleteCartItems = (_id) => {
    dispatch(removeItemsFromCart(_id));
  };
  // console.log("cart number", cartProps)
  return (
    <div>
      <Grid container className="shopping_cart">
        <Grid item md={2} lg={2} xl={2}></Grid>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          <div className="spec ">
            <h3>Shopping Cart</h3>
            <div className="ser-t">
              <b />
              <span>
                <i />
              </span>
              <b className="line" />
            </div>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <table className="table ">
                <tbody>
                  <tr>
                    <th className="t-head head-it ">Products</th>
                    <th className="t-head">Price</th>
                    <th className="t-head">Quantity</th>
                    <th className="t-head">Total</th>
                  </tr>
                  {post &&
                    post.map((item) => {
                      return (
                        <tr className="cross1" /*key={index}*/>
                          <td className="t-data ring-in">
                    
                            <div className="sed">
                            <img
                            
                                src={item.images[0].url}
                                className="img-responsive"
                                alt=""
                              />
        <h5>{item.name}</h5>
        </div>
    {/* <div className="clearfix"> </div> */}
    <div className="close2" onClick={() => deleteCartItems(item._id)}> <i className="fa fa-times" aria-hidden="true" /></div>
    
                            {/* <Link className="at-in">
                              
                            </Link> */}
                            {/* <div className="sed">
                                                            <h5>{product.name}</h5>
                                                        </div>
                                                        <div className="clearfix"> </div>
                                                        <div className="close2" onClick={() => clearProduct(product.tagName)}> <i className="fa fa-times" aria-hidden="true" /></div> */}
                          </td>
                          {/* <td className="t-data">{product.price}</td> */}
                          <td className="t-data">
                            <div className="quantity">
                              <div className="quantity-select">
                                {/* <button className="entry value-minus" onClick={decreaseQuantity}>&nbsp;</button>
                                                            <input className="entry value" value={quantity}><span className="span-1">{product.numbers}</span></input>
                                                            <button className="entry value-plus active"  onClick={increaseQuantity}>&nbsp;</button> */}
                                {/* <button>+</button>
                                <input
                                  type="number"
                                  value={item.quantity}
                                  readOnly
                                />
                                <button>-</button> */}
                                <td className="t-data">{item.price}</td>
                              </div>
                            </div>
                          </td>
                          {/* <td className="t-data t-w3l">{product.price * product.numbers}</td> */}
                          <td className="t-data t-w3l">
                          <button className="entry value-plus active" onClick={increaseQuantity}>+</button>
                                <input
                                className="entry value"
                                  type="number"
                                  value={quantity}
                                  readOnly
                                />
                                <button className="entry value-minus" onClick={decreaseQuantity}>-</button>
                            {/* {item.price * item.quantity} */}
                          </td>
                          <td className="t-data t-w3l">
                          {/* <button>+</button>
                                <input
                                  type="number"
                                  value={item.quantity}
                                  readOnly
                                />
                                <button>-</button> */}
                            {item.price *quantity}
                            
                          </td>
                          
                        </tr>
                        
                      );
                    })}
                </tbody>
              </table>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              className="price_details_bk"
            >
              <Card>
                <span className="title">Price details</span>
                <div class="_2twTWD">
                  <div class="hJYgKM">
                    <div class="_10vVqD">Price ({} item)</div>
                    <span> ₹{}</span>
                  </div>
                  <div class="hJYgKM">
                    <div class="_10vVqD">Delivery Fee</div>
                    <span>
                      <span class="_27kB8M _3Oa-sk">Free</span>
                    </span>
                  </div>
                  <div class="_3xFQAD">
                    <div class="hJYgKM">
                      <div class="_10vVqD">Total Amount</div>
                      <span>
                        <div class="tnAu1u">
                          <span> ₹{}</span>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="_22vQVX">You will save ₹0 on this order</div>
                </div>
                <Link to="/checkout">
                  <div className="process_checkout_bk">
                    <span>Proceed to Checkout</span>
                  </div>
                </Link>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
      </Grid>
    </div>
  );
};
// const mapStateToProps = (state) => ({
//     cartProps: state.cartState
// });

export default Cart;

{
  /* <tr className="cross1" key={index}>
                                                    <td className="t-data ring-in">
                                                        <Link className="at-in"><img src="kh.jpg" className="img-responsive" alt="" /></Link>
                                                        <div className="sed">
                                                            <h5>{product.name}</h5>
                                                        </div>
                                                        <div className="clearfix"> </div>
                                                        <div className="close2" onClick={() => clearProduct(product.tagName)}> <i className="fa fa-times" aria-hidden="true" /></div>
                                                    </td>
                                                    <td className="t-data">{product.price}</td>
                                                    <td className="t-data"><div className="quantity">
                                                        <div className="quantity-select">
                                                            <button className="entry value-minus" onClick={decreaseQuantity}>&nbsp;</button>
                                                            <input className="entry value" value={quantity}><span className="span-1">{product.numbers}</span></input>
                                                            <button className="entry value-plus active"  onClick={increaseQuantity}>&nbsp;</button>
                                                        </div>
                                                    </div>
                                                    </td>
                                                    <td className="t-data t-w3l">{product.price * product.numbers}</td>
                                                </tr> */
}
