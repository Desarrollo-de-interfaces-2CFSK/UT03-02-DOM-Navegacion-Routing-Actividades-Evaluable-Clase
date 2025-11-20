
import peliculas from '../data/peliculas';
import List from '../components/List';
import Interprete from '../components/Interprete'; 

const getAllInterpretes = (movies) => {
  const interpretesMap = new Map();

  movies.forEach(pelicula => {
    //  Añadimos la información de la película al objeto del intérprete
    pelicula.actores.forEach(actor => {
      // Usamos el nombre como clave única para evitar duplicados
      if (!interpretesMap.has(actor.nombre)) {
        // Creamos una copia del objeto actor y le añadimos una ID única
        interpretesMap.set(actor.nombre, { 
          ...actor, 
          id: actor.nombre, // Usamos el nombre como ID temporal
    
        });
      }
    });
  });


  return Array.from(interpretesMap.values());
};


export default function InterpretesPage() {
  //  Obtenemos la lista única de intérpretes
  const interpretes = getAllInterpretes(peliculas);

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-center">Listado de Intérpretes</h2>
      
      {/* Usamos el componente List, pero le pasamos una función renderItem */}
      <List 
        items={interpretes} 
        renderItem={(interprete) => (
          // Usamos tu componente Interprete para renderizar cada item
          <Interprete
            key={interprete.id}
            nombre={interprete.nombre}
            foto={interprete.imagen} 
          >
            {interprete.biografia}
          </Interprete>
        )}
      />
    </section>
  );
}