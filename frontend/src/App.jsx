import './css/App.css'
import NavBar from './components/NavBar';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <MovieProvider>
      <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
