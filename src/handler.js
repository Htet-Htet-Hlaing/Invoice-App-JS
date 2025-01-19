import { closeSideBarBtn } from "./selectors";

export const manageInventoryBtnHandler = () => {
    console.log(sideBar.classList.toggle("translate-x-full"));
}

export const closeSideBarBtnHandler = () => {
        console.log(sideBar.classList.toggle("translate-x-full"));
}

export const checkoutHandler = () => {
    console.log("Checkout complete");
    window.print();
}