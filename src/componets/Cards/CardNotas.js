import * as React from 'react';
import MenuSuperior from '../MenuSuperior';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';



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

  return (
    <React.Fragment>
      <MenuSuperior>Tarefas</MenuSuperior>
      <TextField fullWidth label="Digite uma tarefa..." id="normal" onChange={(event) => setDescricao(event.target.value)} />
      <Button onClick={handleSubmit} variant="contained" type="submit" endIcon={<SendIcon />}>
        Enviar
      </Button>
    </React.Fragment>
  );
}