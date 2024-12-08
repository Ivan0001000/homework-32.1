import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Мій сайт
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Головна</Button>
          <Button color="inherit" component={Link} to="/todo">TODO</Button>
          <Button color="inherit" component={Link} to="/swapi">SWAPI</Button>
          <Button color="inherit" component={Link} to="/contacts">Контакти</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
