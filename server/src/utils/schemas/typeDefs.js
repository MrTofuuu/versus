const gql = String.raw

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    # matchups: [Matchup]!
  }

  # type Matchup {
  #   _id: ID
  #   matchupText: String
  #   matchupAuthor: String
  #   createdAt: String
  #   characters:[Character]
  #   comments: [Comment]!
  # }

  type Character{
    _id:ID
    name: String
    bio: String

  }
  # type Comment {
  #   _id: ID
  #   commentText: String
  #   commentAuthor: String
  #   createdAt: String
  # }

  # type Auth {
  #   token: ID!
  #   user: User
  # }

  type Query {
    users: [User]
    user(username: String!): User
    characters: [Character]
    character: Character
    # matchups(username: String): [Character]
    # matchup(matchupId: ID!): Character
  }

  # type Mutation {
  #   addUser(
  #     username: String!
  #     email: String!
  #     password: String!
  #   ): Auth
  #   addMatchup(characters: [ID]!): Matchup
  #   updateUser(
  #     username: String
  #     email: String
  #     password: String
  #   ): User
  #   # updateCharacter(_id: ID!, quantity: Int!): Character
  #   login(email: String!, password: String!): Auth
  # }
`;

module.exports = typeDefs;
