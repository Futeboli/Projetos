function login(){
    var nome = document.getElementsByClassName("loginNOME").value;
    var idade = document.getElementsByClassName("loginIDADE").value;
    var cidade = document.getElementsByClassName("loginCIDADE").value;

    document.getElementsByID("resultTXT").innerHTML = "Olá " + nome + ", com " + idade + " anos da cidade " + cidade + ". Seja BEM VINDO á Árvore de Dados!"
}