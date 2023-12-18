const olho = [...document.querySelectorAll('.olho')]

let posx_mouse
let posy_mouse

window.addEventListener('mousemove',(evt)=>{
    posx_mouse =evt.clientX
    posy_mouse= evt.clientY

    const rot=Math.atan2(posy_mouse,posx_mouse) * 360 / Math.PI

    
    olho.forEach((o)=> {
        o.style.transform='rotate('+rot+'deg)'
    })

})

