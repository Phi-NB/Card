import "./App.css";
// import Couter from './component/couter.jsx'
// import Card from './component/card.jsx'
// import Home from "./home/home.jsx";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/header/header.jsx";
import routeConfig from "./config/routes.js";
import { Routes, Route } from "react-router-dom";
import DetailProduct from "./page/detail_product.jsx";

function App() {
  // const listProduct = useSelector((state) => state.product.listProduct);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routeConfig.map((config, index) => {
          return (
            <Route key={index} path={config.path} element={config.component} />
          );
        })}
        <Route path="/detailProduct" element={<DetailProduct />}>
          <Route path=":detailId" element={<DetailProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
