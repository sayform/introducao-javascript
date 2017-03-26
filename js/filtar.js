var campoInput = document.querySelector("#filtrar-tabela");

campoInput.addEventListener('input', function(){
  var pacientes = document.querySelectorAll('.paciente');

  /* this representa o campoInput (que é o dono do evento)
      em caso de texto digitado entra no if
  */
  if(this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;

      /* expressão regular - regex
         - primeiro valor do parâmetro = é o texto que queremos buscar,
           nesse caso o que for digitado no campo imput
         - segundo valor = buscar letras case insenditive
      */
      var expressao = new RegExp(this.value, "i");

      /* método test() da Regex, passamos o que queremos testar, retornando true ou false,
          a partir daí verifica a condição */
      if(expressao.test(nome)) {
        paciente.classList.remove("invisivel");
      } else {
        paciente.classList.add("invisivel");
      }

    /* quando limpamos o campo input, assim aparecem todos os nomes da lista */
    }} else {
      for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        paciente.classList.remove("invisivel");
      }
    }
})
