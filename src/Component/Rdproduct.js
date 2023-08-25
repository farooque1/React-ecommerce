import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../Redux/Action";

function Rdproduct() {
  const [matchingProducts, setMatchingProducts] = useState([]);
  const dispatch = useDispatch();
  const Cartdata = useSelector((state) => state.ProductReducer);

  const handleAddToCart = (item) => {
    dispatch(addtocart(item));
  };

  useEffect(() => {
    const cartTags = Cartdata.cart.flatMap((item) => item.tags);
    console.log(cartTags);

    fetch("https://boppotech.github.io/react-task-json.github.io/reactjob.json")
      .then((response) => response.json())
      .then((data) => {
        const matching = data.filter((product) => {
          return product.tags.some((tag) => cartTags.includes(tag));
        });
        setMatchingProducts(matching);
        console.log(matching);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [Cartdata.cart]);

  return (
    <div>
      <h3>Recommended Product</h3>
      <div className="row mb-5">
        {matchingProducts.map((product) => (
          <div className="col-md-3 mb-2" key={product.handle}>
            <div class="card h-100 text-center p-1">
              <img
                class="card-img-top"
                src={product.images.nodes[0].url}
                alt={product.title}
                height="250px"
              />
              <div class="card-body">
                <h5 class="card-title ">{product.title.substring(0, 15)}...</h5>
                <div className="d-flex justify-content-between">
                  <h6>Rs {product.price.amount}</h6>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rdproduct;
