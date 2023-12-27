class Cursos{
    static curso =['javascript','html','css','anduino']
    
   static getTodosCursos=()=>{
        return this.curso
    }

    static getcurso=(i_curso)=>{
        return this.curso[i_curso]
    }

    static addCurso=(novoCurso)=>{
        this.curso.push(novoCurso)
    }

    static apagarCurso=()=>{
        this.curso=[]
    }
}


export default Cursos