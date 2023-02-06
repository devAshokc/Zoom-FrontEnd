import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate = useNavigate();
  return <>
    <div className='home-sd'>
    <AppBar className='navbar'sx={{background:"rgb(68 87 96)"}} position="relative">
                <Toolbar>
                    <Typography onClick={() => navigate('/')} 
                    className='logo' 
                    variant="h6" 
                    component="img" 
                    src='https://www.freepnglogos.com/uploads/zoom-logo-png/logo-transparent-background-zoom-png-zoom-rooms-22.png'
                    alt='into-Zoom' 
                    sx={{ 
                      flexGrow: 1,
                      marginRight:"auto",
                      width:"40px", 
                      height:"30px",
                      objectFit:"contain" }}>
                    </Typography>
                    <Button onClick={() => navigate('/users/login')} sx={{color:"white"}}>Login</Button>
                    <Button onClick={() => navigate('/users/signup')} sx={{color:"white"}}>Signup</Button>
                </Toolbar>
            </AppBar>
            <div className='intro-container' >
                <div className='intro'>
                    <h1>Create your free Basic account </h1>
                    <h1>Verify Your Account</h1>
                </div>
                <Button
                    variant="contained"
                    className='viewProducts'
                    onClick={() => navigate('/users/signup')}
                >
                    Join a Meeting
                </Button>
            </div>
    </div>
  </>
}

