import React from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";

function Cards(props) {


  return (
    <Card
      className="card"
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={props.data.image} />}
    >
      <div className="card__content">
        <Link className="card__content__link" to={`/detailProduct/${props.data.id}`}>
          <p>{props.data.title}</p>
        </Link>
        <div className="card__content__group-btn">
          <p>{props.data.price} $</p>
          <Button
            type="primary"
            onClick={() => {
              props.getIdProduct(props.data.id)
            }}
          >
            Add Card
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default Cards;
