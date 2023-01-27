import { Box, Modal } from '@mui/material';
import React, { useState } from 'react'
import '../education.css'


export const SberUniver = () => {

    const [imgSrc, setImgSrc] = useState()
    const [sertText, setSertText] = useState('May')
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    function getImgSrc(e) {
        setImgSrc(e.target.parentElement.children[1].src)
        setSertText(e.target.parentElement.children[0].innerHTML)
        handleOpen();
    }


    return (
        <>
            <div className='education_block flex_column'>

                <h5  className='education__accordion__header_text'>
                    АНО ДПО "Корпоративный университет Сбербанка"
                </h5>

                <div className='flex_row'>
                    <h4 className='education_text' onClick={(e) => getImgSrc(e)}>Сертификат Основы HTML и CSS</h4>
                    <img src='./img/sertificate/html_css.jpg' alt='Сертификат HTML и CSS' className='education__sertificate' onClick={(e) => getImgSrc(e)} />
                </div>

                <div className='flex_row'>
                    <h4 className='education_text' onClick={(e) => getImgSrc(e)}>Сертификат Основы программирования на JavaScript I</h4>
                    <img src='./img/sertificate/js1.jpg' alt='Сертификат HTML и CSS' className='education__sertificate' onClick={(e) => getImgSrc(e)} />
                </div>

                <div className='flex_row'>
                    <h4 className='education_text' onClick={(e) => getImgSrc(e)}>Сертификат Основы программирования на JavaScript II</h4>
                    <img src='./img/sertificate/js2.jpg' alt='Сертификат HTML и CSS' className='education__sertificate' onClick={(e) => getImgSrc(e)} />
                </div>

                <div className='flex_row'>
                    <h4 className='education_text' onClick={(e) => getImgSrc(e)}>Сертификат Управление веб-страницей с помощью JavaScript</h4>
                    <img src='./img/sertificate/js_dom.jpg' alt='Сертификат HTML и CSS' className='education__sertificate' onClick={(e) => getImgSrc(e)} />
                </div>

            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    //  sx={style} 
                    className='flex_column modal__box'
                >

                    <img src={imgSrc} alt='img' style={{ width: '100%' }} onClick={() => handleClose()} />
                    <h2 className='modal__box_text'>{sertText}</h2>

                </Box>
            </Modal>
        </>

    )
}
