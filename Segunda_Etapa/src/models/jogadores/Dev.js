// import Aluno from './Aluno.js';
// O aluno não está sendo importado pois não está sendo exportado no arquivo aluno.js 

class Dev extends Aluno {
    constructor(grupo, nome, apelido, senha, estaVivo, localAtual, mostrarPapel)  {
        super(grupo, nome, apelido, senha, estaVivo);
        this.localAtual = localAtual;
        this.mostrarPapel = mostrarPapel;   
    }

    mostrarPapel() {
        console.log("O jogador" + this.name + "é um dev");
    }

}

export default Dev;