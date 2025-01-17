import { productRender } from "./inventory";
import { sideBar } from "./selectors";
import { products } from "./states";

const initialRender = () => {
    //sideBar.classList.remove("translate-x-full");
    productRender(products);
}

export default initialRender;