import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Importación de componentes reutilizables
import { Button } from './components/Button';
import { Counter } from './components/Counter';
import { OldCounter } from './components/OldCounter';
import { Greeting } from './components/Greeting';
import { Clock } from './components/Clock';
import { ItemList } from './components/ItemList';
import { ApiPosts } from './components/ApiPosts';

// Importación de componentes de páginas para el enrutamiento
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { Profile } from './components/pages/Profile';
import { NotFound } from './components/pages/NotFound';

function App() {
  // Arreglo de datos de prueba para renderizar en la lista dinámica
  const sampleItems = ['Aprender React', 'Configurar Rutas', 'Consumir APIs', 'Entregar Proyecto'];

  return (
    // BrowserRouter provee el contexto de navegación a toda la aplicación
    <BrowserRouter>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* NAVEGACIÓN PRINCIPAL: Enlaces para cambiar de ruta sin recargar la página */}
        <header style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px', marginBottom: '20px' }}>
          <h1>Startup Project</h1>
          <nav style={{ display: 'flex', gap: '15px' }}>
            <Link to="/">Inicio</Link>
            <Link to="/about">Acerca de</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="/profile/Alex">Mi Perfil</Link>
          </nav>
        </header>

        {/* VISTAS DE RUTAS: Define qué componente se renderiza según la URL actual */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Ruta dinámica que recibe parámetros vía useParams */}
            <Route path="/profile/:username" element={<Profile />} />
            {/* Ruta comodín (*) para capturar errores 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <hr style={{ margin: '30px 0' }} />

          {/* MUESTRARIO DE COMPONENTES DE LA GUÍA PRACTICA */}
          <section>
            <h2>Laboratorio de Componentes React</h2>
            {/* Reloj con ciclo de vida / useEffect */}
            <Clock />
            {/* Componente funcional con props y renderizado condicional */}
            <Greeting name="Alex" isLogged={true} />
            {/* Botón interactivo estilizado con styled-components */}
            <Button />
            {/* Contador basado en estado (useState) */}
            <Counter />
            {/* Contador legacy basado en clase de React */}
            <OldCounter />
            {/* Lista con renderizado iterativo (.map) */}
            <ItemList items={sampleItems} />
            {/* Consumo de API asíncrona mediante fetch */}
            <ApiPosts />
          </section>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;