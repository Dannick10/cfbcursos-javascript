const number = [...document.querySelectorAll('#number')]
const op = [...document.querySelectorAll('.key--operator')]
const equal = document.querySelector('.key--equal')
const display = document.querySelector('.calculator__display')
const clear = document.querySelector('.clear')
const decimal = document.querySelector('.decimal')

let verificop = false
let verificDecimal = false

number.map((el)=>{
    el.addEventListener('click',(evt)=>{
        verificop = false
       
        if(display.innerHTML == '0'){
           display.innerHTML = ''
        }
      display.innerHTML += evt.target.innerHTML
    })
})

op.map((el)=>{
    el.addEventListener('click',(evt)=>{
      
        if(display.innerHTML == '0'){
            verificop = true
           
        }
        
        if(!verificop){
            verificDecimal = false
            verificop = true
            if(evt.target.innerHTML == 'x'){
                display.innerHTML += '*'
            }else if(evt.target.innerHTML == '÷'){
                display.innerHTML += '/'
            }else{
            display.innerHTML += evt.target.innerHTML
            }
        }
    
    })
})

decimal.addEventListener('click',(evt)=>{

   if(!verificDecimal){
    verificDecimal = true
        display.innerHTML +='.'  
   }

})

equal.addEventListener('click',(evt)=>{
    verificDecimal = false
    verificop = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

clear.addEventListener('click',(evt)=>{
    display.innerHTML = '0'
})