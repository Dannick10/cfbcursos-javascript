let nome = new String('Daniel Rocha Silva 1999')
let email='Daniel@hotmail.com'
let numeros='1,10,100,1000'

console.log(nome)

console.log(nome.search(/rocha/i))

console.log(nome.match(/a/ig))

console.log(nome.match(/[a-l|0-9]/ig))


//meta caracteres
console.log(nome.match(/\d/ig)) //numeros
console.log(nome.match(/\s/ig)) //espaçõs
console.log(nome.match(/\bD/ig)) //

//quantificadores

console.log(nome.match(/a+|c+ /ig))
console.log(nome.match(/an*/ig))
console.log(numeros.match(/10?/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))

