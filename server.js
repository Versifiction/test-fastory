const Hapi = require("hapi");

// Create a server with a host and port
const server = Hapi.server({
  host: "localhost",
  port: 8000,
});

// Add the route
server.route({
  method: "GET",
  path: "/",
  handler: (request, h) => {
    return "hello world";
  },
});

// Start the server
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
