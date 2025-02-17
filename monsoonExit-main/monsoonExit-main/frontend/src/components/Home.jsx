import { Alert, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null); // State to store error
    const [reFetch, setReftech] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get("http://localhost:3001/get");
                if (data) {
                    setProducts(data);
                }
            } catch (error) {
                setError(error.message); // Set error state
            }
        };
        fetch(); // Call the fetch function
    }, [reFetch]);

    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete("http://localhost:3001/delete/".concat(id));
            if (data) {
                setError(data.message);
                setReftech(!reFetch)
            }
        } catch (error) {
            setError(error.message); // Set error state
        }
    }

    return (
        <div>
            {error && <Alert severity="error">{error}</Alert>}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', }}>
                {products.length > 0 && (
                    products.map((product) => (
                        <Card key={product._id} style={{ width: '250px' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={product.img_url}
                                alt={product.title}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.content}
                                </Typography>
                            </CardContent>
                            <div>
                                <Button onClick={() => navigate('/add', { state: { product } })}>Edit</Button>
                                <Button onClick={() => handleDelete(product._id)}>delete</Button>
                            </div>
                        </Card>
                    ))
                ) }
            </div>
        </div>
    );
}

export default Home;
