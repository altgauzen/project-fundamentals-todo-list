function changeColorItem(event) {
  //  armazena na constante allLines a lista dos elementos li
  const allLines = document.querySelectorAll('li');
  //  armazena na constante lineSelected o elemento acionado no click
  const lineSelected = event.target;
  for (let index = 0; index < allLines.length; index += 1) {
    const currentLine = allLines[index];
    //  se condição atendida, adicionar a classe selected ao item da lista
    if (currentLine === lineSelected) {
      event.target.classList.add('selected');
    } else {
      currentLine.classList.remove('selected');
    }
  }
}

function lineThrough(event) {
  const lineSelected = event.target;
  if (lineSelected.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function newListItem() {
  //  cria um item de lista e armazena na constante li
  const li = document.createElement('li');
  //  busca o valor inserido no input texto-tarefa e armazena na constante inputValue
  const inputValue = document.getElementById('texto-tarefa').value;
  //  armazena o inputValue na constante t um text node criado segundo referencia no link abaixo
  // https://www.w3schools.com/jsref/met_document_createtextnode.asp
  const t = document.createTextNode(inputValue);
  //  anexa o texto do text node t ao item da lista como último filho
  li.appendChild(t);
  //  anexa a constante li como última filha do elemento lista ordenada capturado no dom pelo id lista-tarefas
  document.getElementById('lista-tarefas').appendChild(li);
  //  adiciona escutador de click, para chamar função da mudança de cor
  li.addEventListener('click', changeColorItem);
  //  adicionado escutador de duplo click, para chamar função da tarefa completa
  li.addEventListener('dblclick', lineThrough);
  //  limpa o texto digitado no input ao termino da função (recebe valor limpo)
  document.getElementById('texto-tarefa').value = '';
}

function clearList() {
  const allLines = document.querySelectorAll('li');
  for (let index = 0; index < allLines.length; index += 1) {
    allLines[index].remove();
  }
}

function removeCompleted() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTasks.length; index += 1) {
    completedTasks[index].remove();
  }
}

/*  function saveList() {
  const currList = document.querySelectorAll('li');

}  */

function removeItem() {
  const allLines = document.querySelectorAll('li');
  for (let index = 0; index < allLines.length; index += 1) {
    if (allLines[index].classList.contains('selected')) {
      allLines[index].remove('li');
    }
  }
}
