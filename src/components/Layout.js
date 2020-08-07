import React from 'react'
import PropTypes from 'prop-types'

import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <>
      <Navbar />

      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

Layout.defaultProps = {
  children: <></>,
}

export default Layout
