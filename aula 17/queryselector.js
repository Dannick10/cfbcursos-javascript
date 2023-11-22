const divTodos = [...document.getElementsByTagName('div')]
const cursosTodos=[...document.getElementsByClassName('curso')]
const c1=[...document.getElementsByClassName('c1')]
const c2=[...document.getElementsByClassName('c2')]
const curso = document.getElementById('c1')

//const query_divTodas=[...document.querySelectorAll('div[class]')]
const query_divTodas=[...document.querySelectorAll('div > p')]
const query_cursosTodos=[...document.querySelectorAll('.curso')]
const curso1=[...document.querySelectorAll('.c1')]
const curso2=[...document.querySelectorAll('.c2')]
const query_cursoespecial = document.querySelector('#c1')



console.log(query_divTodas)
console.log(query_cursosTodos)
console.log(curso1)
console.log(curso2)
console.log(query_cursoespecial)


/*
console.log(divTodos)
console.log(cursosTodos)
console.log(c1)
console.log(c2)
*/