/* 4. Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o 
resultado e o resto da divisão destes dois valores. */

const divisaoMaisResto = (dividendo, divisor) => {
    console.log(`Resultado: ${Math.trunc(dividendo / divisor)}, Resto: ${dividendo % divisor}`)
}

divisaoMaisResto(7,3)