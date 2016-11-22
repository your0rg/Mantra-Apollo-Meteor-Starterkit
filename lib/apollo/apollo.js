import { Posts } from '../collections.js';

// the typedefs
export const typeDefs = [`

  type Post {
    _id: String
    content: String
  }

  type Query {
    posts(limit: Int!): [Post]
  }

  type Mutation {
    createpost(content: String!): Boolean
  }

  schema {
    query: Query
    mutation: Mutation

  }

  `];

  // resolvers
  export const resolvers = {
    Query: {
      // returns items int the post collection
      async posts(root, {limit}) {
        return Posts.find({}, { limit }).fetch();
      }
      // another query
    },
    Mutation: {
      // mutation for  new post item
      async createpost(root, { content }) {

        const post = {content};
        Posts.insert(post);
      },
    },

  }
