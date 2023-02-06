import React from 'react'
import { Paper, Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
export function Joinin() {
  const navigate = useNavigate()
  return (
    <div className='meeting-sd'>
      <Box sx={{ minHeight: "100vh", display: "grid", placeContent: "center" }}>
        <Paper elevation={5} sx={{ padding: "80px" }} >
          <Box
            sx={{
              marginLeft: "46px",
              width: "100px",
              height: "60px",
              objectFit: "contain",
            }}
            component='img'
            src='https://www.freepnglogos.com/uploads/zoom-logo-png/logo-transparent-background-zoom-png-zoom-rooms-22.png'
            alt='into-Zoom'
          >
          </Box>
          <div className='btn-Home'>
            <Button variant='contained' sx={{
              padding: "12px",
              width: "200px",
              borderRadius: "12px"
            }}
              href='https://zoom-backend.onrender.com'
            >Join a Meeting</Button>
            <Button variant="extended"  onClick={() => navigate('/users/login')} sx={{
              borderRadius: "12px",
              border: "1px solid black",
              color: "black",
              padding: "12px",
              width: "200px"
            }}
            >Sign in</Button>
          </div>
        </Paper>
      </Box>
    </div>
  )
}

export default Joinin