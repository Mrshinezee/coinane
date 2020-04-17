import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../styles/header.scss'

const HeaderLinks = props => (
<Link className={props.linkStyle} to={props.to}> {props.text}</Link>
)

const Header = ({ siteTitle }) => (
  <header className='headerContainer'>
    <div
      style={{
        margin: `10px`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <HeaderLinks to="/" linkStyle='headerTitle' text={siteTitle}/>
    </div>
    
    <nav className='headerNav'>
      <HeaderLinks to="/" linkStyle='headerLink' text='Advantages'/>
      <HeaderLinks to="/landing" linkStyle='headerLink' text='How to trade'/>
      <HeaderLinks to="/" linkStyle='headerLink' text='Funds withdrawal'/>
    </nav>
    <div className='buttonContainer'>
      <button className='headerButton'>
        LOG IN
      </button>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
