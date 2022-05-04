import React, { useEffect } from "react";
import { getData } from "../service/product.js";
import { getDataProduct, addCardProduct } from "../redux/_product";
import Cards from "../component/card.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Pagination  } from 'antd'
import Loading from "../component/loading.jsx";

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
    dispatch(addCardProduct({ item: result[0], quanlity: 2 }));
  };

  if(dataProduct.length === 0) {
    return <Loading/>
  }

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
      <Pagination defaultCurrent={1} total={20} />
    </div>
  );
}

export default Home;
