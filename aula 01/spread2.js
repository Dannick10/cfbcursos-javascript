const jogador1 = {nome:"bruno", hp: 100, vida: 3,magia:150 }
const jogador2 = {nome:"daniel", hp: 100, vida: 5,velocidade: 80 }
const jogador3 = {...jogador1,...jogador2}


console.log(jogador3)
