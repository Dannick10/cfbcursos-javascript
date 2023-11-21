function* cores(){
    yield 'Vermelho'
    yield 'Roxo'
    yield 'Azul'
}

let itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
