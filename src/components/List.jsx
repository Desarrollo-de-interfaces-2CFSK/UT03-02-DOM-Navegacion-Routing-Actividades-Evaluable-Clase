/**
 * List component - renders a responsive grid of items either as interpreters or as movie cards.
 *
 * @param {Object} props
 * @param {Array<Object>} [props.items=[]] - Array of items to render. Shape varies depending on `esInterprete`:
 *   - Interpreter items: { id?: string|number, nombre: string, imagen?: string, biografia?: string }
 *   - Movie items: { id: string|number, nombre: string, cartelera?: string }
 * @param {boolean} [props.esInterprete=false] - When true, each item is rendered using the Interprete component
 *   (Interprete receives `nombre` and `foto` props and the biography is passed as children). When false,
 *   each item is rendered as a movie card showing an image, title and a react-router Link to `/pelicula/{id}`.
 *
 * Behavior & accessibility notes:
 * - Uses `item.id` as the list key if available; otherwise falls back to `item.nombre`.
 * - The outer element is a <ul> with role="list" and responsive grid classes for layout.
 * - Movie card image uses `item.cartelera` as `src` and `alt={`Cartel ${item.nombre}`}`.
 * - The movie card contains a Link to `/pelicula/{item.id}` for client-side navigation.
 *
 * @returns {JSX.Element} A <ul> containing the rendered list items.
 */
import { Link } from 'react-router-dom'; 
import Interprete from './Interprete'; 


export default function List({ items = [], esInterprete = false }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4" role="list">
      {items.map(item => (
        <li key={item.id || item.nombre}>
          
          {/* ¿Es intérprete? Sí o No */}
          {esInterprete ? (
            <Interprete 
              nombre={item.nombre} 
              foto={item.imagen} 
            >
              {/* Pasamos la biografía como children */}
              {item.biografia} 
            </Interprete>
          ) : (
            /* TARJETA DE PELÍCULA (Por defecto) */
            <article className="bg-white rounded shadow hover:shadow-md transition p-3">
              <img 
                src={item.cartelera} 
                alt={`Cartel ${item.nombre}`} 
                className="w-full h-64 object-cover rounded"
              />
              <h3 className="mt-2 font-semibold">{item.nombre}</h3>
              
              {/* Enlace de Router  */}
              <Link to={`/pelicula/${item.id}`} className="inline-block mt-2 text-blue-600">
                Ver detalle
              </Link>
            </article>
          )}

        </li>
      ))}
    </ul>
  );
}