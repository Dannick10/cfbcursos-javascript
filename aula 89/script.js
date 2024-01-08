


const endpoint = 'https://43955f34-3630-43b6-a919-feb552573a60-00-34bxkhtriukjh.janeway.replit.dev'


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
    const endpoint= 'https://43955f34-3630-43b6-a919-feb552573a60-00-34bxkhtriukjh.janeway.replit.dev'

    fetch(endpoint)
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret)
    })

}
