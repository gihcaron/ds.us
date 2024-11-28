// Importa a classe de Aluno
import Aluno from "./Aluno.js";

// Classe Sabotador que herda de Aluno
class Sabotador extends Aluno {
  // Construtor da classe Sabotador 
  constructor(aluno) {
    // O constructor da classe Sabotador herda atributos de Aluno
    super(
      aluno.grupo, // O super chama o atributo grupo da classe pai
      aluno.nome, // O super chama o atributo nome da classe pai
      aluno.apelido, // O super chama o atributo apelido da classe pai
      aluno.pegarSenha(), // O super chama o método pegarSenha da classe pai
      aluno.estaVivo // O super chama o atributo estaVivo da classe pai
    );
    this.localAtual = "Recepção"; // Define o atributo localAtual como Recepção
    this.tempoDesocupado = Date.now(); // Define o atributo tempoDesocupado como Date.now()
    this.votos = 0; // Define o atributo de votos como 0
    this.jaVotou = false; // Define o atributo jaVotou como false
    this.pontos = 0; // Define o atributos pontos como 0 
  }

  // Criação do método mostrarPapel
  mostrarPapel() {
    // Retorna uma mensagem exibindo que o jogados com o apelido XYZ é um Sabotador
    return `Sou jogador ${this.apelido} e sou um SABOTADOR com objetivo de atrapalhar a vida dos DEVs do SENAI ☠️`;
  }

// Criação do método eliminar alvo
  eliminar(alvo) {
    // Ao eliminar o alvo, é retornada a mensagem que o jogador alvo foi eliminado pelo sabotador
    return `O jogador ${alvo.apelido} foi eliminado pelo SABOTADOR ${this.apelido} 😈`;
  }

  // Criação do Método votar
  votar(alvo) {
  // Se o jogador já estiver votado, retorna um erro 
    if (this.jaVotou === true) {
   // O erro exibido que o jogador já votou nesta rodada
      throw new Error("Você já votou nesta rodada.");
    }
   // se o jogador não estiver votado, o jogador alvo recebe um voto
    alvo.votos++;
      // o jogador que votou recebe a mensagem de que votou no jogador alvo
    this.jaVotou = true;
  // Retorna uma mensagem de que o jogador alvo foi votado
    return `O jogador ${alvo.apelido} foi votado pelo ${this.apelido} 😈`;
  }
}

// Exporta a classe Sabotador
export default Sabotador;
