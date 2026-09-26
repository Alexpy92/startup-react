import { useState, useEffect } from 'react';

export function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    // Ejercicio 9: useEffect para manejar temporizador
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);

        //Limpieza del intervalo al desmontar el componente
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{
            background: '#f8f9fa',
            padding: '10px',
            borderRadius: '5px',
            margin: '10px 0'
        }}>
            <h4> Hora Actual</h4>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{time}</p>
        </div>
    )

}