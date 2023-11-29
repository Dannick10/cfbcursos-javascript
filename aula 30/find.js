const p_array= document.querySelector('#array')
const txt_pesquisar= document.querySelector('#txt_pesquisar')
const btnPesquisar= document.querySelector('#btnPesquisar')
const resultado= document.querySelector('#resultado')

const array_elementos = ['html','css','javascript']
p_array.innerHTML = array_elementos

btnPesquisar.addEventListener('click',()=>{
    resultado.innerHTML = 'n encontrado'
    array_elementos.find((e,i)=>{
        if(e == txt_pesquisar.value){
           resultado.innerHTML = e + `na posiçao ${i}`
            return e
        }
    })
})