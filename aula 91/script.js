const texto=document.querySelector('#texto')

fetch('texto.txt')
.then(res=>res.text())
.then(res=>{
   res=JSON.parse(res)
   console.log(res)
   texto.innerHTML += res.curso + ' '
   texto.innerHTML += res.arquivo
})