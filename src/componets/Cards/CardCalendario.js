// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import { DateCalendar } from '@mui/x-date-pickers';
// import MenuSuperior from '../MenuSuperior';


// export default function CardCalendario() {
//   return (
//     <React.Fragment>
//       <MenuSuperior>Calendario</MenuSuperior>
//       <Typography component="p" variant="h4">
//       </Typography>
//       <Typography color="text.secondary" sx={{ flex: 1 }}>
//       </Typography>
//       <div>
//       <DateCalendar />
//       </div>
//     </React.Fragment>
//   );
// }

import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function CardCalendario() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider>
  );
}