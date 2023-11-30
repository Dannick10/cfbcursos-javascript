const caixa = document.querySelector('#caixa')

let mapa=new Map()

mapa.set('curso','javascript')
mapa.set('10','cfb-cursos')
mapa.set(1,100)
mapa.set('canal',100)

console.log(mapa)

mapa.delete('canal')
let pes= 1
let res=''
if(mapa.has(pes)){
   res= 'a chave existe ' + mapa.get(pes)
   res+= mapa.size
} else {
    res= ' n esta na coleçao' + mapa.get(pes)
}
caixa.append(res)

mapa.forEach((el) => {
    console.log(el)
});