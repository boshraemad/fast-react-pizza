import Header from "./Header"
import CartOverview from "../features/cart/CartOverview"
import { Outlet } from "react-router-dom"
import { useNavigation } from "react-router-dom"
import Loader from "./Loader"


export default function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-stone-100">
        {isLoading && <Loader/>}
        <Header/>
        <main className="w-full h-full">
            <Outlet/>
        </main>
        <CartOverview/>
    </div>
  )
}
