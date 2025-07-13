function entrar(){
    let nome = document.getElementById("nome");
    let senha = document.getElementById("senha");

    if(nome.value.length == 0 || senha.value.length == 0){
        alert("[ERRO] Você deixou algum campo vazio!");
    }else{
        confirm("Confirma esses dados?");
        alert("Dados enviados com sucesso!");
    }
}