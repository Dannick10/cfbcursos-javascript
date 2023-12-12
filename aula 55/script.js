const numero = document.querySelector('.numero')
const btn_promessa = document.querySelector('#btn_promessa')



const promise=()=>{
    let p = new Promise((resolve,reject)=>{
        let resultado= true
        let tempo = 3000
        setTimeout(()=>{
            if(resultado){
            resolve('deu tudo certo')
            }else{
                reject('deu tudo errado')
            }
        },tempo)
    
    })
    
  return p
    
}

    numero.innerHTML = 'Conferir'
btn_promessa.addEventListener('click',(evt)=>{
    numero.innerHTML = 'processando...'
    promise()
        .then((retorno)=>{
            numero.innerHTML = retorno
            numero.classList.remove('erro')
            numero.classList.add('ok')
    })
    
        .catch((retorno)=>{
            numero.innerHTML = retorno
            numero.classList.add('erro')
            numero.classList.remove('ok')
    })
})

