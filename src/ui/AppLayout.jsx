import Header from "./Header"
import CartOverview from "../features/cart/CartOverview"
import { Outlet } from "react-router-dom"
import { useNavigation } from "react-router-dom"
import Loader from "./Loader"
import SearchOrder from "../features/order/SearchOrder"

export default function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';
  return (
    <div className="layout">
      <SearchOrder/>
        {isLoading && <Loader/>}
        <Header/>
        <main>
            <Outlet/>
        </main>
        <CartOverview/>
    </div>
  )
}
