const btnleft = document.querySelector('#left')
const btnright = document.querySelector('#right')
const btnparar = document.querySelector('#parar')
const character = document.querySelector('#caixa')
let anima=null
let tam = window.innerWidth-parseInt(character.style.width)

const init=()=>{
  
        character.style = 'position:relative;left:0px; width: 100px'
}


const move=(dir)=>{

  if(dir > 0){
    if(parseInt(character.style.left)<=tam){
      character.style.left=parseInt(character.style.left) + (10*dir) + 'px'
      anima=setTimeout(move,20,dir)
  
    }
  }else if(dir < 0){
    character.style.left=parseInt(character.style.left) + (10*dir) + 'px'
    anima=setTimeout(move,20,dir)
  
  }

 
}

btnleft.addEventListener('click',()=>{
  clearTimeout(anima)
  move(1)
  
})

btnright.addEventListener('click',()=>{
  clearTimeout(anima)
  move(-1)
})

btnparar.addEventListener('click',()=>{
clearTimeout(anima)
})

//window.onload=initam = window.innerWidth-parseInt(carro.style.width)t

window.addEventListener('load',init(tam = window.innerWidth-parseInt(character.style.width)))
window.addEventListener('resize',()=>{
  tam = window.innerWidth-parseInt(carro.style.width)

})