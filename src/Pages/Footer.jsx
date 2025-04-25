import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'grey.900',
        color: 'white',
        textAlign: 'center',
        py: 3,
        mt: 'auto',
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        Organizations are awesome! All rights reserved.
      </Typography>
      <Box>
        <IconButton
          href="https://facebook.com"
          target="_blank"
          rel="noopener"
          sx={{ color: 'white' }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://twitter.com"
          target="_blank"
          rel="noopener"
          sx={{ color: 'white' }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          rel="noopener"
          sx={{ color: 'white' }}
        >
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;