import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

class MenuSuperior {
  render() {
    return (
      <React.Fragment>
        <AppBar position="fixed">
          <Toolbar>{/* content */}</Toolbar>
        </AppBar>
        <Toolbar />
      </React.Fragment>
    );
  }
}

export default MenuSuperior;
