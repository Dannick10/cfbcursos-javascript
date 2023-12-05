class pessoa{
    canal='cfb curso'

    constructor(pnome,tipo){
        this.nome=pnome
        if(tipo==1){
            this.tipo='esportivo'
            this.velmax=300
        } else if(tipo ==2){
            this.tipo='utilitario'
            this.velmax=100
        } else if(tipo ==3){
            this.tipo='passeio'
            this.velmax=160
        } else{
           this.tipo='Militar'
        this.velmax=180
        }
    }

    getNome(){
        return this.nome
    }

    getTIpo(){
        return this.tipo
    }

    getVelMax(){
        return this.velmax
    }

    getinfo(){
        return [this.nome,this.tipo,this.velmax]
    }

    
setNome(nome){
    this.nome=nome
}

    setTipo(tipo){
        this.tipo = tipo
    }

    setvelMAx(velmax){
        this.velmax = velmax
    }


    info(){
        console.log(`Carro: ${this.nome} |  Tipo: ${this.tipo} | Velocidade Maxima: ${this.velmax}KM ${this.canal}` )
    }
}

let p1 = new pessoa('Lamborghini',1)
let p2 = new pessoa('Hillux',3)
let p3 = new pessoa('Onibus',2)
let p4 = new pessoa('jeep',4)




p1.info()
p2.info()
p3.info()
p4.info()

p1.setNome('Super veloz')
p1.setTipo(2)
p1.setvelMAx(500)

p1.info()

