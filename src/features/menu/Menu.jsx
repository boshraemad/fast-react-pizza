import {getMenu} from "../../services/apiRestaurant"
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  const menu=useLoaderData();
  return <div>
    {menu.map((pizza)=>
      <MenuItem key={pizza.id} pizza={pizza}/>
    )}
  </div>;
}


export async function Loader(){
  const menu = await getMenu();
  return menu;
}

export default Menu;
