import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Header = () => {
    const [show, setshow] = useState(false)
  return (
    
    <>
    <Wrapper> 
        <Logo>Roshan karki
            </Logo> 
        <Navitems>
        <a to='#home' className='text-light'>Home</a>
            <a href='#about' className='text-light'>About</a>
            <a to='#project' className='text-light'>project</a>
            <a to='#footer' className='text-light'>Findme</a>
        </Navitems>
        {!show&&
        <button onClick={()=>setshow(!show)}>
            <MenuIcon/>
        </button>
}

         </Wrapper>
         {show &&
        <Sidebar>
            <button  onClick={()=>setshow(!show)}>
            <CloseIcon/>
            </button>
           <a to='#home'>Home</a>
            <a to='#about'>About</a>
            <a to='#project'>Skills</a>
            <a to='#footer'>Findme</a>
            

        </Sidebar>
        }
    
    
    
    </>
  )
}

export default Header




const Wrapper=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: black;
padding:0 50px;
position: relative;
overflow-x: hidden;

button{
  opacity: 0;
  @media (max-width:700px) {
    opacity: 1;
    
  }
}


`
const Logo=styled.p`
font-size: 40px;
color: red;
background-color: black;
font-family: 'Roboto Mono', monospace;

`

const Navitems=styled.nav`
display: flex;
gap: 30px;
@media (max-width:700px) {
  display: none;
  
}

a{
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: white;
    position: relative;
    font-size: 20px;
    cursor: pointer;
    
    &::after{
      content: "";
      position: absolute;
      bottom: -8px;
      left: 0;
      height: 2px;
      width: 50%;
      background-color: white;
      opacity: 0;
      transform: scaleX(0);
      transition: transform 0.5s;
      
      
    }
    &:hover::after{
      opacity: 1;
      transform: scaleX(0.8);
    }
  }
  `

const Sidebar=styled.div`
display: flex;
flex-direction: column;
gap: 20px;
background-color: gray;
width: 50%;
position: absolute;
top: 20px;
/* right: -103px; */
right: 0;
z-index: 100;
justify-content: center;
align-items: center;
height: 900px;
overflow-x: hidden;

button{
  width: 40px;
  height: 40px;
  margin-bottom:20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position:absolute ;
  top: 10px;
  right: 20px;
}

a{
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 20px;
  padding: 40px;
  
}

`