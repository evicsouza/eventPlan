import React from 'react';
import MenuSuperior from './MenuSuperior';
import CardTelaInicial from './Card';
import Card from '@mui/material/Card';



export default function TelaInicial() {
  // render() {
    <MenuSuperior></MenuSuperior>
    return (
      <div>
        <h1>Tela Inicial</h1>
        <Card variant="outlined">{
          <CardTelaInicial></CardTelaInicial>
        }</Card>
        <Card variant="outlined">{
          <CardTelaInicial></CardTelaInicial>
        }</Card>
      </div>
    );
  // }
}

// export default TelaInicial;
