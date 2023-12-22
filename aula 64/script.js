const objetos=document.querySelector('#objetos')

const computador = {
  cpu:'ryzen 5600g',
  ram:'16gb',
  hd:'500gb',
  info:function(){
    console.log(`cpu: ${this.cpu}`)
    console.log(`ram: ${this.ram}`)
    console.log(`hd: ${this.hd}`)
  }

  

}
const computadores=[
  { 
    cpu:'ryzen 5600g',
  ram:'16gb',
  hd:'500gb'

  },
  { 
    cpu:'ryzen 6500x',
  ram:'32gb',
  hd:'1tb'

  },

  { 
    cpu:'i7',
  ram:'64gb',
  hd:'2tb'

  },

]

computador['monitor']='22'
computador.placavideo='rtx'

computadores.forEach((e)=>{
  console.log(e)
  const div = document.createElement('div')
  div.setAttribute('class','computador')
  div.innerHTML = `${e.cpu}  <br>  ${e.ram}  <br> ${e.hd} <br>`
  objetos.appendChild(div)
})

console.log(computador)
/*
console.log(computadores)
computador.info()
objetos.innerHTML=JSON.stringify(computadores)*/

