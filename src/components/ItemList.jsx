// Ejercicio 10: Recibe la prop 'items' (array)
export function ItemList({ items = [] }) {
    return (
        <div style={{ margin: '10px 0' }}>
            <h4>Lista de Elementos:</h4>
                <ul>
                    {items.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
        </div>
    );
}