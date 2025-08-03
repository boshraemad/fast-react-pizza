import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalPrice , getTotalQuantity } from "./CartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalQuantity=useSelector(getTotalQuantity);
  const totalPrice=useSelector(getTotalPrice);

  if(!totalPrice) return null;
  return (
    <div className="bg-stone-800 text-stone-200 px-4 py-2 flex items-center justify-between">
      <p className="text-dark flex items-center gap-3 font-bold">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
