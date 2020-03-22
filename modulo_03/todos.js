var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')); //Variável que garda os itens do array que estão no localStorage

//Exibe os todos
function renderTodos () {
    // Limpa o array pra não repetir o con
    listElement.innerHTML = '';

    for (todo of todos) {

        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        //Atribui um href ao <a>
        linkElement.setAttribute('href', '#');


        var pos = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'deleteTodo(' + pos +')');

        var linkText = document.createTextNode('Excluir');
 
        linkElement.appendChild(linkText); //Joga o texto dentro da tag <a>
        todoElement.appendChild(todoText); //Joga o texto da variável todo dentro da <li>
        todoElement.appendChild(linkElement); //Joga joga a <a> dentro da <li>
        listElement.appendChild(todoElement); //Joga a li dentro da ul
    }
}

renderTodos();

//Adiciona um todo
function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = ''; //Reseta o input
    renderTodos();
    saveToStorage(); //guarda no storage
}

buttonElement.onclick = addTodo; //Ao ser clickado ativa a função addTodo()

function deleteTodo(pos) { //Função que deleta todo
    todos.splice(pos, 1); //deleta na posição x
    renderTodos(); //renderiza novamente
    saveToStorage(); //guarda no storage
}

//Guarda as informações do input no localStorage
function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}