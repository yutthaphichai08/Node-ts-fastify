import fastify from "fastify";
import indexRoute from "./routes/index";
import dataRoute from "./routes/data";

const server = fastify();

// Register routes
server.register(indexRoute);
server.register(dataRoute);

// Start the server
const start = async () => {
  try {
    await server.listen({ port: 3000 });
    console.log("Server is running on http://localhost:3000");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
