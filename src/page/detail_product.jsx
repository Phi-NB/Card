import React, { useEffect, useState } from "react";
import { Button, Divider, Rate, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addCardProduct,
  getDataProduct,
} from "../redux/_product.js";
import { getData } from "../service/product.js";
import Loading from "../component/loading.jsx";
import {
  ShoppingCartOutlined, PlusOutlined, MinusOutlined
} from "@ant-design/icons";

function DetailProduct() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getDataProducts = async () => {
      const data = await getData();
      dispatch(getDataProduct(data));
    };
    getDataProducts();
  }, [dispatch]);
  const listProduct = useSelector((state) => state.product.listProduct);
  const listProductAdd = useSelector((state) => state.product.listProductAdd);
  const { detailId } = useParams();
  const [valueInput, setvalueInput] = useState(1);

  const result = listProduct.filter((product) => {
    return product.id === Number(detailId);
  });

  if (result.length === 0) {
    return <Loading />;
  }

  const onChange = (e) => {
    const re = new RegExp("^[0-9]+$");
    if (e.target.value === "" || re.test(e.target.value)) {
      if (Number(e.target.value) > 49) {
        setvalueInput(50);
      } else if (Number(e.target.value) < 2) {
        setvalueInput(1);
      } else {
        setvalueInput(Number(e.target.value));
      }
    }
  };

  const decrease = (e) => {
    let newValueInput = Number(valueInput);
    if (newValueInput < 2) {
      setvalueInput(1);
    } else {
      if (newValueInput > 50) {
        setvalueInput(50);
      } else {
        newValueInput -= 1;
        setvalueInput(newValueInput);
      }
    }
  };
  const increase = (e) => {
    let newValueInput = Number(valueInput);
    if (newValueInput > 49) {
      setvalueInput(50);
    } else {
      newValueInput += 1;
      setvalueInput(newValueInput);
    }
  };

  const updateStore = () => {
    dispatch(addCardProduct({ item: result[0], quanlity: valueInput }));
  };
  return (
    <div className="detail">
      <Divider orientation="left" style={{ fontSize: "20px" }}>
        {result[0].category.toUpperCase()}
      </Divider>
      <div className="detail__wraper">
        <div className="detail__wraper__img">
          <img src={result[0].image} alt="" />
        </div>
        <div className="detail__wraper__content">
          <h3>{result[0].title}</h3>
          <div className="detail__wraper__content__ranting">
            <div className="detail__wraper__content__ranting__star">
              <span>{result[0].rating.rate}</span>
              <Rate
                disabled
                defaultValue={result[0].rating.rate}
                style={{ marginLeft: "10px" }}
              />
            </div>
            <div
              className="detail__wraper__content__ranting__star"
              style={{
                marginLeft: "20px",
                paddingLeft: "20px",
                borderLeft: "1px solid #dadada",
              }}
            >
              <span>{result[0].rating.count}</span>
              <span style={{ marginLeft: "10px" }}>Comment</span>
            </div>
          </div>
          <div className="detail__wraper__content__price">
            <h3>{result[0].price} $</h3>
          </div>
          <div
            className="detail__wraper__content__decription"
            style={{ fontSize: "18px" }}
          >
            <span style={{ fontWeight: "600" }}>Description: </span>
            <p style={{ display: "inline", marginLeft: "10px" }}>
              {result[0].description}
            </p>
          </div>

          <div className="detail__wraper__content__quality__box">
            <div className="detail__wraper__content__quality__title">
              <h3>Quality</h3>
            </div>
            <div className="detail__wraper__content__quality">
              <Button onClick={decrease}>
                <MinusOutlined />
              </Button>
              <Input
                style={{ textAlign: "center" }}
                onChange={(e) => {
                  onChange(e);
                }}
                value={valueInput}
              />
              <Button onClick={increase}>
                <PlusOutlined />
              </Button>
            </div>
          </div>

          <div
            className="card__content__group-btn"
            style={{ justifyContent: "flex-start" }}
          >
            <Button
              onClick={updateStore}
              type="primary"
              block
              style={{
                marginTop: "30px",
                padding: "20px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                fontSize: "20px",
                width: "200px",
              }}
            >
              <ShoppingCartOutlined />
              Add Card
            </Button>
            <Button
              type="primary"
              block
              style={{
                marginTop: "30px",
                marginLeft: "30px",
                padding: "20px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                fontSize: "20px",
                width: "200px",
              }}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
