import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../Redux/Action";
import Products from "./Product";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addtocart(item));
    console.log(item);
  };

  useEffect(() => {
    const getproduct = async () => {
      setloading(true);
      const response = await fetch(
        "https://boppotech.github.io/react-task-json.github.io/reactjob.json"
      );
      setData(await response.clone().json());
      console.log(response.clone().json());
      setloading(false);
    };
    getproduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">Loading....</div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {data.map((product) => {
          return (
            <Products
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Home;
