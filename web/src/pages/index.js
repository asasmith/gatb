import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import Layout from '../components/layout'
import UContentContainer from '../components/container'
import Statistics from '../components/statistics'

export default function IndexPage ({data}) {
  const {sanityPage: {
    heroTitle,
    heroBody,
    headerImg,
    heroImg,
  },
  allGirls,
  stats,
  } = data

  return (
    <Layout>
      <SEO title='Home' />
      <UContentContainer>
        <Img fluid={headerImg.asset.fluid} />
      </UContentContainer>
      <h1>{heroTitle}</h1>
      <p>{heroBody}</p>
      <UContentContainer>
        <Img fluid={heroImg.asset.fluid} />
      </UContentContainer>
      <Statistics stats={stats} />
      <section>
        <ul>
          {allGirls.edges.map(item => {
            const {id, img, name, about, url} = item.node
            return (
              <ListItem key={id}>
                <Figure>
                  <Img fluid={img.asset.fluid} />
                </Figure>
                <ContentContainer>
                  <Heading>meet {name}</Heading>
                  <p>{about}</p>
                </ContentContainer>
                <CTAContainer>
                  <a href={url} target='_blank'>sponsor {name}</a>
                </CTAContainer>
              </ListItem>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

const ListItem = styled.li`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
`

const Figure = styled.figure`
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 20rem;
`

const Heading = styled.p`
  text-transform: capitalize;
`

const CTAContainer = styled.div`
  align-items: center;
  display: flex;

  a {
    border: 1px solid #000;
    color: #000;
    padding: 1.5rem 3rem;
    margin: 3rem 0;
    text-decoration: none;
    text-transform: capitalize;
  }
`

export const query = graphql`
  query IndexQuery {
      sanityPage(title: {regex: "/index/i"}) {
      heroTitle
      heroBody
      headerImg {
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
      heroImg {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }

    allGirls: allSanityPerson {
      edges {
        node {
          name
          about
          url
          id
          img {
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }

    stats: allSanityStatistics {
      edges {
        node {
          statistic
          id
          info
        }
      }
    }
  }
`
