
import peliculas from '../data/peliculas';
import List from '../components/List';
import Interprete from '../components/Interprete'; 

const getAllInterpretes = (peliculas) => {
  const mapa = new Map();

  peliculas.forEach(pelicula => {
    pelicula.actores.forEach(actor => {
      // Map para evitar duplicado
      mapa.set(actor.nombre, {
        nombre: actor.nombre,
        imagen: actor.imagen,
        biografia: actor.biografia,
        id: actor.nombre  
      });
    });
  });

  return Array.from(mapa.values());
};



export default function InterpretesPage() {
  //  Obtenemos la lista única de intérpretes
  const interpretes = getAllInterpretes(peliculas);

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-center">Listado de Intérpretes</h2>
      
      {/* Llamo al componente List, le paso la funccion renderItem */}
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