import path from "path";
import fastify, { FastifyServerOptions } from "fastify";
import fastifyAutoload from "fastify-autoload";

function buildServer(options: FastifyServerOptions = {}) {
  const server = fastify(options);

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

  return server;
}

export default buildServer;
