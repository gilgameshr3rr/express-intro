// Instanciando o express para ter acesso ao Router
const express = require("express");
// Importando minha array para guardar o dados do meu CRUD
const data = require("../data");

// Criando meu roteador
const router = express.Router();

// Criando endpoint de create do meu CRUD
// Endpoint preparado para receber requisições do tipo POST para criar novas informações na minha array
router.post("/create", (req, res) => {
  const newDocument = req.body;
  data.push(req.body);

  return res.status(201).json(data[data.indexOf(newDocument)]);
});

// Endpoint preparado para receber requisições do tipo GET e responder com todos os dados guardados na minha array
router.get("/read", (req, res) => {
  return res.status(200).json(data);
});

module.exports = router;
