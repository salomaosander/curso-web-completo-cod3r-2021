/* 2. Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

const tipoTriangulo = (ladoA, ladoB, ladoC) => {
    if(ladoA == ladoB && ladoA == ladoC){
        console.log('Triangulo Equilátero.')
    } else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC ) {
        console.log('Triangulo Escaleno.')
    } else {
        console.log('Triangulo Isósceles.')
    }
}

tipoTriangulo(4,2,3)