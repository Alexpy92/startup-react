import {useState} from 'react';

export function Counter() {

    const [count, setCount] = useState(0);

        return (
            <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px',margin: '10px 0' }}>
                <h3>Contador Funcional</h3>
                <p>Valor Actual: <strong>{count}</strong></p>
                <button onClick={() => setCount(count + 1)}>
                    Incrementar
                </button>
            </div>
        );
}