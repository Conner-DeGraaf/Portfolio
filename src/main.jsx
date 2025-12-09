import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/home.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from "./components/Projects.jsx"


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/aboutme" element={<AboutMe/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
    
  </BrowserRouter>,
)
