import Button from "./Button"
import { useDispatch , useSelector} from "react-redux"
import { increaseQuantity , decreaseQuantity , getCurrentQuantity } from "../features/cart/CartSlice";
import PropTypes from "prop-types";

export default function UpdateQuantity ({id}) {
    const dispatch=useDispatch();
    const currentQuantity=useSelector(getCurrentQuantity(id));

  return (
    <div className="flex items-center gap-2">
        <Button type="round" onClick={()=>{dispatch(increaseQuantity(id))}}>+</Button>
        <span className="font-bold">{currentQuantity}</span>
        <Button type="round" onClick={()=>{dispatch(decreaseQuantity(id))}}>-</Button>
    </div>
  )
}

UpdateQuantity.propTypes={
    id:PropTypes.number
  
  }
  