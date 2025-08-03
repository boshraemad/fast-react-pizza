import Button from "./Button"
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../features/cart/CartSlice";


export default function DeleteItem({pizzaId}) {
    const dispatch=useDispatch();
  return (
    <Button type="small" onClick={()=>{dispatch(deleteFromCart(pizzaId))}}>Delete</Button>
  )
}

DeleteItem.propTypes={
    pizzaId:PropTypes.number
  }