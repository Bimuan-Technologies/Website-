
import './App.css'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Services from './Components/pages/services/Services';
import Contact from './Components/pages/contact/Contact';
import Membership from './Components/pages/membership/Membership';
import Founder from './Components/pages/founder/Founder';





function App() {
  

  return (
    <HashRouter>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route path="/service" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/membership" element={<Membership/>} />
      <Route path="/founder" element={<Founder/>} />
    </Routes>
   </HashRouter>
  )
}

export default App
