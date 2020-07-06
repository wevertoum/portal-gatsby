import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './header.scss'

const itensMenu = ['item1',
  'item2',
  'item3',
  'item4',
  'item5']

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      background: '#231f20',
      marginBottom: '1.45rem',
      zIndex: 5,
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >

      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'var(--light)',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      {
        itensMenu.map((e) => (
          <h1 key={e} className="menu-navigation">
            <Link
              to="/"
              style={{
                color: 'var(--light)',
                textDecoration: 'none',
              }}
            >
              {e}
            </Link>
          </h1>
        ))
      }
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
