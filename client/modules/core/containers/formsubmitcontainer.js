import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Formsubmit from '../components/Formsubmit.jsx';


export const composer = ({context}, onData) => {
  const {} = context();

    onData(null, {});

};

export const depsMapper = (context, actions) => ({
  createPost: actions.postinsert.createPost,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Formsubmit);
