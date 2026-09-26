import { useParams } from 'react-router-dom';

export function Profile() {
    // useParams() es un Hook de react-router-dom que extrae los parámetros dinamicos definidos en la URL
    const { username } = useParams();

    return (
        <div>
            <h2>Perfil de Usuario</h2>
            {/* Mostramos dinámicamente el valor extraído del parámetro :username */}
            <p>Viendo la informacio de: <strong>{username}</strong></p>
        </div>
    );
}