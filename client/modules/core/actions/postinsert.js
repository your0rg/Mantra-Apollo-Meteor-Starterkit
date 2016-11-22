// the action of creating a post
export default{
	// calling the apolloClient and gql
	createPost({apolloClient, gql}, {content}) {
		const mutation = gql `
			mutation creatingpost(
				$content: String!,
			) {
				createpost(content: $content)
			}
		`;

		apolloClient.mutate({
			mutation,
			// the variable to be inserted to the collection (Posts)
			variables: { content },
		}).then(({ data, errors }) => {
			if (errors) {
				errors.forEach((error) => {
					console.log(error.message);
				});
			}
			// if data is inserted
			if (data.createpost) {
				console.log("success");
			}
		}).catch((error) => {
			console.log(error.message);
		});
	},

}
