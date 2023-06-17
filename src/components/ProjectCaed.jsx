import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProjectCaed = (props) => {
  return (
    <>
    <Card>
        <img src={props.project.image} alt="" />
        <h1> {props.project.name}</h1>
        <p>{props.project.description}</p>
        <div className="">

        {
            props.project.madeBy.map((el)=>{
                return <button className='btn btn-primary ms-2 mt-2'>{el}</button>
            })
        }
        </div>
        <a href={props.project.sourceCode} target="_blank" className='btn btn-outline-success mt-4 text-center'>View Source code  <ArrowForwardIcon/> </a>
        
    </Card>

    
    </>
  )
}

export default ProjectCaed

const Card=styled.div`
margin-top: 20px;
margin: 20px;
width: 300px;
border-radius: 10px;
padding: 2px;
background-color: #f3f0ec;
transition: transform 0.4s;
img{
    width: 300px;
    height:200px;

}
p{ 
    padding: 10px;

}
h1{
    font-size: 20px;
}
&:hover{
    transform: scale(1.04);
}
    
`