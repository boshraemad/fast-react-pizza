import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import DeleteItem from "../../ui/DeleteItem";
import UpdateQuantity from "../../ui/UpdateQuantity";

function CartItem({ item }) {
  const { pizzaId , name, quantity, totalPrice } = item;

  return (
    <li className="py-3">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <div className="flex gap-3">
        <DeleteItem pizzaId={pizzaId}/>
        <UpdateQuantity id={pizzaId}/>
        <Button type="secondary">clear cart</Button>
        </div>
      </div>
    </li>
  );
}

CartItem.propTypes={
  item:PropTypes.object.isRequired

}

export default CartItem;
