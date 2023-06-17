import React,{useContext} from 'react'
import skillContext from '../context/project'
import ProjectCaed from './ProjectCaed'

const Project = () => {
    const {backendProjects}=useContext(skillContext)
    
  return (
    <div id='project'>

        <h1 className="text-center mt-5 text-danger"> Projects</h1>
    <div className='d-flex flex-wrap justify-content-center gap-2'>
        {
            backendProjects.map((el)=>{
               return  <ProjectCaed key={el.id} project={el}/>
            })

        }
    </div>
    </div>
  )
}

export default Project