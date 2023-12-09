const nome = document.querySelector('#nome')
const portas = document.querySelector('#portas')
const blindagem = document.querySelector('#blindagem')
const municao = document.querySelector('#municao')

const res = document.querySelector('#res')

const btn_enviar = document.querySelector('#button')
const select_normal = document.querySelector('#normal')
const select_militar = document.querySelector('#militar')

class carro{ 
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas 
        this.motor = undefined
    }

    motorligado=function(){
        this.motor = true
    }
    

    motordesligado=function(){
        this.motor = false
    }
}

class militar extends carro{
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem = blindagem
        this.municao = municao
    }
}


select_militar.addEventListener('click',()=>{
    blindagem.removeAttribute('disabled')
    municao.removeAttribute('disabled')

})

select_normal.addEventListener('click',()=>{
    blindagem.value = 0
    municao.value = 0
    blindagem.setAttribute('disabled','disabled')
    municao.setAttribute('disabled','disabled')
})

const carroNormal = []
const carroMilitar = []



btn_enviar.addEventListener('click',()=>{
    res.innerHTML = ''
    if(select_normal.checked == true){
        const novoCarro = new carro(nome.value,portas.value)
        carroNormal.push(novoCarro)
        
        carroNormal.map((el)=>{
        el.motordesligado()
        res.innerHTML += ` NOME ${el.nome }`
        res.innerHTML += `<br>PORTAS ${el.portas }`
        res.innerHTML += `<br>MOTOR ${el.motor?'LIGADO':'DEsligado' }`
           
        })

    
    } else {
        const novoCarro = new militar(nome.value,portas.value,blindagem.value,municao.value)
        carroMilitar.push(novoCarro)
        
        carroMilitar.map((el)=>{
        el.motordesligado()
        res.innerHTML += ` NOME ${el.nome }`
        res.innerHTML += `<br>PORTAS ${el.portas }`
        res.innerHTML += `<br>MOTOR ${el.motor?'LIGADO':'DEsligado' }`
        res.innerHTML += `<br>Blindagem ${el.blindagem}`
        res.innerHTML += `<br>munição ${el.municao}`
           
        })

        novoCarro.value = 0

    }
})