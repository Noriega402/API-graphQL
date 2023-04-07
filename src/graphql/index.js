const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServerPluginLandingPageLocalDefault } = require('@apollo/server/plugin/landingPage/default')

const typeDefs = `
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello World'
    }
}

const useGraphql = async (app) => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [
            // Install a landing page plugin based on NODE_ENV
            process.env.NODE_ENV === 'production'
                ? ApolloServerPluginLandingPageLocalDefault({
                    graphRef: 'curso-node-graphql@graph-variant',
                    footer: false,
                })
                : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
        ],
    });
    await server.start();
    // server.applyMiddleware({ app });
    app.use(
        '/graphql',
        expressMiddleware(server, {
            context: async ({ req }) => ({ token: req.headers.token }),
        }),
    );
};

module.exports = useGraphql;