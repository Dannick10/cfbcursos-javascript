class Carro{
    constructor(tipo,estagioturbo){
        this.turbo=new Turbo(estagioturbo)
        if(tipo==1){
            this.velMax = 120 
            this.nome='Normal'
        } else if(tipo ==2){
            this.velMax = 160
            this.nome='Esportivo'
        } else if(tipo ==3){
            this.velMax = 200
            this.nome='Super Esportivo'
    } 
    this.velMax += this.turbo
}

  info(){
    console.log(this.nome)
    console.log(this.velMax)
    console.log(this.turbo)
  }

}

class Turbo{
    constructor(e){
        if(e ==0){
            this.pot=0
        }else if(e == 1){
            this.pot=50
        } else if(e==2){
            this.pot == 75
        } else if(e==3){
            this.pot== 100
        }
    }
}

class CarroEspecial extends Carro{
    constructor(estagioturbo){
        super(4,estagioturbo)
        this.velMax =300 + this.turbo.pot
        this.nome='Carro de corrida'
        this.tipoinfo = 2
    }
    infoSuper(){
        if(this.tipoinfo ==1){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log('------------')
        } else{
            this.info()
        }
      } 

}

const c1= new Carro(1,0)
const c2= new Carro(1,1)
const c3= new CarroEspecial(1)
c1.info()
c2.info()
c3.infoSuper()