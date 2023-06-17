import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <div className='container mt-5' id="about">
      <h1 className='text-center fw-bold text-danger mt-5'> About me </h1>
     <div className='row mt-5 d-flex justify-content-center' >
      <div className='width'>
      <img src="https://res.cloudinary.com/dmeta8flh/image/upload/v1687032263/wio6n2fgk1ceavvu94us.png" alt="image loading" className='img-fluid rounded-circle'/>
      </div>
      <div className=' mt-5 pt-5 width'>
        <p><span className='text-danger fw-bold '> Hello my name is Roshan karki.</span> <p className='text-secondary fw-bold'> Iam a passonate Backend  developer with Nodejs,Epressjs and Mongodb from Nepal</p>.Iam a currently studying computer engineering in IOE PUlCHOWK CAMPUS. iam a fast learning guy. i love exploring the new technology, working on a group and implementing all my learning with the projects. i have been coding since 1 and half year.  </p>
      </div>
    </div>
    </div>
  )
}

export default About

