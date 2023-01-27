import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import f from './foot.module.css'

export const Footer = () => {


    return (
        <Box className={f.footer__box}   >

            <Link href='https://t.me/Siverk'   target="blank" className={f.footer__link}>
                <TelegramIcon className={f.footer__icon}/>
            </Link>

            <Link href='mailto:foxtail25@gmail.com&subject=От сайта с постами'   target="blank"  className={f.footer__link}>
                <AlternateEmailIcon className={f.footer__icon}/>

            </Link>

            <Link href='https://github.com/FoxTail25'  target="blank" className={f.footer__link}>
                
                <GitHubIcon  className={f.footer__icon}/>

            </Link>


        </Box>
    );
}
