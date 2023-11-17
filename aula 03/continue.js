let n =0 
let max = 100
let pares = 0
let impa = 0

for(let i= n; i<max; i++){
    if(i%2==0){
    
        impa++
       continue
    }
   
    pares++
  
}

console.log('quantidade de pares:' + pares)
console.log('quantidade de impa:' + impa)

console.log("Fim do programa")