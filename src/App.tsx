import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import MembersPage from './pages/MembersPage/MembersPage'
import ContactPage from './pages/ContactPage/ContactPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ComHeader from './components/Layout/ComHeader'
import SemHeader from './components/Layout/SemHeader'

function App() {

  return (
    <Router>
      <Routes>

        {/*Páginas com Header*/}
        <Route element={<ComHeader />}>
          <Route path='/' element={<HomePage />}/>
          <Route path='/membros' element={<MembersPage />}/>
          <Route path='/contato' element={<ContactPage />}/>
          <Route path='/sobre' element={<AboutPage />}/>
        </Route>

        {/*Páginas sem Header*/}
        <Route element={<SemHeader />}>

        </Route>

      </Routes>

    </Router>
  )
}

export default App
