import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Box } from '@mui/material';

function Swapi() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then((response) => setCharacters(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box p={3}>
      <h1>Персонажі зі SWAPI</h1>
      <List>
        {characters.map((char, index) => (
          <ListItem key={index}>
            <ListItemText primary={char.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Swapi;
