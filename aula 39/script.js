const caixa = document.querySelector('#caixa')

const carros =['polo','golf','t-cross','hrv']


let ol = '<ul>'
for(r of carros){
    ol+=`<li> ${r} </li>`
}
ol+`</ul>`

const curso = 'java'
const canal = 'cbf curso'

const frase = `este é o curso de ${curso} do canal ${canal}`

caixa.innerHTML = ol
