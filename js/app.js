// dom elements
const taskInput = document.querySelector('#input-task');
const taskSubmit= document.querySelector('#submit');
const taskContain = document.querySelector('#sub-container');

//new task adding
taskSubmit.addEventListener('click',()=>{
    var note = taskInput.value;
    if(note==""){
        alert('please enter a task');
    }else{
    newNote(note);
    taskInput.value="";
    }
})

//for new and unchecked task
let newNote = (note)=>{
   let notes =document.createElement('div');
   notes.classList.add('task');
   const htmlData = `
   <p class="display" >${note}</p>
   <div class="icondiva"><i class="fas fa-check"></i></div>
   <div class="icondivb"><i class="fas fa-trash"></i></div>`
   notes.insertAdjacentHTML('afterbegin',htmlData);
   taskContain.appendChild(notes);
   const checkTask = notes.querySelector('.icondiva');
   const deleteTask =notes.querySelector('.icondivb');
   deleteTask.addEventListener('click',()=>{
       notes.remove();
       localMem();
   })
checkTask.addEventListener('click',()=>{
    const para = notes.querySelector('.display');
    notes.classList.toggle('checked');
    para.classList.toggle('done');
    localMem();
   });
localMem();
}

//for checked task
let checkedNote =(note)=>{
    let notes =document.createElement('div');
    notes.classList.add('task','checked');
    const htmlData = `
    <p class="display done" >${note}</p>
    <div class="icondiva"><i class="fas fa-check"></i></div>
    <div class="icondivb"><i class="fas fa-trash"></i></div>`
    notes.insertAdjacentHTML('afterbegin',htmlData);
    taskContain.appendChild(notes);
    const checkTask = notes.querySelector('.icondiva');
    const deleteTask =notes.querySelector('.icondivb');
    deleteTask.addEventListener('click',()=>{
       notes.remove();
       localMem();
   })
checkTask.addEventListener('click',()=>{
    const para = notes.querySelector('.display');
    notes.classList.toggle('checked');
    para.classList.toggle('done');
    localMem();
   })
localMem();
}
//storing data to the local storage
let localMem =()=>{
    const allTask =document.querySelectorAll('.display');
    var checkedTask = [];
    var uncheckedTask=[];
    allTask.forEach((value)=>{
        if(value.classList.contains('done')){
         checkedTask.push(value.innerHTML);
        }else{
         uncheckedTask.push(value.innerHTML);
        }
    })
    //console.log(allTextarray);
    localStorage.setItem("content1",JSON.stringify(checkedTask));
    localStorage.setItem("content0",JSON.stringify(uncheckedTask));
    //localStorage.clear(); //clears all the data
}
//get data from local storage on window reload and execute functions
document.addEventListener('DOMContentLoaded',()=>{
    let extracted0 = JSON.parse(localStorage.getItem('content0'));
    let extracted1 = JSON.parse(localStorage.getItem('content1'));
    if(extracted0){
        extracted0.forEach((value)=>{
            newNote(value);
         })
        }
    if(extracted1){
         extracted1.forEach((value)=>{
            checkedNote(value);
      })
    }
})



//mannuly creating div
 // let para = document.createElement('p');
    // para.textContent = note;
    // notes.appendChild(para);
    // let icondiv1 = document.createElement('div');
    // icondiv1.classList.add('icondiva');
    // let icon1 = document.createElement('i');
    // icon1.classList.add('fas','fa-check');
    // icondiv1.appendChild(icon1);
    // let icondiv2 = document.createElement('div');
    // icondiv2.classList.add('icondivb');
    // let icon2 = document.createElement('i');
    // icon2.classList.add('fas','fa-trash');
    // icondiv2.appendChild(icon2);
    // notes.appendChild(icondiv1);
    // notes.appendChild(icondiv2);
    // taskContain.appendChild(notes);