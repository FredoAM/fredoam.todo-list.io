const tareas = document.querySelector('.tareas');
const input = document.querySelector('.tarea-input')
const tareaBtn = document.querySelector('.btn');

let id = 0;
const pendientes = document.createElement('div');
    pendientes.classList.add('pendientes');
    pendientes.textContent = 'Sin Tareas Pendientes  😍';
mensaje();

tareaBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    
    showTarea()
    

    input.value = '';
})

tareas.addEventListener('click', changeTarea)




const showTarea = ()=>{
    
    
    if(input.value === ''){
        return
    }

    pendientes.remove();

    const tarea = document.createElement('div');
    tarea.classList.add('tarea');

    id+= 1;

    tarea.innerHTML = `
        <span class="tarea-id">${id}</span>
        <div class="tarea-info">
            <span>😀</span>
            <span class="desc-tarea">${input.value}</span>
            <input type="text" value="${input.value}" class="editar-tarea">
        </div>
        
        <div class="botones">
            <span><i class="complete fa-regular fa-square-check"></i></span>
            <span><i class="edit fa-regular fa-pen-to-square"></i></span>
            <span><i class="trash fa-solid fa-trash"></i></span>
        </div>
    `
  
    tareas.appendChild(tarea);
    
}

function mensaje(){
    
    if (tareas.childElementCount === 0) {
       
        tareas.appendChild(pendientes);
    }
}

function changeTarea(e) {
    const item = e.target;
    console.log(item.classList[0])

    if (item.classList[0] === "trash") {
        const trash = item.parentElement.parentElement.parentElement;
        trash.remove()
    }


    if (item.classList[0] === "edit") {
        const editando = item.parentElement.parentElement.previousElementSibling;
        const editar = editando.children[1];
        const editar2 = editando.children[2];
        editar.classList.toggle("active");
        editar2.classList.toggle("active");
        editar.innerHTML = `${editar2.value}`
    }
    

    if (item.classList[0] === "complete") {
        const completado = item.parentElement.parentElement.parentElement;
        completado.classList.toggle("completed");
    }
    mensaje()
  }
