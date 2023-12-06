const res = document.querySelector('#res')
const btn = document.querySelector('#btn_enviar')
const nome = document.querySelector('#nome')
const idade = document.querySelector('#idade')


const btn_search = document.querySelector('#btn_procurar')
class Pessoas{
    constructor(nome,idade){
        this.nome = nome 
        this.idade = idade
    }

    getNome(){
        return this.nome = nome 
    }

    getIdade(){
        return this.idade = idade 
    }
}

adicionarPessoas=()=>{
    res.innerHTML = ''
    pessoas.map((p)=>{
        const div = document.createElement('div')
        div.setAttribute('id','pessoas')
        div.innerHTML = `Nome: ${p.nome}<br>Idade: ${p.idade}`
        res.appendChild(div)
    })
}

const pessoas = []


btn.addEventListener('click',()=>{
    const p = new Pessoas(nome.value,idade.value)
    pessoas.push(p)
    console.log(pessoas)
    nome.value = ''
    idade.value = ''
    adicionarPessoas()
})

