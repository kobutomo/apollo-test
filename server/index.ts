import { ApolloServer, gql } from "apollo-server";
import fs from "fs";
import path from "path";
import {
  Book,
  Resolvers,
  QueryResolvers,
  BookResolvers
} from "./gen/graphql-resolver-types";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = fs
  .readFileSync(path.join(__dirname, "./schema.graphql"))
  .toString();

const books: Book[] = [
  {
    title: "title1",
    author: "J.K. Rowling"
  },
  {
    title: "title2",
    author: "Michael Crichton"
  }
];

const Query: QueryResolvers<Book> = {
  books: () => books,
  book: (_parent, args, _context, _info) => {
    const book = books.find(book => {
      return book.title === args.title;
    });

    return book ?? books[0];
  }
};

const resolvers: Resolvers<Book> = {
  Query
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: gql`
    ${typeDefs}
  `,
  resolvers: resolvers as any,
  playground: true,
  introspection: true
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
