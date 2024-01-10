const f_nome = document.querySelector('#f_nome')
const f_nota= document.querySelector('#f_nota')
const f_msg = document.querySelector('#f_msg')

document.querySelector('#btn_validar').addEventListener('click',(evt)=>{
    let msg=null
    
    if(f_nota.checkValidity){
        msg=f_nota.validationMessage
        msg= f_nota.setCustomValidity('coloca a senha porra')
    }
    f_msg.reportValidity()
    f_msg.innerHTML = msg
    evt.preventDefault()
})