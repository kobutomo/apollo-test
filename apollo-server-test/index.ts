import { ApolloServer } from "apollo-server";
import fs from "fs";
import path from "path";
import { Book, Resolvers } from "./gen/graphql-resolver-types";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = fs
  .readFileSync(path.join(__dirname, "../graphql/schema.graphql"))
  .toString();

const books: Book[] = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

const resolvers: Resolvers = {
  Query: {
    books: () => books
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
