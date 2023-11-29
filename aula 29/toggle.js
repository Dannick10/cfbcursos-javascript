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
    const cursoSelec=[...document.querySelectorAll('.destaque')]
    cursoSelec.map((el)=>{
        el.classList.remove('destaque')
    })
}

const criarNovoCurso=(curso)=>{

    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('class','curso')
    novoElemento.setAttribute('id','c' + indice)
    novoElemento.innerHTML=curso
   
    novoElemento.addEventListener('click',(evt)=>{
        tirarselecao()
        evt.target.classList.toggle('destaque')
    })
    return novoElemento
}

cursos.map((el,chave)=>{ 
    const novoElemento = criarNovoCurso(el)   
    caixa1.appendChild(novoElemento)
    
    indice++
})

const cursoSelecionado=()=>{
    const cursoSelec=[...document.querySelectorAll('.destaque')]
    
    return cursoSelec[0]
}

btn_cursoselecionado.addEventListener('click',(evt)=>{

    try{
        window.alert(`O curso selecionado: ${cursoSelecionado().innerHTML}`)
    } catch(ex){
        window.alert('EScolha uma opção')
    }
    //const cursoSelecionado = radiosSelecionados.parentNode.parentNode.firstChild.textContent
   
})

btn_cursoremovido.addEventListener('click',(evt)=>{
    const rs = cursoSelecionado()
    try{
      rs.remove()
    } catch(ex){
        window.alert('escolha uma opção')
    }


})

btn_cursoAdicionarAntes.addEventListener('click',()=>{
        if(nomeCurso.value != ''){
      
        const Novocurso = criarNovoCurso(nomeCurso.value)
        caixa1.insertBefore(Novocurso,cursoSelecionado())
        } else {
            window.alert('Digite o nome do curso')
        }
  
  
})

btn_cursoAdicionarDepois.addEventListener('click',()=>{
        if(nomeCurso.value != ''){
        
        const Novocurso = criarNovoCurso(nomeCurso.value)
        caixa1.insertBefore(Novocurso,cursoSelecionado().nextSibling)
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