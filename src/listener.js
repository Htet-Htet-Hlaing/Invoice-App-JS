import { checkoutHandler, closeSideBarBtnHandler, manageInventoryBtnHandler } from "./handler"
import { addNewProductBtnHandler } from "./inventory";
import { createRecordFormHandler, recordGroupHandler } from "./records";
import { addNewProductBtn, checkout, closeSideBarBtn, createRecordForm, manageInventoryBtn, recordGroup } from "./selectors"

const listener = () => {
    manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);
    closeSideBarBtn.addEventListener("click", closeSideBarBtnHandler);
    addNewProductBtn.addEventListener("click", addNewProductBtnHandler);
    createRecordForm.addEventListener("submit", createRecordFormHandler);
    recordGroup.addEventListener("click", recordGroupHandler);
    checkout.addEventListener("click", checkoutHandler);
}


export default listener;