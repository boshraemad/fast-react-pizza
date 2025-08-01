import { RouterProvider , createBrowserRouter } from "react-router-dom"
import Home from "../src/ui/Home"
import Cart from "../src/features/cart/Cart"
// import Order from "../src/features/order/Order"
// import OrderItem from "../src/features/order/OrderItem"
// import CreateOrder from "../src/features/order/CreateOrder"
import Menu , {Loader as MenuLoader} from "./features/menu/Menu"
import AppLayout from "./ui/AppLayout"
import Error from "./ui/Error"

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    errorElement: <Error/>,
    
    children:
      [
        {path:"/" , element:<Home/>},
        {path:"/cart" , element:<Cart/>},
        {path:"/menu" , element:<Menu/> , loader:MenuLoader ,  errorElement: <Error/>,},
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
