const c1 = document.querySelector('#caixa1')
const c2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_copy')

const curso = [...document.querySelectorAll('.curso')]

curso.map((el)=>{
 el.addEventListener('click',(evt)=>{
  const cursos = evt.target
  cursos.classList.toggle('color')
 })
})

btn.addEventListener('click',()=>{
  const cursoSelecionados = [...document.querySelectorAll('.color')]
  const cursoNaoSelecionados = [...document.querySelectorAll('.curso:not(.color)')]

  cursoSelecionados.map((el)=>{
    c2.append(el)
  })

  cursoNaoSelecionados.map((el)=>{
    c1.append(el)
  })
})