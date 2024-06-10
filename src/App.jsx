import react from 'react'
import {
  BrowserRouter , Routes,

  Route,
 
} from "react-router-dom";
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  

  return (
    <>

<BrowserRouter>
    <Routes>

    <Route path='/Home' element={<Home></Home>}/>     
   <Route path='/About' element={<About></About>}/>
    <Route path='/Project' element={<Project></Project>}/>
    <Route path='/Contact' element ={<Contact></Contact>}/>
    </Routes>
    </BrowserRouter>




    </>
  )
}

export default App
