let senha = "alucinacao";
let usuario = "coach";
let tentativas = 0;
while(tentativas <=3){
    let senhaDigitada = prompt("Senha");
    let usuarioDigitado = prompt("Usuario");
    if(senha == senhaDigitada && usuario == usuarioDigitado){
        alert("voce logou");
        tentativas = 100;
    }else{
        alert("usuario e/ou senha incorretos");
        tentativas++;
        if(tentativas == 4){
            alert("conta bloqueada");
        }
    }
}