const caixa1=document.querySelector('#caixa1')
const curso=[...document.querySelectorAll('.curso')]
const c1_2= document.querySelector('#c1_2')

console.log(caixa1.hasChildNodes())
console.log(curso[0].hasChildNodes())
console.log(curso[0].ChildNodes)
console.log(c1_2.parentNode.parentNode.children[4])

console.log(caixa1.children.length > 0 ? 'possui filhos' : 'nao possui filhos')


console.log(caixa1.firstElementChild.innerHTML='teste')
caixa1.children[1].innerHTML = 'teste'

console.log(caixa1.firstElementChild)
console.log(caixa1.lastElementChild)
console.log(caixa1.children)