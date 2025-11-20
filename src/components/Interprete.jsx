// src/components/Interprete.jsx
import React from 'react';


export default function Interprete({ foto, nombre, children }) { 
  return (
    <article
      tabIndex={0}
     
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
      aria-label={`Intérprete ${nombre}`} 
    >
   
      <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
        
        <img
          src={foto}
          alt={`Foto de ${nombre}`}
          loading="lazy"
          className="w-full h-full object-cover" 
        />
      </figure>

   
      <h3 className="mt-3 text-xl font-bold text-gray-900">
        {nombre}
      </h3>
      
    
      <p className="text-sm text-gray-700 mt-1 line-clamp-3">
        {children}
      </p>
    </article>
  );
}