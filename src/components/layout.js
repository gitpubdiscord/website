import React from "react"
import PropTypes from "prop-types"
import Div100vh from "react-div-100vh"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Div100vh>
        <main>{children}</main>
        <footer>Copyright © {new Date().getFullYear()} GitPub</footer>
      </Div100vh>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
