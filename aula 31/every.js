const p_array= document.querySelector('#array')
const txt_pesquisar= document.querySelector('#txt_pesquisar')
const btnPesquisar= document.querySelector('#btnPesquisar')
const resultado= document.querySelector('#resultado')

const array_elementos = [16,12,10,17,15,13,11]
p_array.innerHTML = array_elementos

btnPesquisar.addEventListener('click',()=>{
    const ret = array_elementos.some((e,i)=>{
        if(e<18){
            resultado.innerHTML = 'nao conforme na posição do ' + i
        }
        return e >= 18
    })
    if(ret){
        resultado.innerHTML='ok'
    } 
    console.log(ret)
   
})