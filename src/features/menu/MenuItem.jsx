import PropTypes from "prop-types";
import {formatCurrency} from "../../utils/helpers"
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/CartSlice";
function MenuItem({ pizza }) {
  const { id , name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch=useDispatch();

  const handleAddToCart=()=>{
    const cartItem={
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
      
    }

    dispatch(addToCart(cartItem));
  }
  return (
    <li className="list-none flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`} />
      <div className="flex flex-col grow pt-0.5 ">
        <p className="font-medium text-sm italic text-stone-500 capitalize">{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase text-stone-500">Sold out</p>}
          {!soldOut && <Button onClick={handleAddToCart} type="small" className="bg-yellow-500 text-stone-700 px-3 py-1.5 rounded-full font-semibold">add cart</Button>}
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id:PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    ingredients:PropTypes.array.isRequired,
    soldOut:PropTypes.bool.isRequired,
    imageUrl:PropTypes.string.isRequired

  }).isRequired
};

export default MenuItem;
