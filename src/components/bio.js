/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
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
            facebook
            github
            instagram
            twitter
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
          <Link to="/about">
            <strong>{author.name}</strong>
          </Link>
          <br></br>
          {author?.summary || null}
          {` `}
          <a href={`https://www.facebook.com/${social?.facebook || ``}`} target="_blank" rel="noreferrer">
            Facebook
          </a>
          { ` / ` }
          <a href={`https://github.com/${social?.github || ``}`} target="_blank" rel="noreferrer">
            GitHub
          </a>
          { ` / ` }
          <a href={`https://instagram.com/${social?.instagram || ``}`} target="_blank" rel="noreferrer">
            Instagram
          </a>
          { ` / ` }
          <a href={`https://twitter.com/${social?.twitter || ``}`} target="_blank" rel="noreferrer">
            Twitter
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
