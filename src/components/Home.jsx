import React,{useContext}from 'react'
import styled from 'styled-components'
import Header from './Header'
import skillContext from '../context/project'

const Home = () => {
 
  return (
    <div id='home'>

    <Wrapper>
     <Gif src='https://camo.githubusercontent.com/cae12fddd9d6982901d82580bdf321d81fb299141098ca1c2d4891870827bf17/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966'>
     </Gif>
     <Buttons>

     <a href='public/mycv.pdf' download className='btn btn-outline-primary btn-lg' target="_blank"> My Resume </a>
     <a href='https://github.com/roshankc00?tab=repositories' className='btn btn-outline-primary btn-lg' target="_blank"> my  Github </a>
     </Buttons>

    </Wrapper>
    </div>
  )
}

export default Home

const Wrapper=styled.div`
margin-top:100px ;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Gif=styled.img`
width: 50%;
    
`

const Buttons=styled.div`
        margin-top: 20px;
     display: flex;
    justify-content: center;
    gap: 10px;
    button{
        border: none;
        height: 50px;
        font-size: 20px;
        padding: 10px;
        border-radius: 20px;
        font-weight: 600;
        width: 150px;
        box-shadow:10px 10px 10px rgba(0,0,0,0.4);
        &:hover{
            transform: scale(1.04);
            cursor: pointer;
        }
    }
    

`