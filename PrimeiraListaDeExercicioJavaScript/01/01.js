/* 1. Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

const operacoesMatematica = (num1, num2) => {
    console.log(`${num1} + ${num2}: ${num1 + num2}`)
    console.log(`${num1} - ${num2}: ${num1 - num2}`)
    console.log(`${num1} x ${num2}: ${num1 * num2}`)
    console.log(`${num1} / ${num2}: ${num1 / num2}`)
}

operacoesMatematica(3,4)