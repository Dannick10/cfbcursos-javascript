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
  anima=setTimeout(move,20,dir)
}

btnleft.addEventListener('click',()=>{
  clearTimeout(anima)
  move(-1)
  
})

btnright.addEventListener('click',()=>{
  clearTimeout(anima)
  move(1)
})

btnparar.addEventListener('click',()=>{
clearTimeout(anima)
})

window.onload=init