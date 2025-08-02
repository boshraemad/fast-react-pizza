import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

function CartItem({ item }) {
  const {  name, quantity, totalPrice } = item;

  return (
    <li className="py-3">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <div className="flex gap-3">
        <Button type="small">Delete</Button>
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
