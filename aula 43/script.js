const Pessoas={
    nome: 'daniel',
    getNome: function(){
        return this.nome
    },
    setNome:function(nome){
        this.nome=nome
    },

}

const p2=Pessoas


console.log(Pessoas.nome)
console.log(p2.getNome())