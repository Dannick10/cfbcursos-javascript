let i=null; i=10

let n=null; 
(n=10)
console.log(n)

let numeros=[10,20,30]
let [num,...rest]=numeros
console.log(num)
console.log(rest)

let numeral={
    n1:10,
    n2:20
};
({...b}=numeral)
console.log(b)

let n1=[1,2]
let n2=[3,4];
[n1,n2].map(v=>console.log(v))
