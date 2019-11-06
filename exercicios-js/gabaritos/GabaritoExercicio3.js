let usuario = "rica";
let senha = "eutenhomuitosdinheiros";
let saldo = 1000;
let putUsuario = prompt("digite o seu usuario");
let putSenha = prompt("digite a sua senha");

if(usuario==putUsuario && senha==putSenha){
    alert('Parabéns você logou');
}else{
    alert("Puxa que pena");
}

if(usuario==putUsuario){
    let putSenha = prompt("digite a sua senha");
    if(senha==putSenha){
        alert('Parabéns você logou');
        let saque = Number(prompt("Digite o valor do saque"));
        if(saldo>=saque){
                alert("Saque realizado com sucesso");
                saldo = saldo - saque;
                alert(`O seu novo saldo é ${saldo}`);
        }else{
            alert("Saldo insuficiente");
        }
    }else{
        alert("Senha incorreta");
    }
}else{
    alert("Usuario incorreto");
}
//Number(prompt("Digite o valor do saque"))
let numero = 1;

while(numero <=10){
    console.log(7*numero);
    numero++; //numero = numero + 1 ou numero += 1
}