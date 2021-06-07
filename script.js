function newListItem() {
  let li = document.createElement('li');
  let inputValue = document.getElementById('texto-tarefa').value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById('lista-tarefas').appendChild(li);
  li.addEventListener('click',changeColorItem);
  document.getElementById('texto-tarefa').value = '';
}

function changeColorItem(event) { 
  let allLines = document.querySelectorAll('li');
  let lineSelected = event.target;
  for (let index = 0; index < allLines.length; index += 1) {
    let currentLine = allLines[index];
    if (currentLine === lineSelected) {
      event.target.classList.add('selected');
    } else {
      currentLine.classList.remove('selected');
    }
  }
}
