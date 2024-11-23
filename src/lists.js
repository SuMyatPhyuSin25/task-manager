

import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';


export const tasks = ["drink coffee", "sleep early", "learn code"];





export const updateTaskTotal = () => {

    const listTotal = document.querySelectorAll(".list");
    
     taskTotal.innerText = listTotal.length;
    
    }
    
export const updateDoneTaskTotal = () => {
    
        const doneListTotal = document.querySelectorAll(".list .list-done-check:checked");
    
        doneTaskTotal.innerText = doneListTotal.length;
    
    }
    
    
  export const createNewList = (currentTask) => {
    
    
        const list = listTemplate.content.cloneNode(true);
    
        console.log(list);
    
        list.querySelector(".list").id = "list" + uuidv4();
    
        list.querySelector(".list-task").innerText = currentTask;
    
      
    
        return list;
    
    }
    
    
    
   export const deleteList = (listId) => {
    
        // console.log(`u del`);
    
        const currentList = document.querySelector(`#${listId}`);


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

                currentList.classList.add("animate__animated", "animate__backOutDown");
    
            currentList.addEventListener("animationend", () => {
    
                currentList.remove();
    
                updateDoneTaskTotal();
    
                updateTaskTotal();
              
                })
            }
          });
    
      


    
    }
    
    
  export const editList = (listId) => {
    
        const currentList = document.querySelector(`#${listId}`);
    
        const listDoneCheck = currentList.querySelector(".list-done-check");
        const listTask = currentList.querySelector(".list-task");
        const listEditBtn = currentList.querySelector(".list-edit-btn");
        
    
        listEditBtn.setAttribute("disabled", true);
    
        listDoneCheck.setAttribute("disabled", true);
    
        const newTaskInput = document.createElement("input");
    
        const currentTask = listTask.innerText;
    
        newTaskInput.className = "border border-stone-950 px-1 py-1 focus-visible:outline-none w-[180px]";
    
        newTaskInput.value = currentTask;
    
        listTask.after(newTaskInput);
    
        newTaskInput.focus();
    
        listTask.classList.add("hidden");
    
        newTaskInput.addEventListener("blur", () => {
    
            listEditBtn.removeAttribute("disabled");
    
            listDoneCheck.removeAttribute("disabled");
    
            console.log('edit finish');
    
            listTask.innerText = newTaskInput.value;
    
    
            listTask.classList.remove("hidden");
    
            newTaskInput.remove();
    
            
    
        })
    
    
        newTaskInput.addEventListener("change", () => {
    
            listEditBtn.removeAttribute("disabled");
    
            listDoneCheck.removeAttribute("disabled");
    
            listTask.innerText = newTaskInput.value;
    
            listTask.classList.remove("hidden");
    
            newTaskInput.remove();
        })
    
    
    
    
    }
    
 export const checkDoneList = (listId) => {
    
    
        const currentList = document.querySelector(`#${listId}`);
    
        const listDoneCheck = currentList.querySelector(".list-done-check");
        const listTask = currentList.querySelector(".list-task");
        const listEditBtn = currentList.querySelector(".list-edit-btn");
        
    
            updateDoneTaskTotal();
            listTask.classList.toggle("line-through");
            currentList.classList.toggle("opacity-20");
            currentList.classList.toggle("scale-90");
            currentList.classList.add("duration-200");
            currentList.classList.add("rotate-4");
    
            if(listDoneCheck.checked){
    
                listEditBtn.setAttribute("disabled", true);
            }else{
    
                listEditBtn.removeAttribute("disabled");
            }
    }
    

    
export const addList = (text) =>{


    listGroup.append(createNewList(text));
    
    taskInput.value = null;
    
    updateTaskTotal();
    
    
    }
    