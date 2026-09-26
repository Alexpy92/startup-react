export function Greeting({ name, isLogged}) {
    return (
        <div style={{
            border: '1px dashed #007bff',
            padding: '12px',
            borderRadius: '6px',
            margin: '10px 0'
        }}>
            {/*Ejercicio 8 */}
        {isLogged ? (
            <h3>Bienvenido, {name}</h3>
        ) : (
            <h3>Por favor, Inicia Sesion</h3>
        )}
        </div>
    );
}