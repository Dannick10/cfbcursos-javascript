const pessoa={
    nome:'daniel',
    canal:'cfb cursos',
    curso:'javascript',
    aulas:{
        aula01:'introduçao',
        aula02:'variaveis'
    }
}

const string_pessoa='{"nome":"daniel","canal":"cfb cursos","curso":"javascript","aulas":{"aula01":"introduçao","aula02":"variaveis"}}'

const s_json_pessoa=JSON.stringify(pessoa) //convert objeto em json
const o_json_pessoa=JSON.parse(string_pessoa) //convert string json em objeto

console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa) 