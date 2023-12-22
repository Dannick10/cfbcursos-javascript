const url = document.querySelector('#url')
const btn_url = document.querySelector('#btn_url')

btn_url.addEventListener('click',(evt)=>{
    //window.location = 'https//www.google.com.br'
    //window.location.replace('www.google.com.br')
   // window.location.assign('www.google.com.br')
   // windown.location.reload()
  // window.history.forward()
  //window.history.go(1)
    console.log(window.history.length)
    console.log(url.value)
    window.location =url.value
   
})

