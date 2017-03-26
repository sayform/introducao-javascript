var buscarPacientes = document.querySelector('#buscar-pacientes');

buscarPacientes.addEventListener('click', function(){

  /* Instancia do objeto que executa requisições no JS */
  var xhr = new XMLHttpRequest();

  /* método que configura o XMLHttpRequest. Configuramos o método e o servidor (endereço) */
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  /* com o addEventListener pegamos a resposta quando a requisição voltar */
  xhr.addEventListener('load', function(){

    var erroAjax = document.querySelector("#erro-ajax");

    if(xhr.status == 200) {
    /* adiciona uma classe no span para mostrar o erro */
    erroAjax.classList.add("invisivel");

    /* capturamos a resposta da requisição */
    var resposta = xhr.responseText;

    /* parse da resposta, transforma em um array de objetos  */
    var pacientes = JSON.parse(resposta);

    pacientes.forEach(function(paciente) {
      /* usa a função adicionaPacienteNaTabela escrito no
      form.js para adicionar um paciente (tr) */
      adicionaPacienteNaTabela(paciente);
    })
    } else {
      erroAjax.classList.remove("invisivel");
    }
  })
  /* método que envia a requisição */
  xhr.send();
})
