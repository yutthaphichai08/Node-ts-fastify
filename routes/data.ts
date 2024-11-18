import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

interface PostData {
  data: string;
}

export default async function (server: FastifyInstance) {
  server.post(
    "/api/data",
    async (request: FastifyRequest<{ Body: PostData }>, reply: FastifyReply) => {
      const { data } = request.body;
      return { receivedData: data };
    }
  );
}
