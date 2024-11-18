import { FastifyInstance } from "fastify";

export default async function (server: FastifyInstance) {
  server.get("/", async (req, reply) => {
    return "Hello World";
  });
}
