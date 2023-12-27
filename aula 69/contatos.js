import { contatos } from "./bancodeDados.js";

let contato={
    getTodosContatos:function(){
        return contatos 
    },
    getContato:function(i_cont){
        return contatos[i_cont]
    },
    addContato:function(novoContato,DestinoDom){
        const div = document.createElement('div')
        div.setAttribute('class','contato')

        const p_nome = document.createElement('p')
       
        const p_telefone = document.createElement('p')
      
        const p_email = document.createElement('p')
      

        div.innerHTML = `Nome = ${novoContato.nome} <br> telefone = ${novoContato.telefone} <br> Email = ${novoContato.email}`

        div.appendChild(p_nome)
        div.appendChild(p_telefone)
        div.appendChild(p_email)
        DestinoDom.appendChild(div)
      
    }

}

export default contato