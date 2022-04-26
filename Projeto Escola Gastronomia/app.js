// Conectar informações do botão desenvolvido no arquivo HTML
let botao = document.getElementById("botao-topo");

// Função nativa do windows chamada onscroll ao scrollar, armazena a função chamada scrollFunction(), que define quando o botão deve aparecer
window.onscroll = function scrollFunction () {
  // Se, a quantidade de pixels percorridos na tela for igual à condição passada entre parentêses, então:
  if (document.body.scrollTop > 440 || document.documentElement.scrollTop > 440) {
    // mostrar o botão
    botao.style.display = "block";
    // senão,
  } else {
    // não mostrar o botão 
    botao.style.display = "none";
  }
}

// Quando a pessoa clicar em voltar para o topo, executar esta função
function voltarParaTopo () {
  document.documentElement.scrollTop = 0;
}

function assetsGo () {
  window.scrollTo(0,1750);
}

//

function saibaMaisBtn () {
  let btn = document.getElementById('optin-typed')
  let email = document.getElementById('email-typed')
  window.alert('Obrigado por se registrar, ' + btn.value + '! Estamos enviando um e-mail de confirmação dentro de no máximo 5 minutos.')
  btn.value = ""
  email.value = ""
}















// function carregaPagina(caminhoHtml, divDestino)
// {
// document.getElementById(divDestino).innerHTML = leArquivoHtml(caminhoHtml);

    
// }

// function leArquivoHtml(caminhoHtml){

//     //to do - abrir arquivo html e retornar o html em uma string (fazer um fetch?)

//     var htmlSTRING = '<div><h2>teste de html sendo carregado de forma dinamica</h2></div>';

//     return htmlSTRING;
// }

