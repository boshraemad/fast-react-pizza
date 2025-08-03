import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";

function OrderItem({ item , isLoading , ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 space-y-1">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="font-bold">
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-stone-600 font-semibold italic">{isLoading ? "loading..." : ingredients.join(",")}</p>
    </li>
  );
}

OrderItem.propTypes={
  item:PropTypes.object,
  isLoading:PropTypes.bool,
  ingredients:PropTypes.array
}

export default OrderItem;
