import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const PORT = 4000;

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port: PORT }, () => {
    console.log(`Server ready at http://localhost:${PORT}`);
    console.log(`Server ready at http://localhost:${PORT}/graphql`);
  });
};

startServer();
