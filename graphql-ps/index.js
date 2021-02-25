const {ApolloServer, gql} = require('apollo-server')
const SessionAPI = require('./datasources/sessions');
const typeDefs = gql`
 type Session{
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
      @deprecated(
        reason: "Too many sessions do not fit into a single track, we will be migrating to a tags based system in the future..."
      )
    level: String
 }
 
 type Query{
 sessions: [Session]
 }
`;

const resolvers = {
    Query: {
        sessions: (parent, args, {dataSources}, info) => {
            return dataSources.sessionAPI.getSessions();
        }
    }
}

const dataSources = () => ({
    sessionAPI: new SessionAPI()
})

const server = new ApolloServer({typeDefs, resolvers, dataSources});

server.listen({port: process.env.PORT || 4000})
    .then(({url}) => {
        console.log(`graphQl server running at ${url}`);
    })
