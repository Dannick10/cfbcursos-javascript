const p_array= document.querySelector('#array')
const txt_pesquisar= document.querySelector('#txt_pesquisar')
const btnPesquisar= document.querySelector('#btnPesquisar')
const resultado= document.querySelector('#resultado')

const array_elementos = [1,2,3,4,5]
let ante=[]
let dep=[]
let dobro=[]

p_array.innerHTML = array_elementos

btnPesquisar.addEventListener('click',()=>{
    resultado.innerHTML= array_elementos.reduce((anterior,atual,pos)=>{
       ante.push(anterior)
        dep.push(atual)
        dobro.push(atual + anterior*2)

        return atual + anterior 
    })

    resultado.innerHTML += `<br> valor anterior ${ante}`
    resultado.innerHTML += `<br> valor atual ${dep}`
    resultado.innerHTML += `<br> valor dobrado ${dobro}`
   
})