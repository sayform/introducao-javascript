/* FUNCAO PARA ELIMINAR UM PACIENTE */

var tabela = document.querySelector("#tabela-pacientes");

  /* EVENT BUBBLING
     quando escutamos um evento no Javascript, esse evento não acontece só no dono
     do evento, ele acontece nos diversos elementos pais

     Essa técnica garante a remocão de um paciente adicionado pelo formulário,
     caso contrário o paciente adicionado não seria "escutado" pelo evento,
     não teria o evento incorporado no carregamento da página.
   */
tabela.addEventListener('dblclick', function(event){

  /* damos um duplo clique no elemento, o evento sobe até a tabela, e dentro
  da função conseguimos perguntar qual <td> foi clicado (event.target) e a partir
  disto subir para o seu pai (parentNode) que é a <tr> do paciente e removê-la */

  /* target-> dia quem foi clicado, quem foi o alvo (<td>)
     parentNode-> seleciona o pai do elemento clicado, nesse caso a <tr>
     fadeOut-> adiciona uma classe para criar um efeito de fade antes de remover a <tr>
   */
  event.target.parentNode.classList.add("fadeOut");
  /* antes de entrar no método de remoção o setTimeout aguarda 5s,
  assim a remoção fica com efeito */
  setTimeout(function() {
    event.target.parentNode.remove();
  }, 500);

})
