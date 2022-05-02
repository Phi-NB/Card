import Home from '../home/home.jsx'
import CardProduct from '../page/card_product.jsx'
import DetailProduct from '../page/detail_product.jsx'

const routeConfig = [
  {
    component: <Home/>,
    path: '/',
  },
  {
    component: <CardProduct/>,
    path: '/cardProduct'
  },
  {
    component: <DetailProduct/>,
    path: '/detailProduct'
  },
]

export default routeConfig