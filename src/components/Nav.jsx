import { useState } from "react";
import { NavLink } from 'react-router-dom';

// Clases de estilo activo/inactivo (manteniendo tus estilos base)
const activeClass = ({ isActive }) => 
  isActive 
    ? 'text-blue-600 font-semibold' 
    : 'text-gray-700 hover:text-blue-500';

export default function Nav() {
  // Estado para controlar la apertura/cierre en móvil
  const [open, setOpen] = useState(false);
  const menuId = "main-navigation-menu";

  return (
    <>
      {/* Solo se ve en pantallas pequeñas o móviles */}
      <button
        aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(!open)}
        // Solo visible en móvil, oculto en md o superior
        className="text-gray-700 text-2xl p-2 md:hidden focus:outline-none focus:ring"
      >
        {/* Se cambia el icono dependiendo del estado */}
        {open ? '✕' : '☰'}
      </button>

      {/* 2. Menú de Navegación */}
      <nav 
        aria-label="Menú principal"
        id={menuId}
      
        className={`${open ? 'block' : 'hidden'} md:flex`}
      >
        {/*
          En móvil: la lista es vertical por defecto si la pones en 'block'.
          En desktop: usamos flex y gap para la disposición horizontal.
        */}
        <ul className="flex flex-col md:flex-row gap-4 items-center">
        
          {/* Los NavLink llaman a setOpen(false) para cerrar el menú en móvil */}
          
          <li>
            <NavLink to="/" className={activeClass} end onClick={() => setOpen(false)}>
              Inicio
            </NavLink>
          </li>
      
          <li>
            <NavLink to="/peliculas" className={activeClass} onClick={() => setOpen(false)}>
              Películas
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/interpretes" className={activeClass} onClick={() => setOpen(false)}>
              Intérpretes
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/login" className={activeClass} onClick={() => setOpen(false)}>
              Login
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/admin" className={activeClass} onClick={() => setOpen(false)}>
              Admin
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </>
  );
}