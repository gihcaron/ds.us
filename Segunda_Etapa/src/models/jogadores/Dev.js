// import Aluno from './Aluno.js';
// A importação está comentada. O aluno não está sendo importado pois não está sendo exportado no arquivo aluno.js 

class Dev extends Aluno {  // Dev herda de Aluno

    /**
     * 
     * @param {number} grupo  // atribuir parâmetro de numero para o grupo do Dev
     * @param {string} nome  // atribuir parâmetro de string para o nome do Dev
     * @param {string} apelido // atribuir parâmetro de string para o apelido do Dev
     * @param {string} senha // atribuir parâmetro de string para a senha do Dev
     * @param {boolean} estaVivo // atribuir parâmetro de boolean para a vida do Dev
     * @param {string} localAtual // atribuir parâmetro de string para o local atual do Dev
     */
   

    constructor(grupo, nome, apelido, senha, estaVivo, localAtual, papel) {  // O construtor da classe Dev herda atributos de aluno 
        super(grupo, nome, apelido, senha, estaVivo); // o super chama o construtor da classe pai
        this.localAtual = localAtual; // Define o atributo localAtual 
        this.papel = papel; // Define o atributo papel
    }
    // Criação do método mostrarPapel
    mostrarPapel() {
        return ("O jogador " + this.name + " é um " + this.papel);  // Retorna uma  string indicando que o jogador é um dev
    }

}

//exporta o Dev
export default Dev;

