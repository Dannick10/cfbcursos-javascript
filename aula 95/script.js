class cxm{
    constructor(config){
        this.titulo=config.titulo
        this.texto=config.texto
        this.cor=config.cor 
        this.destino=document.body

    }

    mostrar=()=>{
        this.divmsg = document.createElement('div')
        const estilo= 
        'display: flex;'+
        'justfy-content:center;' +
        'align-items: center;'+
        'position: absolute;'+
        'top: 0px;' + 
        'left: 0px;'+
        'width: 100vw;' +     
        'height: 100vh;' +     
        'background: rgba(0,0,0,0.7);'
        this.divmsg.setAttribute('id','divmsg')
        this.divmsg.setAttribute('style',estilo)
        this.destino.prepend(this.divmsg)

        const areamsg = document.createElement('div')

        const estilo_msg = 
        'display: flex;'+
        'justify-content: flex-start;'+
        'align-items: flex-start;'+
        'flex-direction: column;'+
        'width: 300px;'

        areamsg.setAttribute('style',estilo_msg)
        this.divmsg.appendChild(areamsg)
       
       const  estilo_titulo = 
        'display: flex;'+
        'justify-content: center;'+
        'align-items: center;'+
        'width: 100%'+
        'background-color:'+this.cor + ';' + 
        'color: #fff;' +
        'border-radius: 5px 5px 0 0;'
        const titulomsg = document.createElement('div')

        titulomsg.setAttribute('style',estilo_titulo)

        titulomsg.innerHTML=this.titulo
        areamsg.appendChild(titulomsg)
    
    }

    ocultar=()=>{

    }
}

const config={
    titulo: 'Daniel',
    texto:'cfb Cursos',
    cor:'#fff'
}

const cxmg= new cxm(config)

const btn_mostrarmensagem = document.querySelector('.btn_mostrarmsg')

btn_mostrarmensagem.addEventListener('click',()=>{
  
    cxmg.mostrar()
})