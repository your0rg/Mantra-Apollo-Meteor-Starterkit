import React from 'react';

import Formsubmit from '../containers/formsubmitcontainer.js';

const renderPosts = (posts) => {
  if (posts && posts.length > 0) {
    return (
			<div>
				{posts.map(post => (
						<li key={post._id}>{post.content}</li>
 				))}
			</div>
      );
  } else {
    return (

      <li>There are no posts</li>
    )
  }
};

const Home = ({posts}) => (

	<div>
		<h3 style={{textAlign: 'center'}}>Mantra Meteor Apollo Starterkit</h3>
		<Formsubmit />
		<div style={{height: 100}}/>
		{renderPosts(posts)}
	</div>
)

export default Home;
