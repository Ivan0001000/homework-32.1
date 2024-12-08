import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Link } from '@mui/material';

function Contacts() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Контакти</Typography>
      <Typography variant="body1" gutterBottom>
        Якщо у вас є запитання або пропозиції, зв'яжіться зі мною:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Email" secondary="example@example.com" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Телефон" secondary="+380 123 456 789" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Адреса" secondary="Київ, Україна" />
        </ListItem>
      </List>
      <Typography variant="h5" gutterBottom>Соціальні мережі:</Typography>
      <List>
        <ListItem>
          <Link href="https://www.linkedin.com/in/example" target="_blank" rel="noopener">
            LinkedIn
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/example" target="_blank" rel="noopener">
            GitHub
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://twitter.com/example" target="_blank" rel="noopener">
            Twitter
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

export default Contacts;
