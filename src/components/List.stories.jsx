import React from 'react';
import List from './List';
import { MemoryRouter } from 'react-router-dom';

/**
 * Mock data: imágenes públicas para que las cards se vean bien en Storybook.
 * Ajusta rutas si prefieres imágenes locales.
 */
const MOVIE_ITEMS = [
  { id: 1, nombre: 'El sexto sentido', cartelera: 'https://www.ecartelera.com/carteles/5400/5409/001.jpg' },
  { id: 2, nombre: 'Pulp Fiction', cartelera: 'https://www.ecartelera.com/carteles/200/286/001.jpg' },
  { id: 3, nombre: '300', cartelera: 'https://upload.wikimedia.org/wikipedia/en/5/5c/300poster.jpg' },
  { id: 4, nombre: 'El silencio de los corderos', cartelera: 'https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg' },
  { id: 5, nombre: 'Forrest Gump', cartelera: 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg' },
  { id: 6, nombre: 'Concursante', cartelera: 'https://www.ecartelera.com/carteles/1300/1364/001.jpg' },
];

const INTERPRETE_ITEMS = [
  { id: 1, nombre: 'Bruce Willis', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bruce_Willis_by_Gage_Skidmore_3.jpg/330px-Bruce_Willis_by_Gage_Skidmore_3.jpg', biografia: 'Actor principal en El sexto sentido.' },
  { id: 2, nombre: 'Haley Joel Osment', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Haley_Joel_Osment_TIFF_2014.jpg/500px-Haley_Joel_Osment_TIFF_2014.jpg', biografia: 'Actor icónico por su papel en El sexto sentido.' },
  { id: 3, nombre: 'Toni Collette', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Toni_Collette_%288968233309%29.jpg/330px-Toni_Collette_%288968233309%29.jpg', biografia: 'Actriz destacada en El sexto sentido.' },
  { id: 4, nombre: 'John Travolta', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/John_Travolta_Cannes_2018.jpg/330px-John_Travolta_Cannes_2018.jpg', biografia: 'Protagonista en Pulp Fiction.' },
  { id: 5, nombre: 'Uma Thurman', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Uma_Thurman_Cannes_2017_%28cropped%29.jpg/330px-Uma_Thurman_Cannes_2017_%28cropped%29.jpg', biografia: 'Actriz clave en Pulp Fiction como Mia Wallace.' },
  { id: 6, nombre: 'Samuel L. Jackson', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/SamuelLJackson.jpg/500px-SamuelLJackson.jpg', biografia: 'Actor emblemático en Pulp Fiction como Jules.' },
  { id: 7, nombre: 'Gerard Butler', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Gerard_Butler_%2829681162176%29.jpg/330px-Gerard_Butler_%2829681162176%29.jpg', biografia: 'Rey Leónidas en 300.' },
  { id: 8, nombre: 'Lena Headey', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Lena_Headey_%2847086135862%29_%28cropped%29.jpg/330px-Lena_Headey_%2847086135862%29_%28cropped%29.jpg', biografia: 'Reina Gorgo en 300.' },
  { id: 9, nombre: 'Jodie Foster', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Jodie_Foster-8667.jpg/500px-Jodie_Foster-8667.jpg', biografia: 'Clarice Starling en El silencio de los corderos.' },
  { id: 10, nombre: 'Anthony Hopkins', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/AnthonyHopkins10TIFF.jpg/500px-AnthonyHopkins10TIFF.jpg', biografia: 'Hannibal Lecter en El silencio de los corderos.' },
  { id: 11, nombre: 'Robin Wright', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Robin_Wright_Cannes_2017_%28cropped%29.jpg/330px-Robin_Wright_Cannes_2017_%28cropped%29.jpg', biografia: 'Jenny Curran en Forrest Gump.' },
  { id: 12, nombre: 'Tom Hanks', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg/330px-TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg', biografia: 'Forrest Gump, actor principal.' },
  { id: 13, nombre: 'Leonardo Sbaraglia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Leonardo_Sbaraglia.jpg/330px-Leonardo_Sbaraglia.jpg', biografia: 'Protagonista en Concursante.' },
  { id: 14, nombre: 'Miryam Gallego', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Miryam_Gallego.jpg/330px-Miryam_Gallego.jpg', biografia: 'Actriz en cine y series, participa en Concursante.' },
];



/**
 * Simple visual wrapper para que las stories se vean profesionales.
 * Si usas Tailwind, las clases funcionarán; si no, el diseño sigue siendo limpio.
 */
const StoryWrapper = ({ children }) => (
  <div style={{ minHeight: '100vh', padding: 24, background: '#f8fafc' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: 20 }}>
        <h2 style={{ margin: 0, color: '#0f766e', fontSize: 28, fontWeight: 700 }}>List — Demo</h2>
        <p style={{ marginTop: 6, color: '#6b7280' }}>Responsive grid: movie cards & interpreters</p>
      </header>
      {children}
    </div>
  </div>
);

export default {
  title: 'Components/List',
  component: List,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <StoryWrapper>
          <Story />
        </StoryWrapper>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Responsive `List` component that renders either movie cards (default) or interpreter views when `esInterprete` is true. Wrap stories with `MemoryRouter` so `<Link>` works.',
      },
    },
  },
  argTypes: {
    esInterprete: { control: 'boolean' },
    items: { control: 'object' },
  },
};

/* -------------------------
   Template (CSF pattern)
   ------------------------- */
const Template = (args) => <List {...args} />;

/* -------------------------
   Stories
   ------------------------- */

/** 1) Movies (default) */
export const Movies = Template.bind({});
Movies.args = {
  items: MOVIE_ITEMS,
  esInterprete: false,
};
Movies.storyName = 'Movies — Default';

/** 2) Interpreters */
export const Interpreters = Template.bind({});
Interpreters.args = {
  items: INTERPRETE_ITEMS,
  esInterprete: true,
};
Interpreters.storyName = 'Interpreters';

/** 3) Empty state */
export const Empty = Template.bind({});
Empty.args = {
  items: [],
  esInterprete: false,
};
Empty.storyName = 'Empty — No items';

/** 4) Many items (responsiveness check) */
export const Many = Template.bind({});
Many.args = {
  items: Array.from({ length: 9 }).map((_, i) => {
    // alternate between movie-style and interpreter-style data so the grid looks varied
    if (i % 2 === 0) {
      return {
        id: 200 + i,
        nombre: `Movie ${i + 1}`,
        cartelera: `https://picsum.photos/600/900?random=${30 + i}`,
      };
    }
    return {
      id: `int-${i}`,
      nombre: `Interprete ${i + 1}`,
      imagen: `https://picsum.photos/400/400?random=${50 + i}`,
      biografia: 'Biografía breve de ejemplo para la tarjeta de intérprete.',
    };
  }),
  esInterprete: false,
};
Many.storyName = 'Many — Responsiveness';
