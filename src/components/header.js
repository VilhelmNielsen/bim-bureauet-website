import { Link } from 'gatsby'
import React from 'react'

import { ReactComponent as Logo } from './logo.svg'

const Header = ({ siteTitle = '' }) => (
  <header
    css={{
      background: '#FAFAFA',
      marginBottom: '1.45rem',
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
          <Logo width={149} height={39} css={{ maxWidth: '100%' }} />
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
