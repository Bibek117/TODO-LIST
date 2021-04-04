//all dom elements
const taskInput = document.querySelector('#input-task');
const taskSubmit= document.querySelector('#submit');
const taskContain = document.querySelector('#sub-container');

//new task adding
taskSubmit.addEventListener('click',()=>{
    var note = taskInput.value;
    if(note==""){
        alert('please enter a task');
    }else{
    //console.log(note);
    newNote(note);
    taskInput.value="";
    }
});
//new display div with content and icons
let newNote = (note)=>{
    let notes =document.createElement('div');
     notes.classList.add('task');
   const htmlData = `
   <p>${note}</p>
   <div class="icondiva"><i class="fas fa-check"></i></div>
   <div class="icondivb"><i class="fas fa-trash"></i></div>`
   notes.insertAdjacentHTML('afterbegin',htmlData);
   console.log(notes);
   taskContain.appendChild(notes);
   const checkTask = notes.querySelector('.icondiva');
   const deleteTask =notes.querySelector('.icondivb');
   deleteTask.addEventListener('click',()=>{
       notes.remove();
   })
   checkTask.addEventListener('click',()=>{
    notes.classList.add('checked');
    })  

}



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