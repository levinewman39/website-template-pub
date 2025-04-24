import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'grey',
        color: 'white',
        textAlign: 'center',
        py: 2,
        mt: 'auto',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Organization are awesome! All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;