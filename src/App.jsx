// src/App.jsx

import { Routes, Route, Navigate } from 'react-router-dom';
import Contenedor from './components/Contenedor';

import HomePage from './pages/HomePage';
import PeliculasPage from './pages/PeliculasPages'; 
import DetailPage from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Admin from './pages/Admin';
import AdminLayout from './pages/AdminLayout';

import InterpretesPage from './pages/InterpretesPage'; 

function App() {
  return (
    <Routes>
    
      <Route element={<Contenedor />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/inicio' element={<Navigate to='/' />} />
        
        <Route path='/peliculas' element={<PeliculasPage />} />
        
    
        <Route path='/interpretes' element={<InterpretesPage />} />
        
        <Route path='/pelicula/:id' element={<DetailPage />} />
        <Route path='/login' element={<Login />} />
      </Route>

    
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />
      </Route>

      <Route path='*' element={
        <Contenedor>
          <ErrorPage />
        </Contenedor>
      } />
    </Routes>
  );
}

export default App;