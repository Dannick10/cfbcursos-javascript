const caixa1=document.querySelector('#caixa1')
const curso=[...document.querySelectorAll('.curso')]
const cursos=['html','css','java script','bootstrap','typescript','node js',' reactNative']

cursos.map((el,chave)=>{ 
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id','c' + chave + 1)
    novoElemento.setAttribute('class','curso c2')
    novoElemento.innerHTML=el
    
    caixa1.appendChild(novoElemento)
})

