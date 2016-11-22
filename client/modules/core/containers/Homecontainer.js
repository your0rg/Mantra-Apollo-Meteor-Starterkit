import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Component from '../components/Home.jsx';


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
    variables: {
      limit: 20,
    },
    pollInterval: 500,
  });

  queryObservable.subscribe({
    next: ({ data, errors }) => {
      if (errors) {
        errors.forEach((error) => {
          console.log(error.message);
        });
      }

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
