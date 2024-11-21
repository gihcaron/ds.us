class Sabotador {

    
}

    #senha; // atributo privado
    localAtual; // atributo público

    /**
     * @param {number} grupo // Grupo do Sabotador.
     * @param {string} nome // Nome do Sabotador.
     * @param {string} apelido // Apelido do sabotador.
     * @param {string} senha // Senha do Sabotador
     */    

constructor(grupo, nome, apelido, senha) {
    this.grupo = grupo;
    this.nome = nome;
    this.apelido = apelido;
    this.#senha = senha; // senha como atributo privado
    this.localAtual = "Portaria do SENAI"; // localização inicial pública 
    this.estaVivo = true; // todos os Sabotadores começam vivos
}

// método privado para mostrar o papel do sabotador
 #mostrarPapel() {
    return "Eu sou um(a) Sabotador(a)! Meu objetivo é atrapalhar os DEVs."
 }
 // método privado para eliminar um alvo
 #eliminarAlvo(alvo) {
   if (alvo.estaVivo) {
    alvo.estaVivo = false;
    return `${this.nome} eliminou ${alvo.nome}.`;
   } else {
    return `${alvo.nome} já está eliminado(a).`;
   }
 }
}
    return "Eu sou um(a) Sabotador(a)! Meu objetivo é atrapalhar os DEVs.";
 }}

