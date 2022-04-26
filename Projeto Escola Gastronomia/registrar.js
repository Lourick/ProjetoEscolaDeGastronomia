// Função pra verificar registro
function verificarEmail() {
    let email = document.getElementById('email');
    let emailConfirm = document.getElementById('emailConfirm');
    let password = document.getElementById('password');
    let passwordConfirm = document.getElementById('passwordConfirm');
    let name = document.getElementById('registrar_nome');
    if (email.value.length == 0 || emailConfirm.value.length == 0 || password.value.length == 0 || passwordConfirm.value.length == 0 || name.value.length == 0) {
        window.alert('[ERRO] Você deve preencher todos os campos!');
    } else {
        if (email.value === emailConfirm.value && password.value === passwordConfirm.value) {
            window.location.href = "./login.html"
        } else {
            window.alert('Os dados não conferem!')
            password.value = ""
            passwordConfirm.value = ""
            email.value = ""
            emailConfirm.value = ""
        }
    }
};

let myInput = document.getElementById('password')
let confirmInput = document.getElementById('passwordConfirm')

// Quando clicar dentro da caixa de senha, aparece a mensagem
myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

// Quando clicar fora da caixa de senha, some a mensagem
myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
}

//Requisitos de senha

var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// Função pra mudar a cor da mensagem de vermelho pra verde enquanto o usuário preenche os requisitos da senha:

        // Verificando se tem ao menos 1 letra minúscula
        myInput.onkeyup = function () {
            var lowerCaseLetters = /[a-z]/g;
            if (myInput.value.match(lowerCaseLetters)) {
                letter.classList.remove("invalid");
                letter.classList.add("valid");
            } else {
                letter.classList.remove("valid");
                letter.classList.add("invalid");
            }


        // Verificando se tem ao menos 1 letra maiúscula
        var upperCaseLetters = /[A-Z]/g;
        if (myInput.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        // Vaerificando se tem ao menos 1 número
        var numbers = /[0-9]/g;
        if (myInput.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }

        // Verificando se tem ao menos 8 caracteres
        if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
        } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
        }
    }

// Quando clicar dentro da caixa de senha, aparece a mensagem
myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

// Quando clicar fora da caixa de senha, some a mensagem
myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
}

//Requisitos de senha

var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// Função pra mudar a cor da mensagem de vermelho pra verde enquanto o usuário preenche os requisitos da senha:

        // Verificando se tem ao menos 1 letra minúscula
        confirmInput.onkeyup = function () {
            var lowerCaseLetters = /[a-z]/g;
            if (confirmInput.value.match(lowerCaseLetters)) {
                letter.classList.remove("invalid");
                letter.classList.add("valid");
            } else {
                letter.classList.remove("valid");
                letter.classList.add("invalid");
            }


        // Verificando se tem ao menos 1 letra maiúscula
        var upperCaseLetters = /[A-Z]/g;
        if (confirmInput.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        // Vaerificando se tem ao menos 1 número
        var numbers = /[0-9]/g;
        if (confirmInput.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }

        // Verificando se tem ao menos 8 caracteres
        if(confirmInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
        } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
        }
    }












// function verificarSenha() {
//     let password = document.getElementById('password')
//     let passwordConfirm = document.getElementById('passwordConfirm')
//     if (password.value.length == 0 || passwordConfirm.value.length == 0) {
//         window.alert('[ERRO] Você precisa definir uma senha')
//     } else {
//         if (password.value === passwordConfirm.value) {
//             window.alert('Funcionou');
//         } else {
//             window.alert('As senhas não conferem')
//         }
//     }
// }