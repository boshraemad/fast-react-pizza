import { Form , redirect , useActionData , useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const errors = useActionData();
  const navigation=useNavigation();
  const isSubmitting = navigation.state === "submitting"
  const username = useSelector((state)=>state.user.username);

  return (
    <div className="w-full h-full flex items-center justify-center">
          <div className="w-full  md:w-[650px] lg:w-[800px] px-4 md:border md:border-yellow-300 md:py-6 md:bg-stone-100 md:rounded-lg">
      <h2 className="font-bold mb-6 text-lg">Ready to order? Lets go!</h2>

      <Form method='POST' className="w-full md:w-[80%]">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" className="input" required defaultValue={username}/>
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input className="input" type="tel" name="phone" required />
          </div>
        </div>
        <p>{errors?.phone ? errors.phone : "" }</p>
        <div>
          <label>Address</label>
          <div>
            <input className="input" type="text" name="address" required />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="accent-yellow-500 h-6 w-6 focus-outline-none focus:ring-yellow-400 focus:ring-offset-2 "
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <button className="mt-6 px-4 py-2 bg-yellow-500 rounded-full text-stone-700 focus:outline-none focus:ring-yellow-400 focus:ring-offset-2" disabled={isSubmitting}>{isSubmitting ? "submitting" : "new order"}</button>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
      </Form>
    </div>
    </div>
  );
}

export async function action({request}){
  const formData = await request.formData();
  const data=Object.fromEntries(formData);
  const newOrder={
    ...data,
    cart:JSON.parse(data.cart),
    priority: data.priority === "on"
  }

  const errors={};
  if(!isValidPhone(newOrder.phone)) errors.phone="please enter a correct phone number we will need it to deliver your order"

  if(Object.keys(errors).length > 0) return errors;
  console.log(newOrder)

  const order = await createOrder(newOrder);
  return redirect(`/order/${order.id}`);
}
export default CreateOrder;
