import React, { useEffect } from "react";
import { getData } from "../service/product.js";
import { getDataProduct, addCardProduct } from "../redux/_product";
import Cards from "../component/card.jsx";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const dataProduct = useSelector((state) => state.product.listProduct);

  useEffect(() => {
    const getDataProducts = async () => {
      const data = await getData();
      dispatch(getDataProduct(data));
      
    };
    getDataProducts();
  }, [dispatch]);

  const getIdProduct = (id) => {
    const result = dataProduct.filter((product) => {
      return id === product.id;
    });
    for (let i = 0; i < result.length; i++) {
      dispatch(addCardProduct(result[i]));
    }
  };

  return (
    <div className="app">
      <div className="product">
        {dataProduct.map((product) => {
          return (
            <Cards
              getIdProduct={getIdProduct}
              key={product.id}
              data={product}
            ></Cards>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
