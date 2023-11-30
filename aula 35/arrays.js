
let cores =['azul','verde','amarelo',['claro','escuro','merdio']]
let cursos=['html','css','javascript',cores]

const caixa = document.querySelector('#caixa')

console.log(cursos[3][1])
console.log(cursos[3][3][1])

cursos.push('c++')
cursos.unshift('python')
cursos.pop()
cursos.shift()

console.log(cursos[0])

cursos.map((el)=>{
    let p = document.createElement('p')
    p.innerHTML = el 
    caixa.appendChild(p)
})