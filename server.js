const Hapi = require("hapi");
const HapiAxios = require("hapi-axios");

const server = Hapi.server({
  host: "localhost",
  port: 8000,
});

server.route({
  method: "GET",
  path: "/",
  handler: (request, reply) => {
    return "Hello World";
  },
});

server.route({
  method: "GET",
  path: "/api/{type}/{id}",
  handler: async (request, h) => {
    const { swapi } = request.server.plugins["hapi-axios"];
    const { data } = await swapi.get(
      `${request.params.type}/${request.params.id}`
    );

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
              // you can use any axios config here. https://github.com/axios/axios#creating-an-instance
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
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(`Le serveur tourne sur le port ${server.info.uri}`);
}

start();
hapiAxiosConfig();
