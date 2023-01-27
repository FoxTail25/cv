import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{display: 'flex', 
    // flexGrow: 1,
     width: '100%',
     position: 'sticky',
      top: '0', zIndex: '2' }}>
      <AppBar position="static" sx={{ padding: '5px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

          <Avatar
            alt="Remy Sharp"
            src="./img/avatar/MyPhoto2.jpg"
            sx={{ width: 60, height: 60, }}
          />

          <div>
            <Button variant='contained' size='small'>Образование</Button>
            <Button variant='contained' size='small'>Проекты</Button>
            <Button variant='contained' size='small'>Увлечения</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}