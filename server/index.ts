import express, { Application } from "express";
import { connectDB } from "./db";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphQL/typeDefs";
import { resolvers } from "./graphQL/resolvers";

const app: Application = express();
const PORT = 5000;

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
  await connectDB();
  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(
      `Server läuft auf http://localhost:${PORT}${server.graphqlPath}`
    );
  });
};

startServer().catch((err) => {
  console.error("Fehler beim Starten des Servers:", err);
});
