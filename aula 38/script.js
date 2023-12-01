const caixa = document.querySelector('#caixa')

let musicas = new Set(['Musica1','musica boa','musica10'])

musicas.add('musica muito legal')
musicas.add('musical')
musicas.add('musical')
musicas.add('musical')

musicas.delete('musical')


console.log(musicas)
/*
musicas.forEach((el)=>{
    caixa.innerHTML += el + ' <br>'
})*/

for(let m of musicas){
    caixa.innerHTML += m
}