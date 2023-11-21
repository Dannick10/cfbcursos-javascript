let el = document.getElementsByTagName('div')

el=[...el]
el.map((el,i)=>{
    console.log(el)
    el.style.background = 'black'
    el.style.margin = '20px'
    el.style.color = 'white'
    
})


const el2=document.getElementsByTagName('div')
const val=Array.prototype.map.call(el,({innerHTML})=>innerHTML)

console.log(val)



