import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, decreaseQuantity, increaseQuantity, removetocart } from "../Redux/Action";
import Rdproduct from "./Rdproduct";
import Home from "./Home";
import { DECREASE_QUANTITY, INCREASE_QUANTITY } from "../Redux/Constant";

function Cart() {
  const Cartdata = useSelector((state) => state.ProductReducer);
  console.log(Cartdata.cart);

  const dispatch = useDispatch();

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
        console.log(item);
  };
  
  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
    console.log(item);
  };
  
  const handleremove = (item) => {
    dispatch(removetocart(item));
  };

  let totalAmount = Cartdata.cart.reduce((total, item) => {
    return total + item.price.amount * item.qty},0);
  
  console.log(totalAmount);
  

  return (
    <div className="container mt-5">
      <table class="table caption-top">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Size</th>
            <th scope="col">Price</th>
            <th scope="col">quantity</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
        {Cartdata.cart.map((data) => (
          <tr key={data.handle}>
            <td>
            <img src={data.images.nodes[0].url} height="60px" /></td>
            <td>{data.title}</td>
            <td>{data.attributes[0].value}</td>
            <td>Rs {data.price.amount}</td>

            <td>
              <button className="btn btn-primary" onClick={() => handleDecreaseQuantity(data)}>-</button>
              <button className="btn btn-success">{data.qty}</button>
              <button className="btn btn-primary" onClick={() => handleIncreaseQuantity(data)}>+</button>
            </td>

            {/* <td><button className="btn btn-primary" > - </button>
            <button className="btn btn-success"> {data.quantity } </button>
            <button className="btn btn-primary" > + </button></td> */}
            
            <td><button className="btn btn-danger" onClick={()=> handleremove(data.handle)}>Remove</button></td>
          </tr>          
          ))}
          <tr>
            <th rowSpan="col">Subtotal</th>
            <td colSpan="1"><b>Total Amount</b> Rs {totalAmount} </td>
            </tr>
        </tbody>
      </table>
      
      <Rdproduct />
      <h3 className="mt-5">All Product</h3>
      <Home />      
    </div>
  );
}

export default Cart;
