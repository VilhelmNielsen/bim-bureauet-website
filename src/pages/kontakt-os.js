import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const formElements = {
  navn: {},
  email: {},
}

const ContactPage = () => (
  <Layout>
    <SEO title="Kontakt os" />
    <h1>Kontakt os</h1>
    <form onSubmit={event => event.preventDefault()} netlify>
      {Object.keys(formElements).map(key => (
        <label>
          {key}:
          <input type="text" name={key} required />
        </label>
      ))}
      <label>
        Din besked:
        <textarea name="besked" cols="30" rows="10"></textarea>
      </label>
      <button>Send</button>
    </form>
  </Layout>
)

export default ContactPage
