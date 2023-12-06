class Carro{ // classe pai
    constructor(nome,portas){
        this.nome = nome 
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }

    ligar=function(){
        this.ligado=true
    }

    desligar=function(){
        this.ligado=false 
    }

    setCor=function(cor){
        this.cor = cor
    }

}

class Militar extends Carro{
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem = blindagem
        this.municao = municao
    }

    atirar=function(){
        if(this.municao > 0){
            this.municao--
        }
    }
}

class utilitario extends Carro{
    constructor(nome,portas,lugares){
        super(nome,portas)
        this.lugares = lugares
    }
}

const c1=new Carro('Mustang','4')
c1.ligar()
c1.setCor('preto')

const c2=new Militar('Taque',1,100,50)
c2.setCor('musgo')
c2.ligar()
c2.atirar()

const c3=new utilitario('Onibus',2)
c3.setCor('azul')
c3.lugares=50

const info =`Nome: ${c1.nome}\n<br>Portas: ${c1.portas}\n<br>Motor:${c1.ligado?'Ligado':'Desligado'}<br>\nVelocidade: ${c1.vel}\n<br>Cor: ${c1.cor}`

const info2 =`Nome: ${c2.nome}\n<br>Portas: ${c2.portas}\n<br>Motor:${c2.ligado?'Ligado':'Desligado'}<br>
Blindagem: ${c2.blindagem} <Br> Munição ${c2.blindagem} <br>
\nVelocidade: ${c2.vel}\n<br>Cor: ${c2.cor}`


const info3 =`Nome: ${c3.nome}\n<br>Portas: ${c3.portas}\n<br>Motor:${c3.ligado?'Ligado':'Desligado'}<br> Lugares: ${c3.lugares} <br>
\nVelocidade: ${c3.vel}\n<br>Cor: ${c3.cor}`

console.log(info)

document.body.querySelector('.carro').innerHTML= info
document.body.querySelector('.carro2').innerHTML+= info2
document.body.querySelector('.carro2').nextElementSibling.innerHTML+= info3
