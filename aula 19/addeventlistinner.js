const c1 = document.querySelector('#caixa1')
const c2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_copiar')

const cursos =[...document.querySelectorAll('.curso')]

cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const curso=evt.target
        curso.classList.toggle('destaque')

    })
})

btn.addEventListener('click',()=>{
    const cursoSelecionado = [...document.querySelectorAll('.destaque')]
    cursoSelecionado.map((el)=>{
        c2.appendChild(el)
    })
})