// Import de Fastify
const fastify = require("fastify");

const cors = require("@fastify/cors");

const analyze = require("./analyze.js");

// Création et configuration du serveur
const server = fastify({ logger: true });

server.register(cors);

// Lancement du serveur
function start() {
  server
    .listen(3000)
    .then(function () {
      console.log("Server is running");
    })
    .catch(function (err) {
      console.log("Err: server is not running", err);
    });
}
start();

// Définition des end points
server.get("/", (request, reply) => {
  reply.send("Welcome on String Analyzer API !");
});

server.get("/analyze", (request, reply) => {
  const { string } = request.query;
  reply.send(analyze(string));
});
