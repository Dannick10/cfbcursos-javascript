const div_data = document.querySelector('#data')
const div_relogio = document.querySelector('#relogio')

const data=new Date()


/*const data_r=data.getDate()+'/'+data.getMonth()+'/'+data.getFullYear()*/

let dia=data.getDate()
dia=dia<10?'0'+dia:dia
let mes=data.getMonth()
mes=mes<10?'0'+mes:mes
div_data.innerHTML =  `${dia}/${mes}/${data.getFullYear()}`


const relogio=()=>{
    const data=new Date()
    let hora = data.getHours()
    hora=hora<10?'0'+hora:hora

    let minuto = data.getMinutes()
    minuto=minuto<10?'0'+hora:hora

    let segundo = data.getSeconds()
    segundo=segundo<10?'0'+segundo:segundo
   
    const hora_completa=`${hora}:${minuto}:${segundo}`
    div_relogio.innerHTML  = hora_completa
}


const intervalo=setInterval(relogio,1000) 




/*
getDate()	O dia do mês	1 a 31
getUTCDate()
getDay()	O valor inteiro do dia da semana	0 a 6
getUTCDay()
getFullYear()	O ano com quatro dígitos	1900 em diante
getUTCFullYear
getHours()	A hora do dia	0 a 23
getUTCHours()
getMilliseconds()	O número de milissegundos desde o último segundo	0 a 999
getUTCMilliseconds()
getMinutes()	O número de minutos desde a última hora	0 a 59
getUTCMinutes()
getMonth()	O mês do ano	0 a 11
getUTCMonth()
getSeconds()	O número de segundos desde o último minuto	0 a 59
getUTCSeconds()
getTime()	O número de milissegundos desde a meia noite de 1º de janeiro de 1970
getTimezoneOffset()	Diferença entre hora local e GMT em minutos	0 a 1439
getYear()	O ano da data	0 a 99 para os anos de 1900 a 1999 e quatro dígitos em diante
parse()	Dado um string de data/hora, retorna o número de milissegundos desde meia noite de 1º de jan. de 1970
setDate()	Define o dia, dado o número entre 1 e 31	Data em milissegundos
setUTCDate()	Data em milissegundos
setFullYear()	Data em milissegundos
setUTCFullYear()	Data em milissegundos
setHours()	Define a hora, dado um número entre 0 e 23	Data em milissegundos
setUTCHours()
setMilliseconds()	Define os milissegundos, dado um número	Data em milissegundos
setUTCMilliseconds()	Data em milissegundos
setMinutes()	Define os minutos, dado um número entre 0 e 59	Data em milissegundos
setUTCMinutes()
setMonth()	Define o mês, dado um número entre 0 e 11.	Data em milissegundos
setUTCMonth()
setSeconds()	Define os segundos, dado um número entre 0 e 59	Data em milissegundos
setUTCSeconds()
setTime()	Define uma data, dado um número de milissegundos desde janeiro de 1970	Data em milissegundos
setYear()	Define o ano, dado um número de dois ou quatro dígitos	Data em milissegundos
toGMTString()	A data e hora GMT em formato de string	Day dd mmm yyyy, hh:mm:ss GMT
toUTCString()
TolocaleString()	A data e hora local em formato de string	Varia de acordo com o SO, localidade e navegador
toString()	A data e hora local em formato de string	Varia de acordo com o SO e o navegador
UTC()	Sendo dada uma data no formato de ano, mês e dia (e horas, minutos, segundos e milissegundos opcionais), retorna o número de milissegundos desde a meia noite de 1º de jan. de 1970	Data em milissegundos
valueOf()	Número de milissegundos desde a meia noite de 1º de janeiro de 1970	Data em miliss
*/