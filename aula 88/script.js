const f_nome = document.querySelector('#f_nome')
const f_nota= document.querySelector('#f_nota')
const f_msg = document.querySelector('#f_msg')

document.querySelector('#btn_validar').addEventListener('click',(evt)=>{
    let msg=f_nota.validity

    if(msg.valueMissing){
       f_nota.setCustomValidity(':0 é o gaspazinho ?')
       
    }
   
    f_nota.reportValidity()
    f_msg.innerHTML = msg
    evt.preventDefault()
})