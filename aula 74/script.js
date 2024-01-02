let nome = new String('Daniel Rocha Silva')

console.log(nome.startsWith('Daniel'))

let primeiro = nome.split(' ')

console.log(nome.endsWith('Silva'))


console.log(nome.repeat(2))
console.log(nome.valueOf())

for(let i = 0; i < 6; i++){
    console.log(nome.charCodeAt(i))
    console.log(String.fromCodePoint(nome.charCodeAt(i)))
   
}


