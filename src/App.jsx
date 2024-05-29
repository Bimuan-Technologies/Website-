
import './App.css'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Services from './Components/pages/services/Services';
// import Services from './Components/pages/services/Services';




function App() {
  

  return (
    <HashRouter>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route path="/service" element={<Services/>} />
    </Routes>
   </HashRouter>
  )
}

export default App
