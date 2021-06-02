function enterText() {
  let text = document.getElementById("texto-tarefa").value;
  document.getElementById("lista-tarefas").innerHTML = text;
}