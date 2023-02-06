import './App.css';
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/login';
import { Signup } from './components/Signup';
import { Joinin } from './components/Joinin';
import { NotFound } from './components/NotFound';
function App() {
  return (
    <div className="App">
      <div className='routes-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users/login' element={<Login />} />
          <Route path='/users/signup' element={<Signup />} />
          <Route path='/meeting?' element={<Joinin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
