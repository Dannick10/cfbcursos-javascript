const head=document.head 
const body=document.body 

const estilo=`<link rel="stylesheet" href="topo.css">`
head.innerHTML += estilo

const topo = document.createElement('div')
topo.setAttribute('id','topo')
topo.setAttribute('class','topo')

const logo="<div id='logo' class='logo'>" + "<ul><li>Inicio</li><li>usuario</li><li>ajuda</li></ul>"+ '</div>'

topo.innerHTML = logo
body.prepend(topo)