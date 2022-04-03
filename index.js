import {createServer} from "@graphql-yoga/node";
import resolvers from "./graphql/resolvers.js";
import * as fs from "fs";
const typeDefs = fs.readFileSync('./graphql/schema.graphql','utf8');

const server = createServer({
    schema: {
        typeDefs,
        resolvers
    },
})
// Start the server and explore http://localhost:4000/graphql
server.start()