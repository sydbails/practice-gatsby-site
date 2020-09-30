exports.githubApiQuery = `
query($github_login: String!) {
    user(login: $github_login) {
      name
      starredRepositories {
        nodes {
          name
          description
          url
          openGraphImageUrl
          readme: object(expression: "master:README.md") {
            ... on Blob {
              text
            }
          }
        }
      }
    }
  }
`
