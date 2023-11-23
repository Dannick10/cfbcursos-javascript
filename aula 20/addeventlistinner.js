const c1 = document.querySelector('#caixa1')
const c2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_copiar')

const curso = [...document.querySelectorAll('.curso')]

curso.map((el)=>{
  el.addEventListener('click',(evt)=>{
    const cursos = evt.target 
    cursos.classList.toggle('destaque')
  })
})

btn.addEventListener('click',()=>{
    const cursoSelecionados = [...document.querySelectorAll('.destaque')]
    const cursoNaoSelecionados = [...document.querySelectorAll('.curso:not(.destaque)')]

    cursoNaoSelecionados.reverse()
    
    cursoSelecionados.map((el)=>{
        c2.appendChild(el)
    })

    cursoNaoSelecionados.map((el)=>{
        c1.appendChild(el)
    })
})