import React from 'react'
import PropTypes from 'prop-types'
import { Link} from "react-router-dom"

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    {/* <a className="navbar-brand" href="/">{props.title}</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
           {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutTxt}</Link>
        </li>
      </ul>
      {/* <div className='d-flex'>
             <div><button className="btn btn-primary mx-3"  onClick={()=>props.toggleMode("primary")} style={{height: "25px", width: "20px", cursor:"pointer"}}></button></div>
             <div><button className="btn btn-danger mx-3"  onClick={()=>props.toggleMode("danger")} style={{height: "25px", width: "20px", cursor:"pointer"}}></button></div>
             <div><button className="btn btn-success mx-3"  onClick={()=>props.toggleMode("success")} style={{height: "25px", width: "20px", cursor:"pointer"}}></button></div>
             <div><button className="btn btn-warning mx-3"  onClick={()=>props.toggleMode("warning")} style={{height: "25px", width: "20px", cursor:"pointer"}}></button></div>
      </div> */}
      <form className="d-flex">
        <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
  <input className="form-check-input"  onClick={()=>props.toggleMode()} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

// Navbar.propTypes = {
//     title: PropTypes.string,
//     aboutTxt: PropTypes.string
// }

// defaultProps is set when you not set the title and other thing
Navbar.defaultProps = {
  title: "Set Title",
  aboutTxt: "Set About"
}

//  when we use isRequired compulsory add title and other thing, when you not declare default value
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTxt: PropTypes.string.isRequired
}