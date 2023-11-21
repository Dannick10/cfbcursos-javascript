const cursosTodos=[...document.getElementsByClassName('curso')]
const c1=[...document.getElementsByClassName('c1')]
const c2=[...document.getElementsByClassName('c2')]
const cursoEspecial=document.getElementsByClassName('curso')[2]

console.log(cursosTodos)
console.log(c1)
console.log(c2)

c1.map((el)=>{
   el.classList.add('destaque')
})

cursoEspecial.classList.remove('destaque')