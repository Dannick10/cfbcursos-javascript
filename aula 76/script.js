const btnleft = document.querySelector('#left')
const btnright = document.querySelector('#right')
const character = document.querySelector('#caixa')

const init=()=>{
        character.style = 'position:relative;left:0px;'
}

btnleft.addEventListener('click',()=>{
    let pos=parseInt(character.style.left) 
    pos-=10
    character.style = `position:relative;left:${pos}px;`
})

btnright.addEventListener('click',()=>{
  let pos=parseInt(character.style.left) 
  pos+=10
  character.style = `position:relative;left:${pos}px;`

  console.log(pos)
})

window.onload=init