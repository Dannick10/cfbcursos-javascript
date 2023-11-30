const valorum = document.querySelector('#txnumberum')
const valordois = document.querySelector('#txnumberdois')
const resultado = document.querySelector('#resultado')

const btn_mais = document.querySelector('#mais')
const btn_menos = document.querySelector('#menos')
const btn_vezes = document.querySelector('#vezes')
const btn_dividir = document.querySelector('#dividir')


const op=[
    ()=>{
        resultado.innerHTML = Number(valorum.value)+ Number(valordois.value)
    },
    ()=>{
        resultado.innerHTML = valorum.value - valordois.value
    },
    ()=>{
        resultado.innerHTML = valorum.value * valordois.value
    },
    ()=>{
        resultado.innerHTML = valorum.value / valordois.value
    },
]

btn_mais.addEventListener('click',op[0])
btn_menos.addEventListener('click',op[1])
btn_dividir.addEventListener('click',op[3])
btn_vezes.addEventListener('click',op[2])


