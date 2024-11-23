
import { addTaskBtnHandler, 
      listGroupHandler,
        taskInputHandler,
        deleteAllHandler,
        doneAllHandler
     } from "./handlers.js";


import {

    addTaskBtn,
    listGroup,
    taskInput,
    deleteAll,
    doneAll
} from "./selectors.js";


const listener = () => {

    addTaskBtn.addEventListener("click", addTaskBtnHandler);
    listGroup.addEventListener("click", listGroupHandler);
    taskInput.addEventListener("keyup", taskInputHandler);
    deleteAll.addEventListener("click", deleteAllHandler);
    doneAll.addEventListener("click", doneAllHandler);
}

export default listener;