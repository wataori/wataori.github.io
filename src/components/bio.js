/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            instagram
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <p>
          <strong>{author.name}</strong>
          <br></br>
          {author?.summary || null}
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`} target="_blank" rel="noreferrer">
            Twitter
          </a>
          { ` / ` }
          <a href={`https://instagram.com/${social?.instagram || ``}`} target="_blank" rel="noreferrer">
            Instagram
          </a>
          { ` / ` }
          <a href={`https://github.com/${social?.github || ``}`} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
