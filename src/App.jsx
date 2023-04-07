import './App.css'
import { Route, Routes } from 'react-router-dom'
import Inicio from './components/Inicio/Inicio';
import Proyectos from './components/Proyectos/Proyectos';
import SobreMi from './components/SobreMi/SobreMi';
import Mas from './components/Mas/Mas';
import Nav from './components/Nav/Nav';


function App() {

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/portafolio/' element={<Inicio/>}/> 
        <Route path='/portafolio/proyectos/' element={<Proyectos/>}/>
        <Route path='/portafolio/sobremi/' element={<SobreMi/>}/>
        <Route path='/portafolio/mas/' element={<Mas/>}/>
      </Routes> 
      
    </div>
  )
}

export default App
