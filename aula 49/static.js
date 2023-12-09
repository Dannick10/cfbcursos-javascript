class Npc{
    static alerta = false 

    constructor(energia){
        this.energia = energia
       
    }

    info=function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${Npc.alerta?'sim':'nao'}`)
        console.log('_______')
    }

    static alertar=function(){
        Npc.alerta = true
    }
}

const Npc1= new Npc(100)
const Npc2= new Npc(200)
const Npc3= new Npc(30)

Npc.alertar()


Npc1.info()
Npc2.info()
Npc3.info()