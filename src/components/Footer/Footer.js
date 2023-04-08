import { Box, Button, Container, Divider, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
   return (
      <Box
         sx={{
            bgcolor: 'primary.green',
            py: 8,
         }}
      >
         <Container>
            <Box
               sx={{
                  display: 'flex',
                  justiFyContent: 'space-between',
                  alignItems: 'center',
               }}
            >
               <Typography
                  sx={{
                     fontSize: '1.5rem',
                     color: '#fff',
                     flex: 1,
                  }}
               >
                  Creative Agency
               </Typography>
               <Box
                  sx={{
                     display: 'flex',
                     justiFyContent: 'space-between',
                     alignItems: 'center',
                  }}
               >
                  <Typography
                     sx={{
                        color: 'rgba(255, 255, 255, 0.5)',
                     }}
                  >
                     Creative Agency
                  </Typography>
                  <Button
                     sx={{
                        bgcolor: 'primary.main',
                        '&:hover': {
                           bgcolor: 'primary.green',
                        },
                        ml: 2,
                     }}
                  >
                     Get Started
                  </Button>
               </Box>
            </Box>
            <Divider
               sx={{
                  mt: 3,
                  bgcolor: 'primary.main'
               }}
            />
         </Container>
      </Box>
   );
};

export default Footer;