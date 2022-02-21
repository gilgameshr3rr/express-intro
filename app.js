// Instanciando o express numa variavel
const express = require("express");
// Criando uma aplicação express
const app = express();

// Preparando o meu servidor para receber json
app.use(express.json());

// Direcionando as rotas "/crud" para o meu roteador.
const crudRouter = require("./routes/crud");
app.use("/crud", crudRouter);

// Subindo o servidor para rodar na porta 4000
app.listen(4000, () => {
  console.log("Server up and running at port 4000.");
});
