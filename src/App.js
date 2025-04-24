import * as React from 'react';
import AppRouter from './Pages/Router';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Footer from './Pages/Footer';

const pages = ['Home' , 'Get Involved', 'Our Work', 'About'];
const resources = ['Bulletin', 'Community Links'];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography
          variant="h6"
          noWrap
          component="a"
          href="Home"
          sx={{
            mr: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', 
            fontFamily: 'arial',
            fontWeight: 'bold',
            color: 'Black',
            textDecoration: 'none',
            
            
          }}
        >
          <img
            src="/logo192.png"
            style={{ height: '75px', width: 'auto', padding: '10px' }}
          />
          Organization
        </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: '50px',  alignItems: 'center', justifyContent: 'center',}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                href={page}
                sx={{ my: 2, color: 'black', display: 'block', fontWeight: 'bold', fontFamily: 'arial', fontSize: '16px',
                '&:hover': {
                  backgroundColor: '#f0f0f0', // Light gray background on hover
                  color: '#000', // Black text color on hover
                },
                }}
              >
                {page}
              </Button>
            ))}

            

          <Box sx={{ flexGrow: 0 }}>
            <Button onClick={handleOpenUserMenu}
              sx={{ my: 2, color: 'black', display: 'block', fontWeight: 'bold', fontFamily: 'arial', fontSize: '16px',
                '&:hover': {
                  backgroundColor: '#f0f0f0', // Light gray background on hover
                  color: '#000', // Black text color on hover
                },
              }}
            >
              Resources
            </Button>
            <Menu
              sx={{ mt: '45px', marginLeft: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {resources.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            
            <Button 
              sx={{ my: 2, color: 'white', display: 'block', fontWeight: 'bold', fontFamily: 'arial', fontSize: '16px', borderRadius: '25px', border: '2px solid black', backgroundColor: "red", marginLeft: '20px', '&:hover': {
                  backgroundColor: '#f0f0f0', // Light gray background on hover
                  color: '#000', // Black text color on hover
                }, 
              }} 
              href="https://ko-fi.com/">
              DONATE
            </Button>
          </Box>
      
        </Toolbar>
      </Container>
      <AppRouter />
    </AppBar>
    <Footer /> 
    </>
    
  );
}
export default ResponsiveAppBar;
