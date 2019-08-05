import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO />
    <div>
      <h1>Har din virksomhed brug for eksperthjælp til jeres BIM-projekt?</h1>
      <p>
        Jeg hedder Lisbeth, og jeg har startet BIM Bureauet efter 10 år som
        underviser og support i BIM værktøjer, som Autodesk Revit, og +30 års
        erfaring med AutoCAD.
      </p>
      <p>
        Hos BIM Bureauet tilbyder vi On-Site hjælp til Autodesk produkter,
        oprettelse af Revit Templates og Intelligente Revit Families, samt hjælp
        til opstart af BIM projekter.
      </p>
      <p css={{ fontWeight: '500' }}>
        Lad os sammen finde ud af, hvordan BIM Bureauet kan hjælpe med dit
        projekt.
      </p>
      <Link
        css={{
          background: 'hsl(43, 92%, 64%)',
          color: 'hsl(43, 92%, 0%)',
          padding: '10px 54px',
          textDecoration: 'none',
          boxShadow: '2px 2px 2px hsla(43, 92%, 10%, 25%)',
        }}
      >
        Kontakt os
      </Link>
    </div>
  </Layout>
)

export default IndexPage
