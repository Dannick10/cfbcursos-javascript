const caixa1=document.querySelector('#Caixacurso')
const curso=[...document.querySelectorAll('.curso')]
const cursos=['html','css','java script','bootstrap','typescript','node js',' react Native',]
const nomeCurso= document.querySelector('#nomedocurso')

const btn_cursoselecionado = document.querySelector('#btnSelecionarCurso')
const btn_cursoremovido = document.querySelector('#btnRemoverCurso')
const btn_cursoAdicionarAntes = document.querySelector('#btnAdicionarNovoCursoAntes')
const btn_cursoAdicionarDepois = document.querySelector('#btnAdicionarNovoCursoDepois')

const nomedocurso = document.querySelector('#nomedocurso')

let indice = 0

const tirarselecao=()=>{
    const selecionados = [...document.querySelectorAll('.destaque')]
   selecionados.map((el)=>{
    el.classList.remove('destaque')
   })
}

const criarnovocurso=(curso)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('class','curso')
    novoElemento.setAttribute('id','c' + indice)
    novoElemento.innerHTML = curso
    return novoElemento
}

cursos.map((el)=>{
    const novoElemento = criarnovocurso(el)
    caixa1.appendChild(novoElemento)
    indice++

    novoElemento.addEventListener('click',(evt)=>{
        tirarselecao()
        evt.target.classList.toggle('destaque')
    })
})

const selecionar=()=>{
    const cursoselect = [...document.querySelectorAll('.destaque')]
    return cursoselect[0]
}

btn_cursoselecionado.addEventListener('click',()=>{
   const cursoselecionado = selecionar().innerHTML
   window.alert(cursoselecionado)
  
})


btn_cursoAdicionarAntes.addEventListener('click',()=>{
    if(nomeCurso.value != ''){
  
    const Novocurso = criarnovocurso(nomeCurso.value)
    caixa1.insertBefore(Novocurso,selecionar())
    } else {
        window.alert('Digite o nome do curso')
    }


})

btn_cursoAdicionarDepois.addEventListener('click',()=>{
    if(nomeCurso.value != ''){
    
    const Novocurso = criarnovocurso(nomeCurso.value)
    caixa1.insertBefore(Novocurso,selecionar().nextSibling)
    } else {
        window.alert('Digite o nome do curso')
    }


})

// parentNode
//childNodes [nodenumber]
//firstchild
//lastchild
//nextSibling
//previousSibling