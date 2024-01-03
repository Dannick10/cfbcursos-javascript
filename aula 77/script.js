const btnleft = document.querySelector('#left')
const btnright = document.querySelector('#right')
const btnparar = document.querySelector('#parar')
const character = document.querySelector('#caixa')

const init=()=>{
        character.style = 'position:relative;left:0px;'
}

let anima=null

const move=(dir)=>{

  character.style.left=parseInt(character.style.left) + (10*dir) + 'px'

}

btnleft.addEventListener('click',()=>{
  clearInterval(anima)
   anima=setInterval(move,20,-1)
})

btnright.addEventListener('click',()=>{
  clearInterval(anima)
  anima=setInterval(move,20, 1)
})

btnparar.addEventListener('click',()=>{
  clearInterval(anima)
})

window.onload=init