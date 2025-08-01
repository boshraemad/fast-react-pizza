import { RouterProvider , createBrowserRouter } from "react-router-dom"
import Home from "../src/ui/Home"
import Cart from "../src/features/cart/Cart"
// import Order from "../src/features/order/Order"
// import OrderItem from "../src/features/order/OrderItem"
// import CreateOrder from "../src/features/order/CreateOrder"
import Menu from "./features/menu/Menu"
import AppLayout from "./ui/AppLayout"

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:
      [
        {path:"/" , element:<Home/>},
        {path:"/cart" , element:<Cart/>},
        {path:"/menu" , element:<Menu/>},
        // {path:"/order/new" , element:<CreateOrder/>},
        // {path:"/order/:orderId" , element:<OrderItem/>}
      ]
    
  }
])

export default function App() {

  return (
    <RouterProvider router={router}/>
  )
}
