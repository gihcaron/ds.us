import { Router } from "express";

const cadastroRoutes = Router();

const dev = [];

const sabotador = [];

cadastroRoutes.get("/listar/dev", (req, res) => {
  // Rota para listar todos os Dev's
return res.status(200).json(dev);
});

cadastroRoutes.get("/listar/sabotador", (req, res) => {
  // Rota para listar todos os Sabotadores
return res.status(200).json(sabotador);
});

cadastroRoutes.post("/adicionar/dev", (req, res) => {
const { nome, apelido, senha, estaVivo, localAtual, mostrarPapel } = req.body;

const user = {
    nome,
    apelido,
    senha,
    estaVivo,
    localAtual,
    mostrarPapel,
};

dev.push(user);

return res.status(201).json({
    message: "Usuário cadastrado com sucesso",
    user,
});
});

cadastroRoutes.post("/adicionar/sabotador", (req, res) => {
const { nome, apelido, senha, estaVivo, localAtual, mostrarPapel } = req.body;

const user = {
    nome,
    apelido,
    senha,
    estaVivo,
    localAtual,
    mostrarPapel,
};

sabotador.push(user);

return res.status(201).json({
    message: "Usuário cadastrado com sucesso",
    user,
});
});

devRoutes.put("/atualizar", (req, res) => {

devRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome, apelido, senha, estaVivo, localAtual, mostrarPapel } = req.body;

    
    const dev = dev.find((p) => p.id == id);

    if (!nome || !apelido || !senha || !estaVivo || !localAtual || !mostrarPapel) {
    return res.status(400).json({
        message: "Os campos nome, apelido, senha, estaVivo, localAtual e mostrarPapel são obrigatórios",
    });
    }
});

if (estaVivo != "sim" && estaVivo != "não") {
    return res.status(400).send({
    message: "Digite 'sim' ou 'não'!",
    });
}

dev.nome = nome;
dev.apelido = apelido;
dev.senha = senha;
dev.estaVivo = estaVivo || [];
dev.localAtual = localAtual;
dev.mostrarPapel = mostrarPapel;

return res.status(200).json({
    message: "dev atualizado com sucesso!",
    dev,
});
});

sabotadorRoutes.put("/atualizar", (req, res) => {
    
    sabotadorRoutes.put("/:id", (req, res) => {
        const { id } = req.params;
        const { nome, apelido, senha, estaVivo, localAtual, mostrarPapel } = req.body;
    
        
        const sabotador = sabotador.find((p) => p.id == id);
    
        if (!nome || !apelido || !senha || !estaVivo || !localAtual || !mostrarPapel) {
        return res.status(400).json({
            message: "Os campos nome, apelido, senha, estaVivo, localAtual e mostrarPapel são obrigatórios",
        });
        }
    });
    
    if (estaVivo != "sim" && estaVivo != "não") {
        return res.status(400).send({
        message: "Digite 'sim' ou 'não'!",
        });
    }
    
    sabotador.nome = nome;
    sabotador.apelido = apelido;
    sabotador.senha = senha;
    sabotador.estaVivo = estaVivo || [];
    sabotador.localAtual = localAtual;
    sabotador.mostrarPapel = mostrarPapel;
    
    return res.status(200).json({
        message: "sabotador atualizado com sucesso!",
        sabotador,
    });
    });

sabotadorRoutes.delete("/remover", (req, res) => {
  // Rota para deletar um sabotador
  sabotadorRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
  
    // Busca um sabotador pelo id no array de sabotador
    const sabotador = sabotador.find((s) => s.id == id);
  
    // Verifica se o sabotador foi encontrado
    if (!sabotador) {
      return res.status(404)
        .json({ message: `Sabotador com id ${id} não encontrado!` });
    }

    // Remove o sabotador do array de sabotadores
       sabotador = sabotador.filter((sabotador) => sabotador.id != id);
  
       return res.status(200).json({
         message: "sabotador removido com sucesso!",
         sabotador,
       });
    });
});

devRoutes.delete("/remover", (req, res) => {
    // Rota para deletar um dev
    devRoutes.delete("/:id", (req, res) => {
      const { id } = req.params;
    
      // Busca um dev pelo id no array de dev
      const dev = dev.find((d) => d.id == id);
    
      // Verifica se o dev foi encontrado
      if (!dev) {
        return res.status(404)
          .json({ message: `Dev com id ${id} não encontrado!` });
      }
  
      // Remove o dev do array de devs
         dev = dev.filter((dev) => dev.id != id);
    
         return res.status(200).json({
           message: "Dev removido com sucesso!",
           dev,
         });
      });
  });

export default cadastroRoutes;
