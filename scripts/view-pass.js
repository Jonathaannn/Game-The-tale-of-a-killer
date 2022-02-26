let senha = document.querySelector('#senha');

senha.addEventListener('click', ()=>{
    let senha = document.querySelector('#cadSenha');

    if (senha.getAttribute('type') == 'password') {
        senha.setAttribute('type', 'text')
    }else{
        senha.setAttribute('type','password')
    }
})

let confSenha = document.querySelector('#confsenha');

confSenha.addEventListener('click', ()=>{
    let confSenha = document.querySelector('#confirme');

    if (confSenha.getAttribute('type') == 'password') {
        confSenha.setAttribute('type', 'text')
    }else{
        confSenha.setAttribute('type','password')
    }
})