import React from 'react'
import ProjectContext from './project'
const ProjectState = (props) => {
    const backendProjects=[
      
        {
            id:1,
          name:"Ecommerce Backend",
          description:'This is the ecommerce backend with the filtering shorting limiting the product functionality and user can signUp, update,forgetpassword and with many more functionality (payment gateway remaining) ',
          madeBy:['Nodejs','Expressjs','Mongodb'],
          image:'public/ecommerce.jpg',
          sourceCode:'https://github.com/roshankc00/E-commerce-Backend'
        },
        {
          id:2,
          name:"social media Backend",
          description:'This is the social backend where the user can simply like dislike comment create post see other profile block unblock follow each other ',
          madeBy:['Nodejs','Expressjs','Mongodb'],
          image:'public/socialmedia.png',
          sourceCode:'https://github.com/roshankc00/social-media-platform'
        },        
        {
          id:5,
          name:"Vlog ",
          description:'This is the blog application where user can share his or her day with the images and one must be loged in inorder to create the post and we can comment on the post',
          madeBy:['Nodejs','Expressjs','Mongodb','ejs'],
          image:'public/blog.jpg',
          sourceCode:'https://github.com/roshankc00/veloog--share-your-day'
    
        },
    ]
     
  return (
    <ProjectContext.Provider value={{backendProjects}}>
        {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectState