const p_array= document.querySelector('#array')
const txt_pesquisar= document.querySelector('#txt_pesquisar')
const btnPesquisar= document.querySelector('#btnPesquisar')
const resultado= document.querySelector('#resultado')

const array_elementos = [21,25,17,27,18,18,22]
p_array.innerHTML = array_elementos

btnPesquisar.addEventListener('click',()=>{
    const ret = array_elementos.every((e,i)=>{
        if(e<18){
            resultado.innerHTML = 'nao conforme na posição do ' + i
        }
        return e >= 17
    })
    if(ret){
        resultado.innerHTML='ok'
    } 
    console.log(ret)
   
})