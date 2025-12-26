import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import Login from './pages/Login'
import Signup from './pages/Signup';
import { Toaster } from 'react-hot-toast';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Toaster position="top-center"/>
      <Routes>
      <Route path="/" element={<Navigate to="/login"/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
