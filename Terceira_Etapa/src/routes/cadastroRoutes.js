import { Router } from "express";

const cadastroRoutes = Router();

cadastroRoutes.post("/adicionar", (req, res) => {
// 
});

cadastroRoutes.get("/listar", (req, res) => {
// Rota para listar todos os Dev's
    return res.status(200).json(dev);
  });

// Rota para listar todos os Sabotadores
sabotadorRoutes.get("/", (req, res) => {
    return res.status(200).json(sabotador);
  });



cadastroRoutes.put("/atualizar", (req, res) => {

});

cadastroRoutes.delete("/remover", (req, res) => {

});

export default cadastroRoutes;
