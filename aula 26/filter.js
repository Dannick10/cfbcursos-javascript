const caixa1=document.querySelector('#Caixacurso')
const curso=[...document.querySelectorAll('.curso')]
const cursos=['html','css','java script','bootstrap','typescript','node js',' react Native',]
const btn_cursoselecionado = document.querySelector('#btnSelecionarCurso')

cursos.map((el,chave)=>{ 
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('class','curso')
    novoElemento.innerHTML=el

    const comados= document.createElement('div')
    comados.setAttribute('class','comados')

    const rb=document.createElement('input')
    rb.setAttribute('type','radio')
    rb.setAttribute('name','rb_curso')

    comados.appendChild(rb)
    novoElemento.appendChild(comados)
    caixa1.appendChild(novoElemento)



})


btn_cursoselecionado.addEventListener('click',(evt)=>{
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    let radiosSelecionados = todosRadios.filter((el,i,a)=>{
        return el.checked
    })
    radiosSelecionados=radiosSelecionados[0]
    //const cursoSelecionado = radiosSelecionados.parentNode.parentNode.firstChild.textContent
    const cursoSelecionado = radiosSelecionados.parentNode.previousSibling.textContent
    console.log(todosRadios)
    console.log(radiosSelecionados)
    console.log(cursoSelecionado)
    window.alert(`O curso selecionado: ${cursoSelecionado}`)
})


// parentNode
//childNodes [nodenumber]
//firstchild
//lastchild
//nextSibling
//previousSibling