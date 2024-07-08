import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import h from './header.module.css'

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
    <div className={h.headex__box}>

      <img src="./img/avatar/MyPhoto.jpg" alt='ava' className={h.header__avatar} />


      <div>
        <ThemeProvider theme={theme}>
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
              fontSize: '.7em', marginLeft: '10px'
            }}
            href='#education'
          >Образование</Button>
        </ThemeProvider>
      </div>
    </div>
  );
}