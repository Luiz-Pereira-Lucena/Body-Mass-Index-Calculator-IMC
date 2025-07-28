/* Acessando uma tag HTML */
const calcular = document.getElementById("calcular");


/*
Acessando e setando um valo para um elemento HTML:

nome.value = "Luiz Pereira"
altura.value = 10
*/

function calcularIMC() {
    /* Acessando os elementos HTML */
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const resultado = document.getElementById("resultado");

    if(nome !== '' && !isNaN(altura) && !isNaN(peso)){
        
        /* Cálculo do IMC */
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        } else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        } else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    } else {
        resultado.textContent = 'Preencha todos os campos corretamente!';
    }
}

document.getElementById('calcular').addEventListener('click', calcularIMC);

