import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
    const [rows, setRows] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/').then((res) => {
            setRows(res.data);
        })
    }, [])

    const navigate=useNavigate()
    function updateCourse(course){
        navigate('/Add',{state:{course}})
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/delete/' + id)
            .then((res) => {
                // nav('/')
                alert('Data Deleted')
                window.location.reload()
            })
            .catch((err) => {
                console.log(err);
                });

    }


    return (
        <div>
            <Grid2 container spacing={4} justifyContent="center">
                {rows.map((course) => (
                    <Grid2 item key={course.courseId} xs={8} sm={4} md={4} lg={3} sx={{ marginTop: '6%' }} >
                        <Card>
                            <CardContent sx={{ padding: 3 }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {course.courseId}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {course.courseName}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                    {course.courseCategory}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                    {course.courseFee}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained" color="primary" onClick={()=>{
                                    updateCourse(course)
                                    }}>Update</Button>
                                <Button size="small" variant="contained" color="primary" onClick={() => handleDelete(course._id)} >Delete</Button>
                            </CardActions>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </div>
    )
}
export default Home
