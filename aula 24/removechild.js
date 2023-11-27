const caixa1 = document.querySelector('#caixa1')
const cursos = ['HTML','CSS','JAVASCRIPT','TYPESCRIPT','NODEEXPRESS','REACT']
const caixa2 = document.createElement('div')

caixa2.setAttribute('id','caixa')
caixa2.setAttribute('class','caixa')

document.body.appendChild(caixa2)


caixa2.style.border = '3px solid grey'

cursos.map((el,chave)=>{
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id','c' + chave)
    novoElemento.setAttribute('class','curso')
    novoElemento.innerHTML = el
    const btn_lixeira=document.createElement('img')
    btn_lixeira.setAttribute('src','54324.png')
    btn_lixeira.setAttribute('class','btn_lixeira')
    novoElemento.appendChild(btn_lixeira)
    btn_lixeira.addEventListener('click',(evt)=>{
        const parent = evt.target.parentNode
        caixa2.appendChild(parent)
        parent.classList.add('color')
    })
   
   caixa1.appendChild(novoElemento)
})