const long = document.querySelector('#long')
const lat = document.querySelector('#lat')

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(mostrarlocalização,erroLocalização)

}else{
  console.log('geolocalização não suportada')
}


function mostrarlocalização(pos){
console.log(pos)
long.innerHTML = pos.coords.longitude
lat.innerHTML =  pos.coords.latitude
}

function erroLocalização(pos){
  console.log('erro localização')
}