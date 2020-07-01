const Hapi = require("hapi");
const HapiAxios = require("hapi-axios");

// Serveur mis sur le port 8000
const server = Hapi.server({
  host: "localhost",
  port: 8000,
});

// Route root qui renvoie Hello World
server.route({
  method: "GET",
  path: "/",
  handler: (request, h) => {
    return "Hello World";
  },
});

// Route qui permet à l'utilisateur de s'authentifier
server.route({
  method: "POST",
  path: "/api/login",
  options: {
    plugins: {
      body: { merge: false, sanitizer: { stripNullorEmpty: false } },
    },
    handler: function (request, h) {
      if (
        request.payload.payload.username === "Luke" &&
        request.payload.payload.password === "DadSucks"
      ) {
        return h.response({ message: "Authentifié" });
      } else {
        return h.response({
          message: "Veuillez rentrer les bons identifiants",
        });
      }
    },
  },
});

// Route qui renvoie les données de l'API pour une ressource avec un ID précis
// Ex: http://localhost:8000/api/people/1 qui renvoie le véhicule avec l'ID 1
server.route({
  method: "GET",
  path: "/api/{type}/{id}/{format?}",
  handler: async (request, h) => {
    let url;
    const { swapi } = request.server.plugins["hapi-axios"];

    if (request.params.id && request.query.format === "wookiee") {
      url = `${request.params.type}/${request.params.id}/?format=wookiee`;
    } else if (!request.params.id && request.query.format === "wookiee") {
      url = `${request.params.type}/?format=wookiee`;
    } else if (!request.params.id && !request.query.format === "wookiee") {
      url = `${request.params.type}`;
    } else if (request.params.id && !request.query.format) {
      url = `${request.params.type}/${request.params.id}`;
    }

    const { data } = await swapi.get(url);

    return h.response(data);
  },
});

// Route qui renvoie les données de l'API pour une ressource globale
// Ex: http://localhost:8000/api/list/people/?page=1 qui renvoie tous les personnages
// (Attention: Bien ajouter le /list après le /api)
server.route({
  method: "GET",
  path: "/api/list/{type}/{page?}",
  handler: async (request, h) => {
    let url;
    const { swapi } = request.server.plugins["hapi-axios"];

    if (request.params.type && request.query.format === "wookiee") {
      url = `${request.params.type}/?page=${request.query.page}&format=wookiee`;
    } else {
      url = `${request.params.type}/?page=${request.query.page}`;
    }

    const { data } = await swapi.get(url);

    return h.response(data);
  },
});

// Config du module hapi-axios qui permet d'effectuer des requêtes depuis le serveur
async function hapiAxiosConfig() {
  try {
    await server.register({
      plugin: HapiAxios,
      options: {
        instances: [
          {
            name: "swapi",
            axios: {
              baseURL: "https://swapi.dev/api/",
            },
          },
        ],
      },
    });
  } catch (err) {
    console.log(err);
  }
}

// Fonction qui démarre le serveur, et règle les souci de CORS en acceptant les requêtes qui viennent du client avec le package hapi-cors
async function start() {
  try {
    await server.register({
      plugin: require("hapi-cors"),
      options: {
        origins: ["http://localhost:3000"],
      },
    });

    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(`Le serveur tourne sur le port ${server.info.uri}`);
}

// Exécution des fonctions start et hapiAxiosConfig
start();
hapiAxiosConfig();
