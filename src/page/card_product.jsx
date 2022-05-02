import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, Divider, Avatar } from "antd";
import { Link } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import { deleteCardProduct } from '../redux/_product.js'

function Home() {
  const dispatch = useDispatch();
  const dataProduct = useSelector((state) => state.product.listProductAdd);

  const deleteItem = (index) => {
    dispatch(deleteCardProduct(index));
  }

  return (
    <div className="app">
      <Divider orientation="left">Product</Divider>
      <List
        size="small"
        bordered
        dataSource={dataProduct}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={<Link to="">{item.title}</Link>}
              description={item.price + '$'}
            />
            <div style={{cursor: 'pointer'}} onClick={() => deleteItem(index)}>
              <CloseOutlined/>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}

export default Home;
