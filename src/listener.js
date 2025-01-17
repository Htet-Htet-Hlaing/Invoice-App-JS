import { closeSideBarBtnHandler, manageInventoryBtnHandler } from "./handler"
import { addNewProductBtnHandler } from "./inventory";
import { createRecordFormHandler, recordGroupHandler } from "./records";
import { addNewProductBtn, closeSideBarBtn, createRecordForm, manageInventoryBtn, recordGroup } from "./selectors"

const listener = () => {
    manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);
    closeSideBarBtn.addEventListener("click", closeSideBarBtnHandler);
    addNewProductBtn.addEventListener("click", addNewProductBtnHandler);
    createRecordForm.addEventListener("submit", createRecordFormHandler);
    recordGroup.addEventListener("click", recordGroupHandler);
}


export default listener;