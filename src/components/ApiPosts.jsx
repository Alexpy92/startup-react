import { useState, useEffect } from 'react';

export function ApiPosts() {
    
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
    
    const fetchPosts = async () => {
        try {
        
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        
        
        if (!response.ok) {
            throw new Error('Error al obtener los datos de la API');
        }

        
        
        const data = await response.json();
        
        
        
        setPosts(data.slice(0, 10));
        } catch (err) {
        
        
        setError(err.message);
        } finally {
        
        
        setLoading(false);
        }
    };

    fetchPosts();
    }, []);
    
    if (loading) {
    return <p>Cargando posts de la API...</p>;
    }

    if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
    }

    return (
    <div style={{ margin: '15px 0' }}>
        <h3>Publicaciones (API JSONPlaceholder)</h3>
        <ul>
        
        {posts.map((post) => (
            <li key={post.id}>
            <strong>{post.title}</strong>
            </li>
        ))}
        </ul>
    </div>
    );
}