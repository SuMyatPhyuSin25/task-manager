import { addList, editList, deleteList, checkDoneList} from "./lists.js";
import { listGroup } from "./selectors.js";
import Swal from 'sweetalert2';


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

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {

        if (result.isConfirmed) {

            allLists.forEach((list)=>{

                list.classList.add("animate__animated", "animate__backOutDown");

                list.addEventListener("animationend", () => {
        
                    list.remove();
        
                    updateDoneTaskTotal();
        
                    updateTaskTotal();
                  
                    })
                       
             })


        

        }
      });

  



}

export const doneAllHandler = () => {

    const allLists = listGroup.querySelectorAll(".list");

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, all check it!"
      }).then((result) => {

        if (result.isConfirmed) {

            allLists.forEach((list)=>{

                list.querySelector(".list-done-check").checked= true;

                        checkDoneList(list.id);
                       
             })


        

        }
      });


    
}

