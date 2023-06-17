import React from 'react'
import styled from 'styled-components'
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div id='footer'>

    <Wrapper>
        <h1></h1>
        <h1> <span>For more project vist my github by above link </span> <br/> <EmailIcon/>078bct098.roshan@pcampus.edu.np</h1>
    </Wrapper>
    </div>
  )
}

export default Footer

const Wrapper=styled.div `
margin-top: 20px;
background-color: #f3f0ec;
h1{
    height: 100px;
    font-size: 18px;
    text-align: center;
}

`