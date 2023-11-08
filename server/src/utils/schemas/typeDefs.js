const gql = String.raw

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    matchups: [Matchup]!
  }

  type Matchup {
    _id: ID
    matchupText: String
    matchupAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    matchups(username: String): [Thought]
    matchup(matchupId: ID!): Thought
  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;
