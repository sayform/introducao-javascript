/* FUNCAO PARA PEGAR OS VALORES DOS INPUTS E ADICIONAR A TABELA */
var botaoAdicionar = document.querySelector("#adicionar-paciente");

/* adcionada a função Listener ao botão, com uma função anônima */
botaoAdicionar.addEventListener('click', function(event) {

  /* função que faz que um evento não tenha seu comportamento padrão,
     é passado como parâmetro na função.
     Nesse caso anula o comportamento padrão do Form
     */
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  /* Usando a função que captura os dados do formulário - recebendo um form */
  var paciente = obtemPacienteDoFormulario(form);

  /* Se houver erros será adicionado a essa variável */
  var erros = validaPaciente(paciente);

  /* se o array de erros (length) for maior que 0, será usada
     a função exibeMensagensDeErro() para montar a lista de erro e exibi-la
   */
  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  /* Usando função para adicionar um paciente na tebela */
  adicionaPacienteNaTabela(paciente);

  /* Limpa os dados do formlário, depois de adicionado a tabela */
  form.reset();

  /* Limpa a <ul> das mensagens de erro */
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
})

/* FUNÇÃO PARA CRIAR UMA TR COM UM PACIENTE */
function adicionaPacienteNaTabela(paciente) {
    /* Criando uma TR, usando a função montaTr */
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    /* posicionando uma tr na tabela (tbody) */
    tabela.appendChild(pacienteTr);
}

/* FUNÇÃO QUE OBTEM OS DADOS DO FORM E CRIA UM OBJ PACIENTE */
function obtemPacienteDoFormulario(form) {

  /* criando objeto paciente, através dos inputs do formulário */
  var paciente = {
      /* atribuindo às variáveis os valores dos inputs,
         acessados pela propriedade "name"
         e lidos através da propriedade "value". */
      nome: form.nome.value,
      altura: form.altura.value,
      peso: form.peso.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value),
    }

  return paciente;
}

/* FUNÇÃO QUE CRIA TD E ADICIONA O DADO DO INPUT E UMA CLASS - POR PARAMETRO */
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

/* FUNÇÃO QUE CRIA TR E INSERE AS TD's NA TR - RECEBE UM PACIENTE POR PARAMETRO */
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    /* adicona uma class na Tr */
    pacienteTr.classList.add("paciente");

    /* adiciona as td's a tr, utiliza o método montaTd, que recebe os valores (dado e classe) */
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

/* FUNÇÃO PARA VALIDAR UM PACIENTE
  Validará o paciente quando submetermos o FORM.
  Essa função recebe um paciente por parâmetro e retorna um array (lista) de erros.
 */
function validaPaciente(paciente) {

  /* cria uma váriavel de Arrays (lista)
     Assim todos os erros podem retornar, não apenas aquele que entrar na primeira
     condição verdadeira, ignorando os demais (comportamento default).
   */
  var erros = [];

  /* valida se um input está preenchido */
  if (paciente.nome.length == 0) {
    /* Função PUSH -> adicona um valor no array, nesse caso os erros */
    erros.push("O nome não pode ser em branco!");
  }
  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser em branco!");
  }
  if (paciente.altura.length == 0) {
    erros.push("A altura não pode ser em branco!");
  }
  if (paciente.peso.length == 0) {
    erros.push("O peso não pode ser em branco!");
  }

  /* Usa as funções validaAltura e validaPeso para validar
     Usa a lógica do operador NOT (!) - lembrar calcula-imc.js
  */
  if (!validaAltura(paciente.altura)) {
    erros.push("Altura é inválido!");
  }
  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválido");
  }

  /* retorna o array de erros com as mensagens que serão exibidas
     junto retorna um tamanho(length), que pode ser capturado e percorrido (iteração)
  */
  return erros;
}

/* FUNÇÃO QUE CRIA AS MENSAGENS DE ERRO
    Recebe um array (lista) de erros,
    cria uma <li> para cada mensagem de erro.
 */
function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  /* não deixa acumular mensagens de erro quando os dados forem
     errados mais de uma vez.
   */
  ul.innerHTML = "";

  /* percorre os erros, o nome do parâmetro pode ser qq um */
  erros.forEach(function(erro) {
    /* cria a <li> */
    var li = document.createElement("li");
    /* adiciona a mensagem de erro a <li> */
    li.textContent = erro;
    /* coloca a <li> no <ul> */
    ul.appendChild(li);
  })
}
