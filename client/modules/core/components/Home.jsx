import React from 'react';
// the formsubmit container
import Formsubmit from '../containers/formsubmitcontainer.js';

//if there are posts ==> display them..
// if not Display there are no posts
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
    {/* the const function that displays the posts */}
		{renderPosts(posts)}
	</div>
)

export default Home;
