// Test ID: IIDSAT
import OrderItem from "./OrderItem"
import { useEffect } from "react";
import { useLoaderData , useFetcher } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import UpdateOrder from "../../ui/UpdatePriority";

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";


function Order() {
  const order=useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  
  const fetcher = useFetcher();
  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
    },
    [fetcher]
  );

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-xl font-semibold"> order #{id} Status</h2>

        <div>
          {priority && <span className="bg-red-500 rounded-full text-sm uppercase font-semibold px-3 py-1 tracking-wide text-red-50">Priority</span>}
          <span className="bg-green-500 rounded-full text-sm uppercase font-semibold px-3 py-1 tracking-wide text-green-50">{status}</span>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-2 bg-stone-200 px-6 py-5">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
            <ul className="didvide-y-2 border-y divide-stone-200">
              {cart.map((item)=><OrderItem item={item} key={item.id} ingredients={fetcher?.data?.find((el)=>el.id === item.pizzaId)?.ingredients ?? []} isLoading={fetcher.state === "loading"}/>)}
            </ul>
      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="text-sm font-bold text-stone-600 ">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function loader({params}){
  const order = getOrder(params.orderId);
  return order;
}

export default Order;
