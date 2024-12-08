import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#1976d2', color: '#fff', padding: '10px', textAlign: 'center' }}>
      <Typography variant="body2">© 2024 Мій сайт. Усі права захищено.</Typography>
      <p>УСЯ ІНФОРМАЦІЯ БУЛА ВИГАДАНА ТА НЕ МАЄ НІЧОГО СПІЛЬНОГО З РЕАЛЬНИМ ПЕРСОНАЖЕМ</p>
    </Box>
  );
}

export default Footer;
