/*function enterText() {
  let text = document.getElementById('texto-tarefa').value;
  document.getElementById('lista-tarefas').innerHTML = text;
  document.getElementById('texto-tarefa').value = '';
  newListItem();
}*/

function newListItem() {
  let li = document.createElement('li');
  let inputValue = document.getElementById('texto-tarefa').value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById('lista-tarefas').appendChild(li);
  document.getElementById('texto-tarefa').value = '';
}
