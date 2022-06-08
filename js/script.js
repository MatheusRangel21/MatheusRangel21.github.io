var nome = document.getElementById('nome');
var cpf = document.getElementById('cpf');
var email = document.getElementById('email');
var password = document.getElementById('password');

nome.addEventListener('focus',()=>{
    nome.style.borderColor = "#5F7C8A"
});
nome.addEventListener('blur',()=>{
    nome.style.borderColor = "#ccc"
});

cpf.addEventListener('focus',()=>{
    cpf.style.borderColor = "#5F7C8A"
});
cpf.addEventListener('blur',()=>{
    cpf.style.borderColor = "#ccc"
});

email.addEventListener('focus',()=>{
    email.style.borderColor = "#5F7C8A"
});
email.addEventListener('blur',()=>{
    email.style.borderColor = "#ccc"
});

password.addEventListener('focus',()=>{
    password.style.borderColor = "#5F7C8A"
});
password.addEventListener('blur',()=>{
    password.style.borderColor = "#ccc"
});

function acao3(){
    window.location.href = ("sobre.html");
}

function acao2(){
    window.location.href = ("index.html");
}

function acao1(){
    window.location.href = ("cadastrar_refugiado.html");
}

function EmDesenvolvimento(){
    alert("Página em desenvolvimento")
    console.log("Sorry!")
  }