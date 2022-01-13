import { FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";

declare module "fastify" {
  interface FastifyInstance {
    logToMyCustomServer: (message: string) => Promise<void>;
  }
}

const myLogger: FastifyPluginAsync = async (fastify) => {
  fastify.decorate("logToMyCustomServer", async (message: string) => {
    console.log("[MY_LOGGER]", message);
  });
};

export default fp(myLogger);
