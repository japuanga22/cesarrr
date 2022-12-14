let encryptBtn = document.getElementById('encrypt-btn'); // botão para encriptar
let eInput = document.getElementById('encryptedInput-1') // mensagem criptografada
let pInput = document.getElementById('plainInput-1') // texto simples
let inputs = [eInput,pInput]
let copyBtn = document.getElementById('copyToClipBoard')

inputs.forEach( input => {
  input.oninput = () => {
    input.value = input.value.toUpperCase() // transformara letras em maiusculas
  }
})

function encrypt(){
    let pInput = document.getElementById('plainInput-1').value;
    let resolvido = ''
    let shiftInput = parseInt(document.getElementById('shiftInput').value) // converte para numero

    for(var i = 0; i< pInput.length; i++){
        let ascii_num = pInput[i].charCodeAt() // retornara o codigo individual
        let soma = ascii_num + shiftInput
        soma >= 65 && soma <= 120 ? resolvido += String.fromCharCode(soma) : soma > 90 ? resolvido += String.fromCharCode(65+(soma & 91)) : resolvido += pInput[i]
    }
    eInput.value = resolvido
}

function copyText() {
    eInput.select()
    eInput.setSelectionRange(0, 99999)
    document.execCommand('copy')
    alert('Texto Copiado: ${eInput.soma}')
}

copyBtn.addEventListener('click', copyText)
encryptBtn.addEventListener('click', encrypt)

//base64

var radio = document.querySelectorAll(".radio"); // radio codificar decodificar
var botao = document.querySelector(".button"); // botão final do resultado
  var resultado = document.querySelector(".resultado");
  var text = document.querySelector("#text");

  botao.addEventListener("click", function (event) {
  event.preventDefault();

    if (radio[0].checked) {
    var valorTexto = text.value;
    resultado.value = btoa(valorTexto);
  } else {
    var valorTexto = text.value;
    resultado.value = atob(valorTexto);
  }
});

    radio[0].addEventListener("click", function () {
  if (radio[0].checked) {
    botao.textContent = "CODIFICAR";
  }
});

radio[1].addEventListener("click", function () {
  if (radio[1].checked) {
    botao.textContent = "DECODIFICAR";
  }
});


