var lisElement = document.querySelector('#pp ul');
var lisElement = document.querySelector('#pp input');
var lisElement = document.querySelector('#pp button');

var todos = [
  'fazer café',
  'estudar javascript',
  'nao ao java',
  'nunca ao laravel'
];

function renderTodos() {
  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    todoElement.appendChild(todoText);
    list.appendChild(todoElement);
  }
}

renderTodos();
