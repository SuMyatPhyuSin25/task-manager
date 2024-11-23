

import { updateDoneTaskTotal, updateTaskTotal } from "./lists.js";
import { listGroup } from "./selectors.js";

const observer = () => {

    const job = () => {

        // console.log("U change in list group");
        updateDoneTaskTotal();
        updateTaskTotal();
    }


    const observerOptions = {

        childList: true,
        subTree: true,
        attributes: true

    };

    const listGroupObserver = new MutationObserver(job);
    listGroupObserver.observe(listGroup,observerOptions);


}

export default observer;