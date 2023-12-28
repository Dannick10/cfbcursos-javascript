class Jogador {
    constructor(nome) {
        this.nome = nome;
        this.id = Symbol();
    }
}

let Jogadores = [
    new Jogador('s1'),
    new Jogador('s1'),
    new Jogador('s2'),
    new Jogador('s3')
];

let s = [];

let s_jogadores = Jogadores.filter((j) => {
    return j.nome == 's1' || j.nome == 's2';
});

s = s_jogadores.map((j) => {
    return j.id;
});

console.log(s_jogadores);
console.log(s);
