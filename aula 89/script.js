


const endpoint = 'http://127.0.0.1:1880/gravar'


const api_dados=()=>{
fetch(endpoint)

.then(res=>res.json())
.then(dados=>{
    console.log(dados)
   
})
}


let dados={
    nome:'daniel',
    idade: 23
}

let cabecalho={
    method: 'post',
    body:JSON.stringify(dados)
}

const gravarDados=()=>{
    const endpoint= 'http://127.0.0.1:1880/gravar'

    fetch(endpoint)
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret)
    })

}

document.querySelector('#btn_validar').addEventListener('click',()=>{
    gravarDados()
})