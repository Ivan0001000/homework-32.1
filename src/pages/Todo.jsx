import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <TextField
        label="Нова задача"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
        sx={{ marginBottom: '20px' }}
      />
      <Button variant="contained" onClick={addTask} fullWidth>Додати</Button>
      <List>
        {tasks.map((t, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" onClick={() => deleteTask(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={t} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Todo;
