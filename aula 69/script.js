import c from './contatos.js'

const listaContatos= document.querySelector('#listaContatos')
const btn_gravar= document.querySelector('#btn_gravar')

btn_gravar.addEventListener('click',()=>{
    const cont={
        nome:document.getElementById('f_nome').value,
        telefone:document.getElementById('f_telefone').value,
        email:document.getElementById('f_email').value
    }
    
    c.addContato(cont,listaContatos)

    c.getTodosContatos(listaContatos)
})