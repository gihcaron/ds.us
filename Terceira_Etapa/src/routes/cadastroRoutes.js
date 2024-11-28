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

cadastroRoutes.put("/atualizar", (req, res) => {

});

cadastroRoutes.delete("/remover", (req, res) => {

});

export default cadastroRoutes;
