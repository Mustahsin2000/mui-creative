import { Box, Button, Stack, Typography, styled } from '@mui/material';
import React from 'react';


const BrandingWrapper = styled(Box)(({theme})=>({
    height:'80vh',
    backgroundColor:'#EBEDEF',
    padding:theme.spacing(5),
    margin:'3rem 0',
    display:'flex',
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',//css clip path diye different design kora jay
    justifyContent:'space-between',
    alignItems:'center'
}));

const Branding = () => {
    return (
      <BrandingWrapper>
       <Stack spacing={4} sx={{
        width:'40%'
       }}>
      <Typography
               sx={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  lineHeight: '1.2',
               }}
            >
               Let’s Grow Your <span
               sx={{color:'primary.green'}}
               >Brand</span> <br /> To The Next Level
            </Typography>
            <Typography>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
               commodo ipsum duis laoreet maecenas. Feugiat{' '}
            </Typography>
            <Button
               sx={{
                  width: '200px',
                  bgcolor:'primary.green',
               }}
            >
               Hire Us
            </Button>
      </Stack>
      <Box 
       sx={{
        width: '45%',
        // display: ['none', 'none', 'block'],
        display: {
           xs: 'none',
           sm: 'none',
           md: 'block',
        },
     }}
      >
        <img src="https://i.ibb.co/sPXVMbC/Frame.png" alt="" style={{ width: '100%' }}/>
      </Box>
      </BrandingWrapper>
    );
};

export default Branding;