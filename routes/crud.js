// Instanciando o express para ter acesso ao Router
const express = require("express");
// Importando minha array para guardar o dados do meu CRUD
const data = require("../data");

const { v4: uuidv4 } = require("uuid");

// Criando meu roteador
const router = express.Router();

// Criando endpoint de create do meu CRUD
// Endpoint preparado para receber requisições do tipo POST para criar novas informações na minha array
router.post("/create", (req, res) => {
  const newDocument = {
    ...req.body,
    id: uuidv4(),
  };
  data.push(newDocument);

  return res.status(201).json(data[data.indexOf(newDocument)]);
});

// Endpoint preparado para receber requisições do tipo GET e responder com todos os dados guardados na minha array
router.get("/read", (req, res) => {
  return res.status(200).json(data);
});

// Endpoint preparado para receber requisições do tipo PATCH, mantendo os dados não modificados, e alterando os valores solictados pelo client
// Esse endpoint vai precisar receber um PARAMETRO DE ROTA para identificar qual será o objeto a ser editado

router.patch("/edit/:id", (req, res) => {
  const { id } = req.params;
  const documentToEdit = data.find(
    (currentElement) => currentElement.id === id
  );

  data[data.indexOf(documentToEdit)] = {
    ...documentToEdit,
    ...req.body,
  };

  return res.status(200).json(data.find((element) => element.id === id));
});

// Esse endpoint está preparado para receber requisições do tipo DELETE
// Ele também irá receber o id como parametro

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  const documentToDelete = data.find((element) => element.id === id);

  data.splice(data.indexOf(documentToDelete), 1);

  return res.status(200).json(documentToDelete);
});

module.exports = router;
