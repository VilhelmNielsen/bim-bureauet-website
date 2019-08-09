import { Link } from 'gatsby'
import React from 'react'

import Logo from './logo.svg'

const Header = ({ siteTitle = '' }) => (
  <header
    css={{
      background: '#FAFAFA',
      color: 'black',
    }}
  >
    <div
      css={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 css={{ margin: 0 }}>
        <Link to="/" title={siteTitle}>
          <img src={Logo} alt="BIM Bureauets logo" width={149} />
        </Link>
      </h1>
      <nav>
        <Link to="/">Forside</Link>
        <Link to="/kontakt-os">Kontakt os</Link>
      </nav>
    </div>
  </header>
)

export default Header
