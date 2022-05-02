import React, { useEffect } from "react";
import { Card, Button } from "antd";
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addCardProduct, getDataProduct } from '../redux/_product.js'
import { getData } from '../service/product.js'


function DetailProduct() {
  const dispatch = useDispatch()
  useEffect(() => {
    const getDataProducts = async () => {
      const data = await getData();
      dispatch(getDataProduct(data));
    };
    getDataProducts();
  }, [dispatch])
  const listProduct = useSelector((state) => state.product.listProduct)
  const { detailId } = useParams()

  const result = listProduct.filter(product => {
    return product.id === Number(detailId)
  })

  return (
    <Card
      className="card"
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={result[0].image} />}
    >
      <div className="card__content">
        <h3 className="card__content__link">
          <p>{result[0].title}</p>
        </h3>
        <div className="card__content__group-btn">
          <Button
            type="primary"
            onClick={() => {
              dispatch(addCardProduct(result[0]));
            }}
          >
            Add Card
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default DetailProduct;
