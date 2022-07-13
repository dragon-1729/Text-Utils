import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div className="App">
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand" to="#">{props.tittle}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
        </div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className={`btn btn-${props.btnColor1}`} onClick={props.changeColor1}>{(props.btnColor1==='primary')?'GreenTheme':'BlueTheme'}</button>
          <button type="button" className={`btn btn-${props.btnColor2}`} onClick={props.changeColor2}>{(props.btnColor2==='primary')?'BlackTheme':'BlueTheme'}</button>
          <button type="button" className="btn btn-primary">Grey</button>
        </div>
        <div className={`form-check form-switch text-${(props.mode === 'dark') ? 'light' : 'dark'}`}>
          <input className="form-check-input " onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label " htmlFor="flexSwitchCheckDefault" >{props.modeText}</label>
        </div>

      </nav>
    </div>
  )
}

Navbar.prototype = {
  tittle: PropTypes.string,
  aboutText: PropTypes.string
}
Navbar.defaultProps = { tittle: "NavBar", aboutText: "About" }