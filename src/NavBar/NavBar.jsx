import styles from "./NavBar.module.css"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Resume from "../Assests/cv.pdf"
import {HashLink as Link} from "react-router-hash-link"
import { SiLetterboxd } from "react-icons/si";

const linkStyle = { color: "inhert", textDecoration: 'none' };


const pages = ['Home','Skills', 'About Me', 'Projects','Contact Me'];


function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <div >
    <AppBar position="static" 
    sx={{ 
      background: 'linear-gradient(180deg, #121212 0%, #121212 100%)',zIndex : "10"
    }}
   
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
        <Typography
         variant="h3"
         noWrap
         component="a"
         sx={{
           mr: 2,
           display: { xs: 'none', md: 'flex' },
           fontFamily: 'monospace',
           fontWeight: 700,
           letterSpacing: '.3rem',
           textDecoration: 'none',
          }}
        >
        <SiLetterboxd
         style={{
         fontSize: 'inherit',
         fill: 'url(#gradient)',
        }}
       />
  <svg width="0" height="0">
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{ stopColor: '#FF8C00', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: '#FF4500', stopOpacity: 1 }} />
    </linearGradient>
  </svg>
</Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
             
              }}
            >
              {pages.map((page) => (
              <Link to={`#${page}`} smooth style={linkStyle}>  <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem></Link>
              ))}
            </Menu>
          </Box>
          <Typography
          
            variant="h3"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' } ,
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              
              textDecoration: 'none',
             
            }}
     
          >
           <SiLetterboxd />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , justifyContent : "center" }}>
            {pages.map((page) => (
                <Link to={`#${page}`} smooth style={linkStyle}>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',mx :2 }}
                className={styles.subHeading}
              >
              {page}
              </Button>
              </Link>
            ))}
          </Box>

          <Button 
  variant="contained" 
  sx={{ 
    background: 'linear-gradient(90deg, #FF8C00 50%, #FF4500)',
    '&:hover': {
      background: 'linear-gradient(90deg, #FF8C00, #FF4500)',
    }
  }}
>
<a 
   href={Resume} 
   download="ShivamSharma.pdf"  
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    DOWNLOAD CV
  </a>
</Button>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}
export default NavBar;