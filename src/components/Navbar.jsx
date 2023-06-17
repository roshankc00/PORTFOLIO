import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <img src="https://sahyogchehak.org.in/wp-content/uploads/2017/02/final-roshan-logo-3.jpg" className='image-logo' alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
        
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active ms-5 fs-5 fw-bold" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-3 fs-5 fw-bold" href="#about">About</a>
        </li>
        <li className="nav-item ms-3 fs-5 fw-bold">
          <a className="nav-link active" href="#project">Project</a>
        </li>
        <li className="nav-item ms-3 fs-5 fw-bold">
          <a  className="nav-link active" href="#footer">Find me</a>
        </li>
      
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar