import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './views/HomePage'
import ContactForm from './views/ContactForm'
import NotFound from './views/NotFound'
import NavigationBar from './components/NavigationBar'

function App() {

  return (
    <>
     <div>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactForm />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
     </div>
    </>
  )
}

export default App
