const btn_imprimir = document.querySelector('#btn_imprimir')

btn_imprimir.addEventListener('click',()=>{
  const conteudo = document.getElementById('table').innerHTML;

  let estilo = '<style>th,td,table( border-collapse: collapse;padding: 2px 3px;text-align: center;border: 1px solid black)</style>'

  

  const win = window.open('','','height=700,width=700')
  win.document.write('<html><head>')
  win.document.write('<title>CFB CURSOS</title>')
  win.document.write(estilo)
  win.document.write('</head>') 
  win.document.write('<body>'); 
  win.document.write(conteudo)
  win.document.write('</body></html>')
  win.print()
})