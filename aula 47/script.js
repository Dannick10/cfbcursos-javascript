const nome = document.querySelector('#nome')
const portas = document.querySelector('#portas')
const blindagem = document.querySelector('#blindagem')
const municao = document.querySelector('#municao')

const res = document.querySelector('#res')

const btn_enviar = document.querySelector('#button')
const select_normal = document.querySelector('#normal')
const select_militar = document.querySelector('#militar')

const ver_carros = document.querySelectorAll('#ver')
const btn_ver = document.querySelector('#button_ver')


let a_carros=[]
let a_carrosMilitar=[]
class carro{ 
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas 
        this.vel=0
        this.motor = undefined
        this.cor = undefined
    }

    motorligado=function(){
        this.motor = true
    }
    

    motordesligado=function(){
        this.motor = false
    }

    setcor=function(cor){
        this.cor =cor 
    }
}

class militar extends carro{
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem = blindagem
        this.municao = municao
    }
}

select_militar.addEventListener('click',(evt)=>{
    blindagem.removeAttribute('disabled')
    municao.removeAttribute('disabled')
})

select_normal.addEventListener('click',(evt)=>{
    blindagem.setAttribute('disabled','disabled')
    municao.setAttribute('disabled','disabled')
})


const removercarroNormal=(quem)=>{
a_carros=a_carros.filter((el)=>{
    return el.nome!=quem
})
}

const removercarroMilitar=(quem)=>{
    a_carrosMilitar=a_carrosMilitar.filter((el)=>{
        return el.nome!=quem
    })
    }
    

const gerenciarCarrosNormal=()=>{
    res.innerHTML = ''

    a_carros.map((el)=>{
        const div = document.createElement('div')
        const btn=document.createElement('button')

        btn.addEventListener('click',(evt)=>{
            const quemremover=evt.target.parentNode.dataset.nome
            
            removercarroNormal(quemremover)
            console.log(a_carros)
            gerenciarCarrosNormal()
        })

        div.setAttribute('data-nome',el.nome)
        div.setAttribute('class','carro')
        div.innerHTML += `Normal<hr><br>`
        div.innerHTML += `Nome: ${el.nome}`
        div.innerHTML += `<br>Portas: ${el.portas}`   
        div.innerHTML += `<br>Motor: ${el.motor}`
        div.innerHTML += `<br>cor: ${el.cor}` 
        btn.innerHTML +='<br>remover'
        div.appendChild(btn)
        res.appendChild(div)

    })
}

const gerenciarCarrosMilitar=()=>{
    res.innerHTML = ''

    a_carrosMilitar.map((el)=>{
        const div = document.createElement('div')
        const btn=document.createElement('button')

        btn.addEventListener('click',(evt)=>{
            const quemremover=evt.target.parentNode.dataset.nome
            
            removercarroMilitar(quemremover)
        
            gerenciarCarrosMilitar()
        })


        btn.setAttribute('class','button')

        div.setAttribute('data-nome',el.nome)
        div.setAttribute('class','carro2')
        div.innerHTML += `Militar<hr><br>`
        div.innerHTML += `Nome: ${el.nome}`
        div.innerHTML += `<br>Portas: ${el.portas}`   
        div.innerHTML += `<br>Motor: ${el.motor}`
        div.innerHTML += `<br>cor: ${el.cor}` 
        div.innerHTML += `<br>blindagem: ${el.blindagem}` 
        div.innerHTML += `<br>municao: ${el.municao}` 
        btn.innerHTML +='<br>remover'
        div.appendChild(btn)
        res.appendChild(div)

    })
}



btn_enviar.addEventListener('click',()=>{
    if(select_normal.checked){
        const carroNormal = new carro(nome.value,portas.value)
        a_carros.push(carroNormal)
        console.log(a_carros)
        carroNormal.setcor(document.querySelector('#cor').value)
        gerenciarCarrosNormal()
    }else {
        const carroMilitar = new militar(nome.value,portas.value,blindagem.value,municao.value)
        console.log(a_carrosMilitar)
        carroMilitar.setcor(document.querySelector('#cor').value)
        a_carrosMilitar.push(carroMilitar)
        gerenciarCarrosMilitar()
    }
    
})

btn_ver.addEventListener('click',()=>{
    if(ver_carros[0].checked){
        gerenciarCarrosMilitar()
    } else {
        gerenciarCarrosNormal()
    }
})

