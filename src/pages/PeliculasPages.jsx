import peliculas from '../data/peliculas';
import List from '../components/List';

/**
 * Página del Listado de Películas
 * Muestra la cuadrícula de películas disponibles.
 */
export default function PeliculasPage() {
  return (
    
    <section> 
      <h2 className="text-2xl font-semibold mb-4 text-center">Listado de películas</h2>
      <List items={peliculas} />
    </section>
  );
}