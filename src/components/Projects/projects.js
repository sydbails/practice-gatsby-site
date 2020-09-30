import React from "react"
import { useStaticQuery } from "gatsby"
import Card from "../Card/card"

export default function Projects() {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allGithubData {
          edges {
            node {
              id
              data {
                user {
                  starredRepositories {
                    nodes {
                      description
                      name
                      openGraphImageUrl
                      readme {
                        text
                      }
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const repos =
    data.allGithubData.edges[0].node.data.user.starredRepositories.nodes
  return (
    <>
      {repos.map(repo => {
        return (
          <Card
            image={repo.openGraphImageUrl}
            title={repo.name}
            description={repo.readme.text}
          />
        )
      })}
    </>
  )
}
