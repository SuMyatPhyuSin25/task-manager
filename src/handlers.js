import { addList, editList, deleteList, checkDoneList} from "./lists.js";
import { listGroup } from "./selectors.js";



export const listGroupHandler = (event) => {

   
    const list = event.target.closest(".list");
// console.log(event.target);

if(event.target.classList.contains("list-edit-btn")){


    // console.log(`u edit`);
          
    
    editList(event.target.closest(".list").id);



}else if(event.target.classList.contains("list-del-btn")){

    // console.log(`u del`);

    // deleteList(event.target.closest(".list").id);

    deleteList(event.target.closest(".list").id);


}else if(event.target.classList.contains("list-done-check")){


    checkDoneList(event.target.closest(".list").id);
     
   
}


    

}






export const addTaskBtnHandler = () => {

    // addList(taskInput.value);

    if(taskInput.value.trim()){

        addList(taskInput.value);
    }else{

        alert("U must input task.");
    }




}
    
export const taskInputHandler = (event) => {

    if(event.key=="Enter"){

       if(taskInput.value.trim()){

        addList(taskInput.value);

       }else{

        alert("U must input task.");
       }
    }

}

export const deleteAllHandler = () => {

    const allLists = listGroup.querySelectorAll(".list");

    // console.log(allLists);

    if(confirm("Are u sure u want to delete all lists?")){

        allLists.forEach((list)=>{

            list.remove();
        })
    }
}

export const doneAllHandler = () => {

    if(confirm("Are u sure u wanna done all lists")){

        const allLists = listGroup.querySelectorAll(".list");

        allLists.forEach((list)=>{

            list.querySelector(".list-done-check").checked= true;

            checkDoneList(list.id);

        });
    }
}

