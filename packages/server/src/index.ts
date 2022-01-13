import fastify from "fastify";
import fastifyAutoload from "fastify-autoload";
import path from "path";

const server = fastify({ logger: true });

// Global plugins with shared functionality.
server.register(fastifyAutoload, {
  dir: path.join(__dirname, "plugins"),
  maxDepth: 1,
  dirNameRoutePrefix: false,
});
// Scoped features containing e.g., routes.
server.register(fastifyAutoload, {
  dir: path.join(__dirname, "features"),
  maxDepth: 1,
});

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
