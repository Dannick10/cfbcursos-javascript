function aluno(nome,nota){
    this.nome=nome
    this.nota=nota

    this.dados_arrowanonimo=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000) 

}

}

const al1=new aluno("Bruno",100)
const al2=new aluno("Daniel",800)
al1.dados_arrowanonimo()
al2.dados_arrowanonimo()
