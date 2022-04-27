let index = 0;

function adicionar (){
    
    const tarefa = document.getElementById('tarefas').value
     document.getElementById('tarefas').value =''

    let lista = document.querySelector(".list > fieldset")


    const elemento = '<div class="opt"><input type="checkbox" name="tarefa'+index+'" id="tarefa'+index+'"> <label for="tarefa'+index+'">'+tarefa+'</label></div>'

    lista.innerHTML = lista.innerHTML + elemento;
    
    index ++
    
}