import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import h from './header.module.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function ButtonAppBar() {

  const theme = createTheme({
    palette: {
      whitesteel: {
        main: '#dadada',
        light: '#fff',
        dark: '#c0c0c0',
        contrastText: '#fff',
      },
      appBar: {
        main: '#f5f5f5ed',
      }
    },
  });




  return (
    <Box className={h.headex__box}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" className={h.header__appbar} color='appBar'>
          <Toolbar className={h.header__toolbar}>

            <Avatar
              alt="Remy Sharp"
              src="./img/avatar/MyPhoto.jpg"
              className={h.header__avatar}
              sx={{ height: 60, width: 60 }}
            />

            <div>
              <Button variant='contained' size='small'
                color='whitesteel'
                style={{
                  fontSize: '.7em'
                }}
                href='#project'
              >
                Проекты
              </Button>

              <Button variant='contained' size='small'
                color='whitesteel'
                style={{
                  fontSize: '.7em'
                }}
                href='#education'
              >Образование</Button>
              {/* <Button variant='contained' size='small' className={h.header__button}>Увлечения</Button> */}
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}