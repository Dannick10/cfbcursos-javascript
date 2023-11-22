//const c1=document.getElementById('c1')
const cursos=[...document.querySelectorAll('.curso')]

cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const el=evt.target
        el.classList.add('destaque')
        console.log(el.innerHTML + ' clicado')
    })
})

cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const el=evt.target
        el.style.opacity = '0.2'
    })
})




/*c1.addEventListener('click',(evt)=>{
   
   const el=evt.target
    el.classList.add('destaque')
})*/