export default{
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
			variables: { content },
		}).then(({ data, errors }) => {
			if (errors) {
				errors.forEach((error) => {
					console.log(error.message);
				});
			}

			if (data.createpost) {
				console.log("success");
			}
		}).catch((error) => {
			console.log(error.message);
		});
	},

}
