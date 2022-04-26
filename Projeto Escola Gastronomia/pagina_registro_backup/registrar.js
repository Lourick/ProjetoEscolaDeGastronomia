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
            window.location.href = "./"
        } else {
            window.alert('Os dados não conferem!')
        }
    }
};

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