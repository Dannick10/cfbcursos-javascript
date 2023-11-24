const caixa1=document.querySelector('#caixa1')
const c1=document.querySelector('#c1')
const curso=[...document.querySelectorAll('.curso')]

caixa1.addEventListener('click',(evt)=>{
  console.log(evt.target)
})

curso.map((el)=>{
  el.addEventListener('click',(evt)=>{
    evt.stopPropagation()
  })
})