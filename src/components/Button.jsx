import styled from 'styled-components';

// Ejercicio 14: Definición del Styled Component con fondo azul y texto blanco
const StyledButton = styled.button`
    background-color: #007bff;
    color: #ffffff;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;

    &:hover {
    background-color: #0056b3;
    }

    &:active {
    transform: scale(0.98);
    }
`;

export function Button() {
  // Ejercicio 5: Alerta interactiva al pulsar el botón
    const handleClick = () => {
    alert("Botón pulsado");
    };

    return (
    <div style={{ margin: '15px 0' }}>
      {/* Usamos la etiqueta del componente estilizado */}
        <StyledButton onClick={handleClick}>
        Click me
        </StyledButton>
        
      {/* Ejercicio 3: Texto adicional debajo del botón */}
        <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#555' }}>
        Botón interactivo
        </p>
    </div>
    );
}