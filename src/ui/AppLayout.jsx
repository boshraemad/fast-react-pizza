import Header from "./Header"
import CartOverview from "../features/cart/CartOverview"
import { Outlet } from "react-router-dom"
import { useNavigation } from "react-router-dom"
import Loader from "./Loader"


export default function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';
  return (
    <div className="flex flex-col justify-between w-full min-h-screen bg-stone-100">
        {isLoading && <Loader/>}
        <Header/>
        <main className="w-full h-full">
            <Outlet/>
        </main>
        <CartOverview/>
    </div>
  )
}
