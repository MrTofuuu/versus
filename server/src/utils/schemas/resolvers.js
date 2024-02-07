// const {User, Character, Matchup } = require('../db/models');
// some sort of Auth probably goes here
const { User, Character, Matchup } = require('../db/models');
const { signToken, AuthenticationError } = require('../auth');

const resolvers = {
  Query: {
    // categories: async () => Matchup.find(),
    characters: async (parent, { character, name }) => {
      const dummyReponse = { name: 'characters resolver' };
      return dummyReponse;
      // TODO: replace with real logic
      //   const params = {};

      //   if (character) {
      //     params.character = character;
      //   }

      //   if (name) {
      //     params.name = {
      //       $regex: name,
      //     };
      //   }

      //   return Character.find(params).populate('character');
    },
    character: async (parent, { id }) => {
      name: 'single character resolver';
    },
    //   Character.findById(id).populate('character'),

    user: async (parent, args, context) => {
      const dummyReponse = { name: 'user resolver' };
      return dummyReponse;
      // TODO: replace with real logic
      //   if (context.user) {
      //     const user = await User.findById(context.user.id).populate({
      //       path: 'matchup.characters',
      //       populate: 'character',
      //     });

      //     user.matchup.sort((a, b) => b.purchaseDate - a.purchaseDate);

      //     return user;
      //   }

      //   throw AuthenticationError;
    },
    // matchup: async (parent, { id }, context) => {
    //   const dummyReponse = { name: 'matchup resolver' };
    //   return dummyReponse;
    //   // TODO: replace with real logic
    //   //   if (context.user) {
    //   //     const user = await User.findById(context.user.id).populate({
    //   //       path: 'matchup.characters',
    //   //       populate: 'character',
    //   //     });

    //   //     return user.matchup.id(id);
    //   //   }

    //   //   throw AuthenticationError;
    // },
  },
//   Mutation: {
//     addUser: async (parent, args) => {
//       const dummyReponse = { name: 'addUser Mutation' };
//       return dummyReponse;
//       // TODO: replace with real logic
//       //   const user = await User.create(args);
//       //   const token = signToken(user);

//       //   return { token, user };
//     },
//     addMatchup: async (parent, { characters }, context) => {
//       const dummyReponse = { name: 'addMatchup Mutation' };
//       return dummyReponse;
//       // TODO: replace with real logic
//       //     console.log(context);
//       //   if (context.user) {
//       //     const matchup = new Matchup({ characters });

//       //     await User.findByIdAndUpdate(context.user.id, {
//       //       $push: { matchup: matchup },
//       //     });

//       //     return matchup;
//       //   }

//       //   throw AuthenticationError;
//     },
//     updateUser: async (parent, args, context) => {
//       const dummyReponse = { name: 'updateUser Mutation' };
//       return dummyReponse;
//       // TODO: replace with real logic
//       //     if (context.user) {
//       //     return User.findByIdAndUpdate(context.user.id, args, {
//       //       new: true,
//       //     });
//       //   }

//       //   throw AuthenticationError;
//     },
//     updateCharacter: async (parent, { id, quantity }) => {
//       const dummyReponse = { name: 'updateCharacter Mutation' };
//       return dummyReponse;
//       // TODO: replace with real logic
//       //     const decrement = Math.abs(quantity) * -1;

//       //   return Character.findByIdAndUpdate(
//       //     id,
//       //     { $inc: { quantity: decrement } },
//       //     { new: true }
//       //   );
//     },
//     login: async (parent, { email, password }) => {
//       const dummyReponse = { name: 'login Mutation' };
//       return dummyReponse;
//       // TODO: replace with real logic
//       //     const user = await User.findOne({ email });

//       //   if (!user) {
//       //     throw AuthenticationError;
//       //   }

//       //   const correctPw = await user.isCorrectPassword(password);

//       //   if (!correctPw) {
//       //     throw AuthenticationError;
//       //   }

//       //   const token = signToken(user);

//       //   return { token, user };
//     },
//   },
};

module.exports = resolvers;
