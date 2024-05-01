import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Appbar from './pages/Appbar'
import Footer from './pages/Footer'
import Hero from './pages/Hero'
import Technologies from './pages/Technologies'
import Resource from './pages/Resource'
import Contact from './pages/Contact'

function App() {

  return (
    <>
    <Router>
      <Appbar />
        <Routes>
          <Route path='/' element={ [<Hero/>, <Technologies/> ]} />
          <Route path='/resource' element={ <Resource/> } />
          <Route path='/contact' element={ <Contact/> } />
        </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
