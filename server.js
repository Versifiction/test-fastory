const Hapi = require("hapi");
const HapiAxios = require("hapi-axios");

const server = Hapi.server({
  host: "localhost",
  port: 8000,
});

server.route({
  method: "GET",
  path: "/",
  handler: (request, h) => {
    return "Hello World";
  },
});

server.route({
  method: "GET",
  path: "/api/{type}/{id}/{format?}",
  handler: async (request, h) => {
    let url;
    const { swapi } = request.server.plugins["hapi-axios"];

    if (request.query.format === "wookiee") {
      url = `${request.params.type}/${request.params.id}/?format=wookiee`;
    } else {
      url = `${request.params.type}/${request.params.id}`;
    }

    const { data } = await swapi.get(url);

    return h.response(data);
  },
});

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

start();
hapiAxiosConfig();
