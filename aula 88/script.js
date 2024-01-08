const f_nome = document.querySelector('#f_nome')
const f_msg = document.querySelector('#f_msg')

document.querySelector('#btn_validar').addEventListener('click',()=>{

})



let num=10
const curso = 'javascript'

localStorage.setItem('numero',num)
localStorage.setItem('numero',33)
localStorage.setItem('canal','cfb_curso')
localStorage.setItem('nome',curso)

sessionStorage.setItem('nome','daniel')
localStorage.clear()
sessionStorage.setItem('nome',curso)
