
import './App.css'
import Home from './components/Home'
import ProjectCaed from './components/ProjectCaed'
import 'bootstrap/dist/css/bootstrap.min.css'

import ProjectState from './context/Project.State'
import Project from './components/Project'
import Footer from './components/Footer'
import About from './components/About'
import Navbar from './components/Navbar'
function App() {
  

  return (
    <>
    <ProjectState>
      <Navbar/>

    <Home/>
    <About/>
    <Project/>
    <Footer/>
    </ProjectState>
    </>
  )
}

export default App
