import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const listProduct = useSelector((state) => state.product.listProductAdd)

  return (
    <div className="header">
      <Link className="header__logo" to="/">
        <h1>Product</h1>
      </Link>
      <Link to="/cardProduct">
        <ShoppingCartOutlined style={{ fontSize: "26px", cursor: "pointer"}} />
        {!listProduct.length ? <span></span> : <span>{listProduct.length}</span>}
      </Link>
    </div>
  );
}

export default Header;
