import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import UserName from "../features/user/UserName"
export default function Header() {
  return (
    <header className="bg-yellow-500 flex items-center justify-between px-4 py-3 font-pizza">
        <Link to="/" className="font-bold text-stone-700 text-md md:text-xl">Your Fast Pizza App</Link>
        <SearchOrder/>
        <UserName/>
    </header>
  )
}
