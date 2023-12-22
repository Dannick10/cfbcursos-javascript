const btn_alert = document.querySelector('#btn_alert')
const btn_confirm = document.querySelector('#btn_confirm')
const btn_prompt = document.querySelector('#btn_prompt')

btn_alert.addEventListener('click',()=>{
alert('ola')
})

btn_confirm.addEventListener('click',()=>{
const ret = confirm('voce está aprendendo muito?')
  if(ret){
    console.log('botao ok precionado')
  } else {
    console.log('botao cancelar precionado')
  }
})

btn_prompt.addEventListener('click',()=>{
  const nome = prompt('DIgite seu nome',`Digite seu nome aqui`)
  if(nome ==null){
    console.log('botao Cancelar precionado')
  } else {
    console.log(nome)
  }

})