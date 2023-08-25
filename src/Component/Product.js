import React from "react";

const Products = ({ product, handleAddToCart }) => {
  return (
    <div className="col-md-3 mb-3">
      <div key={product.id}>
        <div className="card h-100 text-center p-1">
          <img
            className="card-img-top"
            src={product.images.nodes[0].url}
            alt={product.title}
            height="250px"
          />
          <div className="card-body">
            <h5 className="card-title ">{product.title.substring(0, 15)}...</h5>
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
    </div>
  );
};

export default Products;
