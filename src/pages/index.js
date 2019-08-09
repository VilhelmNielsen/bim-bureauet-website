import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

const Section = ({ css, ...props }) => (
  <section
    css={{
      padding: `1.0875rem 1.45rem`,
      margin: `0 auto`,
      maxWidth: 1024,
    }}
    {...props}
  />
)

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO />
      <BackgroundImage
        fluid={data.bgImg.childImageSharp.fluid}
        backgroundColor="#1765B2"
        css={{
          position: 'relative',
          width: '100vw',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          color: 'white',
        }}
      >
        <Section>
          <div css={{ display: 'flex' }}>
            <div>
              <h1>
                Har din virksomhed brug for eksperthjælp til jeres BIM-projekt?
              </h1>
              <p>
                Jeg hedder Lisbeth, og jeg har startet BIM Bureauet efter 10 år
                som underviser og support i BIM værktøjer, som Autodesk Revit,
                og +30 års erfaring med AutoCAD.
              </p>
              <p>
                Hos BIM Bureauet tilbyder vi On-Site hjælp til Autodesk
                produkter, oprettelse af Revit Templates og Intelligente Revit
                Families, samt hjælp til opstart af BIM projekter.
              </p>
              <p css={{ fontWeight: '500' }}>
                Lad os sammen finde ud af, hvordan BIM Bureauet kan hjælpe med
                dit projekt.
              </p>
              <Link
                to="/kontakt-os"
                css={{
                  background: 'hsl(43, 92%, 64%)',
                  color: 'hsl(43, 92%, 0%)',
                  padding: '10px 54px',
                  textDecoration: 'none',
                  boxShadow: '2px 2px 2px hsla(43, 92%, 10%, 25%)',
                  display: 'inline-block',
                }}
              >
                Kontakt os
              </Link>
            </div>
            <Img fixed={data.lisbethImg.childImageSharp.fixed} />
          </div>
        </Section>
      </BackgroundImage>
    </Layout>
  )
}

export const query = graphql`
  query IndexPage {
    bgImg: file(base: { eq: "bogdan-karlenko-cNcX6PPjEm8-unsplash.jpg" }) {
      childImageSharp {
        fluid(duotone: { highlight: "#1765B2", shadow: "#11477d" }) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lisbethImg: file(base: { eq: "lisbeth-removebg.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
