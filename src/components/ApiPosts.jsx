import { useState, useEffect } from 'react';

export function ApiPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    // Petición HTTP usando la sintaxis estándar de .then()
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response => response.json())
        .then(data => {
        setPosts(data);
        setLoading(false);
        })
        .catch(error => {
        console.error("Error al cargar la API:", error);
        setLoading(false);
        });
    }, []);

    if (loading) {
    return <p>Cargando publicaciones...</p>;
    }

    return (
    <div style={{ marginTop: '20px' }}>
        <h3>Publicaciones (API JSONPlaceholder)</h3>
        {posts.length === 0 ? (
        <p>No se encontraron publicaciones.</p>
        ) : (
        <ul>
            {posts.map(post => (
            <li key={post.id} style={{ marginBottom: '10px' }}>
                <strong>{post.title}</strong>
                <p style={{ margin: '5px 0', fontSize: '14px', color: '#444' }}>
                {post.body}
                </p>
            </li>
            ))}
        </ul>
        )}
    </div>
    );
}