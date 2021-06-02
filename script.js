/*window.onload = initPage;

function initPage() {
  if (document.getElementById('lista-tarefas').style.backgroundColor === null) {
    return = 'Os itens da lista não tem o estilo CSS backgroun color'
  }
}*/

function newListItem() {
  const li = document.createElement('li');
  const inputValue = document.getElementById('texto-tarefa').value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById('lista-tarefas').appendChild(li);
  document.getElementById('lista-tarefas').style.backgroundColor = 'rgb(128,128,128)';
  document.getElementById('texto-tarefa').value = '';
}
