import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import MenuSuperior from '../MenuSuperior';

function preventDefault(event) {
  event.preventDefault();
}

export default function CardCalendario() {
  return (
    <React.Fragment>
      <MenuSuperior>Calendario</MenuSuperior>
      <Typography component="p" variant="h4">
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      </Typography>
      <div>
      </div>
    </React.Fragment>
  );
}