const caixa1=document.querySelector('#caixa1')
const curso=[...document.querySelectorAll('.curso')]
const cursos=['html','css','java script','bootstrap','typescript','node js',' reactNative']

cursos.map((el,chave)=>{ 
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id','c' + chave + 1)
    novoElemento.setAttribute('class','curso c2')
    novoElemento.innerHTML=el

    const btn_lixeira=document.createElement('img')
    btn_lixeira.setAttribute('src','54324.png')
    btn_lixeira.setAttribute('class','btn_lixeira')

    btn_lixeira.addEventListener('click',(evt)=>{
        caixa1.removeChild(evt.target.parentNode)
    })


    novoElemento.appendChild(btn_lixeira)
    caixa1.appendChild(novoElemento)
})

