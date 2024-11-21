// import Aluno from './Aluno.js';
// A importação está comentada. O aluno não está sendo importado pois não está sendo exportado no arquivo aluno.js 

class Dev extends Aluno {  // Dev herda de Aluno
    constructor(grupo, nome, apelido, senha, estaVivo, localAtual, papel)  {  // O construtor da classe Dev herda atributos de aluno 
        super(grupo, nome, apelido, senha, estaVivo); // o super chama o construtor da classe pai
        this.localAtual = localAtual; // Define o atributo localAtual 
        this.papel = papel; // Define o atributo papel
    }
    // Criação do método mostrarPapel
    mostrarPapel() {
        return ("O jogador " + this.name + " é um "+this.papel);  // Retorna uma  string indicando que o jogador é um dev
    }

}

//exporta o Dev

export default Dev;
}

