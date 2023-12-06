const nome = document.querySelector('#nome')
const idade = document.querySelector('#idade')
const btn_enviar = document.querySelector('#btn_enviar')
const res = document.querySelector('#res')


function Pessoa(pnome,pidade){
    this.nome=pnome,
    this.idade=pidade,

    this.getNome=function(){
        return this.nome 
    }

    this.getIdade=function(){
       return this.idade 
    }


}


let cadastro = []

const adicionarpessoas=()=>{
    res.innerHTML = ''
   cadastro.map((p)=>{
    const div = document.createElement('div')
    div.setAttribute('class','pessoa')
    div.innerHTML = `Nome: ${p.getNome()}<br> idade ${p.getIdade()}`
    res.appendChild(div)
    console.log(p)
   })
}

btn_enviar.addEventListener('click',()=>{
    const p = new Pessoa(nome.value,idade.value)
    cadastro.push(p)
    nome.value = ''
    idade.value = ''
    console.log(cadastro)
    nome.focus()
    adicionarpessoas()
    
})
