const {ApolloServer} = require('apollo-server')
var photos = []

const typeDefs = `
type Query {
totalPhotos: Int!
}

type Mutation {
postPhoto(name: String! description: String): Boolean!
}

`

const resolvers = {
    Query: {
        totalPhotos: () => {
            console.log('This is Query');
            return 44}
    },
    Mutation:{
        postPhoto(parent, args) {
            photos.push(args)
            return true
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server
    .listen()
    .then(({url}) => console.log(`GraphQL Service running on ${url}`))

