import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './CSS/Tarefas.css';


const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/task/all');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/task', { descricao: newTask });
      setTasks([...tasks, response.data]);
      setNewTask('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (_id) => {
    try {
      await axios.delete(`http://localhost:3000/task/${_id}`);
      setTasks(tasks.filter((task) => task.id !== _id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className='container'>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.descricao}
            <button onClick={() => deleteTask(task._id)}>Apagar</button>
          </li>
        ))}
      </ul>
      <input fullWidth label="Digite uma tarefa..." id="normal" type="text" value={newTask} onChange={handleTaskChange} />
      <Button onClick={addTask} variant="contained" type="submit" endIcon={<SendIcon />}>
        </Button>
    </div>
  );
};

export default TaskList;
