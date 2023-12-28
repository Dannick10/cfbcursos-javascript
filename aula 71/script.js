const nome = Symbol('nome')
const numero= Symbol('numero')
const uniforme= Symbol('uniforme')

const jogador={ 
    nome:'j1',
    [numero]: '10',
}

jogador[uniforme]= 'amarelo'

for(p in jogador){
    console.log(p)
}

console.log(jogador.nome)
console.log(jogador[numero])
console.log(jogador[uniforme])