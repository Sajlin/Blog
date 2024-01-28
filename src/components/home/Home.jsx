import React, { useState, useEffect } from 'react';
import { Box, Typography, Link, Card, CardContent } from '@mui/material';
import axios from 'axios';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [userId, setUserId] = useState('');
    const [Id, setId] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setBlogs(response.data);
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, []);

    const whenClicked = (userid, id, title) => {
        setUserId(userid);
        setId(id);
        setTitle(title);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', background: '#1a1a1a', color: '#fff', padding: '20px' }}>
            <Box sx={{ position: 'absolute', top: '20px', right: '20px' }}>
                <Link href="/home" sx={{ fontSize: '18px', color: '#fff', textDecoration: 'none', margin: '0 20px' }}>Home</Link>
                <Link href="/blogform" sx={{ fontSize: '18px', color: '#fff', textDecoration: 'none', margin: '0 20px' }}>Add Blog</Link>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'top', flex: 1, width: '100%', }}>
                <Box sx={{ border: '2px solid #fff', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.1)', width: '40%', padding: '20px', marginRight: '20px' }}>
                    <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: '20px', color: '#fff' }}>Blog Dashboard</Typography>
                    <ul style={{ listStyleType: 'none', padding: '0', }}>
                        {blogs.map(blog => (
                            <li key={blog.id} style={{ borderBottom: '1px solid #fff', margin: '10px 0' }}>
                                <p><a onClick={() => whenClicked(blog.userId, blog.id, blog.title)} style={{ cursor: 'pointer', color: '#fff' }}>{blog.id}.{blog.title}</a></p>
                            </li>
                        ))}
                    </ul>
                </Box>

                <Card sx={{ width: '50%', padding: '20px', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '2px solid #fff' }}>
                    <CardContent>
                        <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: '20px', color: '#fff' }}>Blogs</Typography>
                        <p><strong>UserId:</strong> {userId}</p>
                        <p><strong>Id:</strong> {Id}</p>
                        <p><strong>Title:</strong> {title}</p>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default Home;
