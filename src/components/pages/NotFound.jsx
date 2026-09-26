import { Link } from 'react-router-dom';

// Agrega 'export' al inicio de la función
export function NotFound() {
    return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <h2 style={{ color: 'red' }}>Error 404 - Página no encontrada</h2>
        <p>La ruta a la que intentas acceder no existe.</p>
        <Link to="/">Volver al Inicio</Link>
    </div>
    );
}