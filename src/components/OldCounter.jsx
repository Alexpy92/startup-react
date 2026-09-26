import React, { Component } from 'react';

export class OldCounter extends Component {
    constructor(props) {
        super(props);
        // Inicializacion del estado en componente de clase
        this.state = {
            count: 0
        };

    }

    // Metodo para actualizar el estado
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

        render() {
            return (
                <div style={{ 
                    boreder: '1px solid #aaa',
                    padding: '15px',
                    borderRadius: '8px',
                    margin: '10px 0'
                }}>
                    <h3> Contador de Clase (OldCounter)</h3>
                    <p>Valor actual: <strong>{this.state.count}</strong></p>
                    <button onClick={this.increment}>
                        Increment (Clase)
                    </button>
                </div>
            )
        };
}