var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

/* FUNCAO PARA VALIDAR E CALCULAR TODOS OS IMCs DA TABELA
   Valida os dados já existentes na tabela, não os que são adicionados pelo imput
*/
var pacientes = document.querySelectorAll(".paciente");

/* for para percorrer as tds */
for (var i = 0; i < pacientes.length; i++) {

  /* A variável paciente representa um tr */
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  /* variáveis recebem o retorno das funções de validação (true ou false) */
  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  /* a função é executada quando um FALSE for TRUE no IF
    o NOT (!) está retornando TRUE para o FALSE q entra no IF e
    retornando um FALSE qdo um TRUE entra no IF.

    Um IF para ser executado precisa ser TRUE!

    O operador NOT (!) Retorna TRUE para declarações falsas e
    FALSE para declarações verdadeiras.

    Lembrando que esses IF's validam as informações dos pacientes
    que já estão no HTML, não os que serão adicionados.
  */
  if (!pesoValido) {
    console.log("Peso inválido!");
    pesoValido = false;
    tdImc.textContent = "Peso inválido!";
    /* adiciona a class na tr */
    paciente.classList.add("paciente-invalido")
  }
  if (!alturaValida) {
    console.log("Altura inválida!");
    alturaValida = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido")
  }
  if (pesoValido && alturaValida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

/* FUNÇÃO PARA VALIDAR PESO. QUANDO VÁLIDA RETORNA TRUE */
function validaPeso(peso) {
  if (peso >= 0 && peso <= 1000) {
    return true;
  } else {
    return false;
  }
}

/* FUNÇÃO PARA VALIDAR ALTURA. QUANDO VÁLIDA RETORNA TRUE */
function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}

/* FUNÇÃO PARA CALCULAR O IMC */
function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  /* delimita o resultado em duas casas decimais (toFixsed()) */
  return imc.toFixed(2);
}
