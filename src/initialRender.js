

import { addList, tasks } from "./lists.js";
import observer from "./observer.js";



const initialRender = () => {

    console.log("start initial render");

    tasks.forEach((task)=>{

        addList(task);
    })

    observer();
}

export default initialRender;