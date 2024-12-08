import React from 'react';
import { Box, Typography } from '@mui/material';

function Home() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Про мене</Typography>
      <Typography variant="body1" paragraph>
        Привіт! Я Казимир Казимирович - Frontend-розробник, який захоплюється створенням сучасних веб-додатків.
      </Typography>
      <Typography variant="h6">Мої навички:</Typography>
      <ul>
        <li>React</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML5 та CSS3</li>
        <li>Material-UI</li>
      </ul>
    </Box>
  );
}

export default Home;
