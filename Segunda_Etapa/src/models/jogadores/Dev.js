// import Aluno from './Aluno.js';
// O aluno não está sendo importado pois não está sendo exportado no arquivo aluno.js 

class Dev {
    constructor(grupo, nome, apelido, senha, estaVivo, localAtual, mostrarPapel) {
        this.grupo = grupo;
        this.nome = nome;
        this.apelido = apelido;
        this.senha = senha;
        this.estaVivo = estaVivo;
        this.localAtual = localAtual;
        this.mostrarPapel = mostrarPapel;   
    }

}

export default Dev;