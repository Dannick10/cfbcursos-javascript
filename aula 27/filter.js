const caixa1=document.querySelector('#Caixacurso')
const curso=[...document.querySelectorAll('.curso')]
const cursos=['html','css','java script','bootstrap','typescript','node js',' react Native',]

const btn_cursoselecionado = document.querySelector('#btnSelecionarCurso')
const btn_cursoremovido = document.querySelector('#btnRemoverCurso')


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

const radiosSelecionados=()=>{
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    let radiosSelecionados = todosRadios.filter((el,i,a)=>{
        return el.checked
    })
    return radiosSelecionados[0]
}

btn_cursoselecionado.addEventListener('click',(evt)=>{
    
    const rs = radiosSelecionados()
    if(rs != undefined){
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        console.log(cursoSelecionado)
        window.alert(`O curso selecionado: ${cursoSelecionado}`)
    } else {
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



// parentNode
//childNodes [nodenumber]
//firstchild
//lastchild
//nextSibling
//previousSibling