import {cursos} from './script2.js'
import { carros } from './script2.js'

const div = document.querySelector('#objetos')

console.log(cursos)
console.log(carros)

carros.map((el)=>{
    div .innerHTML += '<br>'+el
})