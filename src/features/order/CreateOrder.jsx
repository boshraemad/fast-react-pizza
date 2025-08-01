import { Form , redirect , useActionData , useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
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

  return (
    <div>
      <h2>Ready to order? Lets go!</h2>

      <Form method='POST'>
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
        </div>
        <p>{errors?.phone ? errors.phone : "" }</p>
        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <button disabled={isSubmitting}>{isSubmitting ? "submitting" : "new order"}</button>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
      </Form>
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
