const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServerPluginLandingPageLocalDefault } = require('@apollo/server/plugin/landingPage/default')
const { loadFiles } = require('@graphql-tools/load-files')

const resolvers = {
    Query: {
        hello: () => null,
        getPerson: (_, args) => `My name´s ${args.name}, I´m ${args.name} old`,
        getInt: (_, args) => args.age,
        getFloat: () => 3.14,
        getString: (_, args) => args.name,
        getBoolean: () => true,
        getID: () => 10,
        getNumbers: (_, args) => args.numbers,
        getNames: (_, args) => args.names,
        getProduct: (_, args) => {
            return {
                id: '123',
                name: "PS5",
                price: 5499.99,
                description: "Videogame console of Sony",
                image: "https://my-image.png",
                createdAt: new Date().toISOString()
            }
        },
        getBooks: (_, args) => {
            // Aquí puedes crear un array con datos de prueba de libros
            const books = [
                { id: '1', name: 'El principito', description: 'Libro infantil', creation: '1943-04-06' },
                { id: '2', name: 'Cien años de soledad', description: 'Novela', creation: '1967-05-30' },
                { id: '3', name: 'La isla del tesoro', description: 'Novela de aventuras', creation: '1883-11-14' }
            ];

            // Si se especificó un argumento 'id', filtramos los libros por esa ID
            if (args.id) {
                return books.filter(book => book.id === args.id);
            }

            // Si se especificó un argumento 'name', filtramos los libros por ese nombre
            if (args.name) {
                return books.filter(book => book.name.includes(args.name));
            }

            // Si no se especificaron argumentos, devolvemos todos los libros
            return books;
        },

        getAuthor: (_, args) => {
            // Aquí puedes crear un objeto con datos de prueba de autor
            const author = {
                id: '1',
                name: 'Antoine de Saint-Exupéry'
            };

            // Aquí puedes crear un array con datos de prueba de libros del autor
            const books = [
                { id: '1', name: 'El principito', description: 'Libro infantil', creation: '1943-04-06' },
                { id: '2', name: 'Cien años de soledad', description: 'Novela', creation: '1967-05-30' },
                { id: '3', name: 'La isla del tesoro', description: 'Novela de aventuras', creation: '1883-11-14' }
            ];

            // Agregamos los libros al objeto 'author'
            author.books = books;

            return author;
        }
    }
}

const useGraphql = async (app) => {
    const server = new ApolloServer({
        typeDefs: await loadFiles('./src/**/*.graphql'),
        resolvers,
        plugins: [
            // Install a landing page plugin based on NODE_ENV
            process.env.NODE_ENV === 'production'
                ? ApolloServerPluginLandingPageLocalDefault({
                    graphRef: 'API-graphql@graph-variant',
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