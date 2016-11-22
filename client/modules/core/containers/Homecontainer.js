import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Component from '../components/Home.jsx';

// the composer function
export const composer = ({ context }, onData) => {
  const { apolloClient, gql } = context();


  const queryObservable = apolloClient.watchQuery({
    query: gql`
      query getPosts($limit: Int!) {
        posts(limit: $limit) {
          _id
          content
        }
      }
    `,
    // the number of posts to be returned
    variables: {
      limit: 20,
    },
    // checking for every half a second
    pollInterval: 500,
  });

  queryObservable.subscribe({
    next: ({ data, errors }) => {
      if (errors) {
        errors.forEach((error) => {
          console.log(error.message);
        });
      }
      // if data is present then return the posts
      if (data.posts) {
        onData(null, { posts: data.posts });
      }
    },
    error: (error) => {
      // onData(null, {posts: []});
      console.log(error);
    }
  });
};


export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
