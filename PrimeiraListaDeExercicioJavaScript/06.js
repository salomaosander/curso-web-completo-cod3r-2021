/* 6. Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

const retornoJurosSimples = (capital, juros, tempo) => {
    montante = (capital * (1 + juros * tempo)).toFixed(2).replace('.',',')
    console.log(`R$ ${montante}`)
}    
const retornoJurosComposto = (capital, juros, tempo) => {
    montante = (capital * (1 + juros) ** tempo).toFixed(2).replace('.',',')
    console.log(`R$ ${montante}`)
}



retornoJurosSimples(1000, 0.01, 10)
retornoJurosComposto(1000, 0.01, 10)