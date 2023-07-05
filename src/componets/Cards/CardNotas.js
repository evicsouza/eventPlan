import * as React from 'react';
import MenuSuperior from '../MenuSuperior';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from 'react';


export default function CardNotas() {

  const [descricao, setDescricao] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      axios.post('http://localhost:3000/api/task', { descricao })
    }
    catch (erro) {
      if (erro.response && erro.response.status === 400) {
        console.log("errou")
      }
    }
  };

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [list, setList] = useState([]);
  const getList = async (event) => {
    try {
        axios.get('http://localhost:3000/api/task/all')
        .then((response) => {
          setList(response.data.descricao);
        })
    }
    catch (erro) {
        if (erro.response && erro.response.status === 400) {
        }
    }
};
  useEffect(() => {
    getList();
  })

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/api/task/all');
  //       setList(response.descricao);

  //     } catch (error) {
  //       console.error('Erro ao obter os dados da API:', error);
  //     }
  //   };
  
  //   fetchData();
  // }, []);


  return (
    <React.Fragment>
      <MenuSuperior>Tarefas</MenuSuperior>

      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              secondaryAction={
              //   <IconButton edge="" aria-label="edit">
              //   <EditIcon />
              // </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId}}
                  />
                </ListItemIcon>
                <ListItemText onChange={useEffect} id={labelId} primary={useEffect} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <TextField fullWidth label="Digite uma tarefa..." id="normal" onChange={(event) => setDescricao(event.target.value)} />
      <Button onClick={handleSubmit} variant="contained" type="submit" endIcon={<SendIcon />}>
        Enviar
      </Button>
    </React.Fragment>
  );
}