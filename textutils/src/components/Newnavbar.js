import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Newnavbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Infinite Scrolling</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode=='light'?'dark':'light'}`}>
  <input className="form-check-input"onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label me-4" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      <form className="d-flex">
      <Link class="btn btn-primary mx-2" to="/login" role="button">Login</Link>
      <Link class="btn btn-primary" to="/signup" role="button">SignUp</Link>
      </form>
    </div>
  </div>
</nav>
  )
}

Newnavbar.propTypes = {title: PropTypes.string.isRequired ,
                     about : PropTypes.string.isRequired
                     
                    }


Newnavbar.defaultTypes = {title: 'Set title here' ,
                      about : 'About text here'
                    }    
                    
                  ;        
