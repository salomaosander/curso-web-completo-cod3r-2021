/* 5. Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos 
fazer um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript
para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/

const valorEmReais = (num) => {
    reais = num.toFixed(2).replace('.',',')
    console.log(`R$ ${reais}`)                              //até aqui já era suficiente para a resposta
    //inserindo pontuaçao
    arrayReais = reais.split('')
    valorFormatado = []
    
    let contador = -3
    for (let i = arrayReais.length - 1; i >= 0 ; i--){
        valorFormatado = arrayReais[i] + valorFormatado
        contador++
        if (contador == 3 && i !=0 ){
            valorFormatado = '.' + valorFormatado
            contador = 0
        } 
    }
    console.log(`R$ ${valorFormatado}`)
}

valorEmReais(0.12 + 5203222340.2002) 