let login = "paulinha";
let senha = "senha1234";

let putUsuario = prompt("Insira seu usuário");
let putSenha = prompt("Insira sua senha");

if(login == putUsuario && senha == putSenha){
    alert("Você está logado!")
} else {
    alert("Você inseriu algo errado")
}
