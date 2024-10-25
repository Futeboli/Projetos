function soma(){
    var Valor1 = parseFloat(prompt("digite um 1° valor"));
    var Valor2 = parseFloat(prompt("digite um  2º valor"));
    var soma = Valor1 + Valor2;
    alert("a soma é = " + soma );
    }

function divisao(){
    let valor1 = parseFloat (prompt("insira o 1° valor"))
    let valor2 = parseFloat (prompt("insira o 2° Valor"))
    let divisao = valor1 / valor2;
    alert("a divisão é: " + divisao );
    }

function consumo(){
    let combustivelGasto = parseFloat (prompt("Informe o combustivel gasto:"));
    let distanciaPercorrida = parseFloat (prompt("Informe a distancia percorrida:"));
    let consumoMedio = combustivelGasto / distanciaPercorrida;
    alert ("O consumo medio foi: " + consumoMedio );
    }

function salario(){
    let vendedor = prompt("insira o nome do vendedor:");
    let salarioFixo = parseFloat (prompt("insira o seu salario:"));
    let valorVendas = parseFloat (prompt("insira o valor das suas vendas:"));
    let comissao = 0.15 * valorVendas;
    let salarioFinal = comissao + salarioFixo;
    alert ("O Funcionário " + vendedor + " tem um salário total de R$" + salarioFinal );
    }

function aluno(){
    let student = prompt("insira o nome do aluno:");
    let nota1 = parseInt(prompt("insira a nota do 1°Trimestre"));
    let nota2 = parseInt(prompt("insira a nota do 2°Trimestre"));
    let nota3 = parseInt(prompt("insira a nota do 3°Trimestre"));
    let x = (nota1 + nota2 + nota3);
    let media = (x / 3);
    alert ("o aluno " + student + " teve uma media no ano de: " + media );
    }

function inversao(){
    let auxiliar;
    let invValor1 = parseFloat(prompt("Insira o primeiro valor"));
    let invValor2 = parseFloat(prompt("Insira o segundo valor"));
    auxiliar = invValor1;
    invValor1 = invValor2;
    invValor2 = auxiliar;
    alert ("O Valor A ("+ auxiliar +") passou a ser "+ invValor1 +", e o Valor B("+ invValor1 +") que passou a ser "+ auxiliar +".");
    }

function temperatura(){
    let tempFahrenheit = parseFloat(prompt("informe a temperatura em  Fahrenheit"));
    let  tempCelsius = (tempFahrenheit-32)*5/9;
    alert ("a temperatura em celsius é: " + tempCelsius );
    }

function dolar(){
    let cotaçãoDolar = 5.81
    let quantidadeDolar = parseFloat(prompt("Insira quantos dolares você tem"));
    let conversão = QuantidadeDolar*CotaçãoDolar;
    alert ("Você tem R$"+ Conversão +" Reais!");
    }

function rendimento(){
    let valorDepositado = parseFloat(prompt("Informe o Valor do Deposito"))
    let rendimento = valorDepositado*(1+0.70)
    alert ("Você teve um rendimento de R$"+ rendimento +"!")
}

function compras(){
    let valorCompras = parseFloat(prompt("Insira o valor gasto na sua compra"))
    let prestações = valorCompras/5
alert ("Com um valor de R$"+ valorCompras +" em compras, suas prestações serão em um valor de R$"+ prestações +"!")
}
