import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { NavLink } from "react-router-dom"

function NavigationBar() {
  return (
    <>
      <nav className="navigationBar navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" href="/">
            Home Page
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  2nd Nav Tap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  3rd Nav Tap
                </a>
              </li>
              {/* MAYBE ADD A DROP DOWN */}

              <li className="nav-item">
                <a href="/" className="nav-link disabled" aria-disabled="true">
                  Nothing to See Here
                </a>
              </li>
            </ul>
            {/* V V V V SEARCH  V V V V  */}

            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}

            {/* ^ ^ ^ ^ SEARCH  ^ ^ ^ ^  */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavigationBar
