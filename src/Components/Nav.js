import React from 'react'

export default function Nav(props){
    return(
      <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">EDUCATION POINT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Service</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Book Online</a></li>
            <li><a className="dropdown-item" href="/">Portfolio</a></li>
            <li><a className="dropdown-item" href="/">File Share</a></li>
            <li><a className="dropdown-item" href="/">Members</a></li>
            <li><a className="dropdown-item" href="/">Program List</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <li id='Logiinnn' className="nav-item">
    <i class="fa-solid fa-user"></i>
          <a className="nav-link" href="/">Log In</a>
        </li>
  </div>
</nav>
      </div>
      
    )}