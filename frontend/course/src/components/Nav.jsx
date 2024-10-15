import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div >
      <Box>
      <AppBar   sx={{height:'70px'}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
          </IconButton>
          <img
              src="https://static.vecteezy.com/system/resources/previews/007/688/840/original/education-logo-free-vector.jpg" 
              alt="Logo"
              style={{ height: 70, marginRight: 15, marginBottom:10 }}
            />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Course Details
          </Typography>
          <Link to={'/Home'}><Button  color="inherit" sx={{color: 'white'}}>Home</Button></Link>
          <Link to={'/Add'}><Button  color="inherit" sx={{color: 'white'}}>Add</Button></Link>
           </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}
export default Nav
