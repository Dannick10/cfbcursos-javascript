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

const criarNovoCurso=(curso)=>{

    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('class','curso')
    novoElemento.setAttribute('id','c' + indice)
    novoElemento.innerHTML=curso

    const comados= document.createElement('div')
    comados.setAttribute('class','comados')

    const rb=document.createElement('input')
    rb.setAttribute('type','radio')
    rb.setAttribute('name','rb_curso')
    
    comados.appendChild(rb)

    novoElemento.appendChild(comados)
    return novoElemento
}

cursos.map((el,chave)=>{ 

    const novoElemento = criarNovoCurso(el)   
    caixa1.appendChild(novoElemento)
    indice++
})

const radiosSelecionados=()=>{
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    let radiosSelecionados = todosRadios.filter((el,i,a)=>{
        return el.checked
    })
    return radiosSelecionados[0]
}

btn_cursoselecionado.addEventListener('click',(evt)=>{
    
    const rs = radiosSelecionados()
    try{
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        console.log(cursoSelecionado)
        window.alert(`O curso selecionado: ${cursoSelecionado}`)
    } catch(ex){
        window.alert('EScolha uma opção')
    }
    //const cursoSelecionado = radiosSelecionados.parentNode.parentNode.firstChild.textContent
   
})

btn_cursoremovido.addEventListener('click',(evt)=>{
    const rs = radiosSelecionados()
    try{
     
      const cursoSelecionado = rs.parentNode.parentNode
      cursoSelecionado.remove()
    } catch(ex){
        window.alert('escolha uma opção')
    }


})

btn_cursoAdicionarAntes.addEventListener('click',()=>{
        if(nomeCurso.value != ''){
        const rs=radiosSelecionados()
        const cursoSelecionado = rs.parentNode.parentNode
        console.log(cursoSelecionado)
        const Novocurso = criarNovoCurso(nomeCurso.value)
        caixa1.insertBefore(Novocurso,cursoSelecionado)
        } else {
            window.alert('Digite o nome do curso')
        }
  
  
})

btn_cursoAdicionarDepois.addEventListener('click',()=>{
        if(nomeCurso.value != ''){
        const rs=radiosSelecionados()
        const cursoSelecionado = rs.parentNode.parentNode
        console.log(cursoSelecionado)
        const Novocurso = criarNovoCurso(nomeCurso.value)
        caixa1.insertBefore(Novocurso,cursoSelecionado.nextSibling)
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