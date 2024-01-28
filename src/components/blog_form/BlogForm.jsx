import React from 'react';
import { Box, Typography, Card, CardContent, Stack, Input, InputLabel, TextareaAutosize, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#1a1a1a', color: '#fff', padding: '20px' }}>
            <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '20px', width: '50%', minWidth: '300px', border: '2px solid #fff' }}>
                <CardContent>
                    <Typography variant='h3' sx={{ textAlign: 'center', marginBottom: '20px', color: '#fff' }}>Add Blog</Typography>
                    <Stack spacing={2}>
                        <InputLabel htmlFor="blogName" sx={{ color: '#fff' }}>Blog Name:</InputLabel>
                        <Input variant='outlined' type="text" id="blogName" name="blogName" fullWidth />

                        <InputLabel htmlFor="authorName" sx={{ color: '#fff' }}>Author Name:</InputLabel>
                        <Input variant='outlined' type="text" id="authorName" name="authorName" fullWidth />

                        <InputLabel htmlFor="description" sx={{ color: '#fff' }}>Description:</InputLabel>
                        <TextareaAutosize variant='outlined' id="description" name="description" minRows={5} fullWidth />

                        <Button
                            variant='contained'
                            onClick={() => { navigate('/home') }}
                            sx={{ marginTop: '20px', width: '100%' }}
                        >
                            Submit Blog
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
};

export default BlogForm;
